import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  FormControl,
  Input,
  Spinner,
  Textarea,
  Tooltip,
} from "@chakra-ui/react";
import { Colors } from "asset/enums";
import NormalText from "components/typography/normalText";
import { BsFillPersonFill, BsInfoLg } from "react-icons/bs";
import DButton from "components/typography/dbutton";
import { useCallback, useReducer, useState, useEffect } from "react";
import { keyable } from "asset/types";
import api from "../../api/axios";
import _ from "lodash";
import { motion } from "framer-motion";
import { useQuery } from "react-query";

type Comment = {
  name?: string;
  comment: string;
};

const NAME = 1;
const COMMENT = 2;
const reduc = (state: Comment, action: keyable): Comment => {
  let isComment = action.type === COMMENT;
  return {
    name: !isComment ? action.value : state.name,
    comment: isComment ? action.value : state.comment,
  };
};

function Feedback() {
  const [value, dispatch] = useReducer(reduc, { comment: "", name: undefined });
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const { data } = useQuery(
    "comments",
    () => {
      return api.get("api/comments");
    },
    { staleTime: 600000 }
  );
  const [allComments, setAllComents] = useState<Array<keyable | undefined>>(
    data?.data?.data ?? []
  );
  useEffect(() => {
    console.log(data?.data?.data)
    setAllComents(data?.data?.data);
  }, [data]);


  const [isSubmiting, setIsSubmiting] = useState<boolean>(false);
  const handleChange = (value: string, type: number) =>
    dispatch({ value, type });

  const handle = useCallback(() => {
    // setIsSubmiting(true);
    api
      .post("api/comments", { ...value, date: new Date() })
      .then((res) => {})
      .catch((err) => {});
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
    <Center flexDirection="column" marginTop="25px">
      <DButton
        onClick={() => setIsFormOpen((p: boolean) => !p)}
        text="Escreva um comentário!"
      />
      <FormControl>
        <motion.div
          className="comment-form"
          animate={isFormOpen ? { maxHeight: "700px" } : { maxHeight: 0 }}
        >
          <Tooltip label="I have 15px arrow" placement="bottom">
            <Box marginTop="15px">
              <BsInfoLg color={Colors.Gray} />
            </Box>
          </Tooltip>
          <Input
            {...defProp}
            p="3px 20px"
            value={value.name}
            onChange={(e) => {
              handleChange(e.target.value, NAME);
            }}
            fontFamily="Ubuntu"
            variant="unstyled"
            placeholder="Nome (Opcional)"
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
            placeholder="Comment"
          />
          <Box w="15%" h="40px" display="flex" justifyContent="center">
            {isSubmiting ? (
              <Spinner speed="0.9s" color={Colors.Orange} size="sm" />
            ) : (
              <DButton onClick={handle} text="Submit" type="submit" />
            )}
          </Box>
        </motion.div>
      </FormControl>
      <Center
        flexDirection="column"
        minW="43.75em"
        alignItems="left"
        gap="9px"
      >
        {!_.isEmpty(allComments) &&
          allComments.map((i) => (
            <Card
              key={_.uniqueId("comment-card-")}
              variant="unstyled"
              background="transparent"
            >
              <CardBody display="flex" alignItems="center" gap="15px">
                <BsFillPersonFill />
                <NormalText customFontSize="1rem" text={i?.comment} />
              </CardBody>
            </Card>
          ))}
      </Center>
    </Center>
  );
}

export default Feedback;
