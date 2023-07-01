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
import { useCallback, useState } from "react";
import { keyable } from "asset/types";

function Feedback() {
  const [value, setValue] = useState<string>("");
  const [isSubmiting, setIsSubmiting] = useState<boolean>(false);
  const handleChange = (event: keyable) => setValue(event.target.value);

  const handle = useCallback(() => {
    setIsSubmiting(true);
    setTimeout(() => {
      setIsSubmiting(false);
      setValue('');
    }, 500);
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
            value={value}
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
        <Card variant="unstyled" background="transparent">
          <CardBody display="flex" alignItems="center" gap="15px">
            <BsFillPersonFill />
            <NormalText
              customFontSize="1rem"
              text="View a summary of all your customers over the last month"
            />
          </CardBody>
        </Card>
      </Center>
    </Center>
  );
}

export default Feedback;
