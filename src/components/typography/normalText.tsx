import { Text } from "@chakra-ui/react";
import { Colors } from "asset/enums";
import _ from "lodash";
import { defaultText } from "../../asset/types";

function NormalText({
  customFontSize = "1.125rem",
  customColor = Colors.Gray,
  functions = {},
  text,
}: defaultText): JSX.Element {
  const displayText = typeof text === "object" ? text : [text];

  return text ? (
    <>
      {displayText.map((i) => (
        <Text
          h="fit-content"
          key={_.uniqueId()}
          color={customColor}
          {...functions}
          fontSize={customFontSize}
          fontWeight="medium"
          letterSpacing="0.25px"
          fontFamily="var(--ubuntu)"
        >
          {i}
        </Text>
      ))}
    </>
  ) : (
    <></>
  );
}

export default NormalText;
