import {
  Box,
  Card,
  CardBody,
  Center,
  FormControl,
  Grid,
  GridItem,
  Input,
  Spinner,
  Textarea,
  Tooltip,
} from "@chakra-ui/react";
import { Colors } from "asset/enums";
import NormalText from "components/typography/normalText";
import { BsFillPersonFill, BsInfoLg } from "react-icons/bs";
import DButton from "components/typography/dButton";
import { useCallback, useReducer, useContext, useEffect } from "react";
import { Comment, keyable } from "asset/types";
import api from "../../api/axios";
import _ from "lodash";
import { motion } from "framer-motion";
import Titles from "components/typography/titles";
import { ClientContext } from "components/contexts/client";

const INITIAL_COMMENT = { comment: "", name: undefined };
const NAME = 1;
const COMMENT = 2;
const RESET = 3;
const r1 = (state: Comment, action: keyable): Comment => {
  if (action.type === RESET) {
    return INITIAL_COMMENT;
  }

  let isComment = action.type === COMMENT;
  return {
    name: !isComment ? action.value : state.name,
    comment: isComment ? action.value : state.comment,
  };
};

type Constructor = {
  isFormOpen: boolean;
  allComments: Array<Comment>;
  isSubmiting: boolean;
};

const FORM_OPEN = 1;
const ALL_COMENTS = 2;
const SUBMITING = 3;
const r2 = (state: Constructor, action: keyable): Constructor => {
  switch (action.type) {
    case FORM_OPEN:
      return { ...state, isFormOpen: !state.isFormOpen };
    case ALL_COMENTS:
      return action.function(state);
    case SUBMITING:
      return { ...state, isSubmiting: !state.isSubmiting };
    default:
      return state;
  }
};


type FeedbackProps = { comments: Array<Comment> }
function Feedback({ comments }: FeedbackProps) {
  const [value, dispatch] = useReducer(r1, INITIAL_COMMENT);
  const [
    { isFormOpen, allComments, isSubmiting },
    dispatchConstructorFeedbackSection,
  ] = useReducer(r2, {
    isFormOpen: false,
    allComments: comments ?? [],
    isSubmiting: false,
  });
  const { msg } = useContext(ClientContext);

  useEffect(() => {
    dispatchConstructorFeedbackSection({
      type: COMMENT,
      function: (prev: Constructor) => {
        return { ...prev, allComments: comments };
      },
    });
  }, [comments]);

  const handleChange = (value: string, type: number) =>
    dispatch({ value, type });

  const submit = useCallback(async () => {
    if (!value.comment) {
      return;
    }

    dispatchConstructorFeedbackSection({ type: SUBMITING });

    let obj = { ...value, date: new Date(), new: 1 };

    await api
      .post("api/comments", obj)
      .then(() => {
        dispatch({ type: RESET });
        dispatchConstructorFeedbackSection({
          type: COMMENT,
          function: (prev: Constructor) => {
            return { ...prev, allComments: [...prev.allComments, obj] };
          },
        });
      })
      .catch((err) => { });
    dispatchConstructorFeedbackSection({ type: SUBMITING });
  }, [value]);

  const defProp = {
    w: "30%",
    minW: "43.75em",
    border: `1px solid ${Colors.Orange}`,
    borderRadius: "5px",
    color: Colors.Orange,
    h: "35px",
    _placeholder: { opacity: 0.4, color: Colors.Gray },
  };

  return (
    <Box w="100%" textAlign="center" h="60vh">
      <Box paddingTop="85px">
        <Titles text="Feedback" />

        <Center flexDirection="column" marginTop="25px">
          <DButton
            onClick={() =>
              dispatchConstructorFeedbackSection({ type: FORM_OPEN })
            }
            text={msg.feedback_write_button}
          />
          <FormControl>
            <motion.div
              className="comment-form"
              initial={{ maxHeight: 0 }}
              animate={isFormOpen ? { maxHeight: "700px" } : { maxHeight: 0 }}
            >
              <Tooltip
                marginTop="15px"
                label={msg?.feedback_info}
                placement="bottom"
              >
                <Box marginTop="15px">
                  <BsInfoLg color={Colors.Orange} />
                </Box>
              </Tooltip>
              <Input
                {...defProp}
                p="3px 20px"
                value={value.name ?? ""}
                onChange={(e) => {
                  handleChange(e.target.value, NAME);
                }}
                fontFamily="Ubuntu"
                variant="unstyled"
                placeholder={msg.feedback_name_input}
              />
              <Textarea
                {...defProp}
                p="7px 20px"
                value={value.comment}
                onChange={(e) => {
                  handleChange(e.target.value, COMMENT);
                }}
                fontFamily="Ubuntu"
                variant="unstyled"
                placeholder={msg.feedback_comment_input}
              />
              <Box w="15%" h="40px" display="flex" justifyContent="center">
                {isSubmiting ? (
                  <Spinner speed="0.9s" color={Colors.Orange} size="sm" />
                ) : (
                  <DButton onClick={submit} text={msg.feedback_submit} type="submit" />
                )}
              </Box>
            </motion.div>
          </FormControl>
          <motion.div
            className="comments-section"
            initial={{ height: "300px" }}
            animate={isFormOpen ? { height: "90px" } : { height: "300px" }}
          >
            {!_.isEmpty(allComments) &&
              allComments.map((i) => (
                <motion.div
                  initial={{ y: 0 }}
                  animate={i?.new ? { y: [12, 0] } : {}}
                  key={_.uniqueId("comment-card-")}
                >
                  <Card variant="unstyled" background="transparent">
                    <CardBody
                      display="flex"
                      flexDirection="column"
                      alignItems="left"
                    >
                      <Grid
                        templateRows="repeat(2, 1fr)"
                        templateColumns="repeat(12, 1fr)"
                        textAlign="left"
                        gridTemplateRows="40px"
                      >
                        <GridItem
                          rowSpan={2}
                          colSpan={1}
                          display="flex"
                          justifyContent="center"
                        >
                          <BsFillPersonFill size="2em" color={Colors.Orange} />
                        </GridItem>
                        <GridItem colSpan={11}>
                          <NormalText
                            customColor={Colors.Orange}
                            customFontSize="1rem"
                            text={i?.name ? i?.name : msg?.feedback_anonymous}
                          />
                        </GridItem>
                        <GridItem colSpan={11} maxW="700px">
                          <NormalText customFontSize="1rem" text={i?.comment} />
                        </GridItem>
                      </Grid>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
          </motion.div>
        </Center>
      </Box>
    </Box>
  );
}

export default Feedback;
