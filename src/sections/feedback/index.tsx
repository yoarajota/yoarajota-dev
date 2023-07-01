import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  FormControl,
  Input,
  Spinner,
} from "@chakra-ui/react";
import { Colors } from "asset/enums";
import NormalText from "components/typography/normalText";
import { BsFillPersonFill } from "react-icons/bs";
import DButton from "components/typography/dbutton";
import { ReducerWithoutAction, useCallback, useReducer, useState } from "react";
import { keyable } from "asset/types";
import api from "../../api/axios";
import _ from "lodash";

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

  return state
};

function Feedback() {
  const [value, dispatch] = useReducer(reduc, { comment: "", name: undefined });
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
    api.post("api/exp", {});
  }, []);

  return (
    <Center flexDirection="column">
      <Center
        w="30%"
        border={`1px solid ${Colors.Orange}`}
        borderRadius="5px"
        p="3px 20px"
        color={Colors.Orange}
        h="35px"
      >
        <FormControl>
          <Input
            value={value.comment}
            onChange={handleChange}
            fontFamily="Ubuntu"
            variant="unstyled"
          />
        </FormControl>
        <Box p="0 0 0 15px" w="15%" display="flex" justifyContent="center">
          {isSubmiting ? (
            <Spinner speed="0.9s" color={Colors.Orange} size="sm" />
          ) : (
            <DButton onClick={handle} text="Submit" type="submit" />
          )}
        </Box>
      </Center>
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
