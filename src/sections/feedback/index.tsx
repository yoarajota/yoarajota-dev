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
import { useCallback, useReducer, useState } from "react";
import { keyable } from "asset/types";
import api from "../../api/axios";
import _ from "lodash";
import { motion } from "framer-motion";

type Comment = {
  name?: string;
  comment: string;
};

const COMMENT = 1;
const NAME = 2;

const reduc = (state: Comment, action: keyable): Comment => {
  if (action.type === COMMENT) {
    return {
      name: state.name,
      comment: action.value,
    };
  }

  return state;
};

function Feedback() {
  const [value, dispatch] = useReducer(reduc, { comment: "", name: undefined });
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [allComments, setAllComents] = useState<Array<keyable | undefined>>([
    {
      text: "View a summary of all your customers over the last month",
      date: new Date(),
    },
  ]);

  const [isSubmiting, setIsSubmiting] = useState<boolean>(false);
  const handleChange = (event: keyable) =>
    dispatch({ state: event.target.value, type: COMMENT });

  const handle = useCallback(() => {
    setIsSubmiting(true);
    // api.post("api/exp", {});
  }, []);

  const defProp = {
    w: "30%",
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
        <Box m="15px 0">
          <BsInfoLg color={Colors.Gray} />
        </Box>
      </Tooltip>
          <Input
            {...defProp}
            p="3px 20px"
            value={value.comment}
            onChange={handleChange}
            fontFamily="Ubuntu"
            variant="unstyled"
            placeholder="Nome (Opcional)"
          />
          <Textarea
            {...defProp}
            p="7px 20px"
            value={value.comment}
            onChange={handleChange}
            fontFamily="Ubuntu"
            variant="unstyled"
            placeholder="Comment"
          />
          <Box w="15%" display="flex" justifyContent="center">
            {isSubmiting ? (
              <Spinner speed="0.9s" color={Colors.Orange} size="sm" />
            ) : (
              <DButton onClick={handle} text="Submit" type="submit" />
            )}
          </Box>
        </motion.div>
      </FormControl>
      <Center w="70%">
        {!_.isEmpty(allComments) &&
          allComments.map((i) => (
            <Card
              key={_.uniqueId("comment-card-")}
              variant="unstyled"
              background="transparent"
            >
              <CardBody display="flex" alignItems="center" gap="15px">
                <BsFillPersonFill />
                <NormalText
                  customFontSize="1rem"
                  text="View a summary of all your customers over the last month"
                />
              </CardBody>
            </Card>
          ))}
      </Center>
    </Center>
  );
}

export default Feedback;
