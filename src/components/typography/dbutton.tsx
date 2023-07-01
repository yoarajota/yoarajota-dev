import { Text } from "@chakra-ui/react";
import { Colors } from "asset/enums";
import ScaleAnimation from "components/animations/scaleAnimation";
import { ButtonType } from "../../asset/types";

function DButton({
  customFontSize = "1.125rem",
  customColor = Colors.Orange,
  onClick,
  text,
  type = "button",
}: ButtonType) {
  return (
    <ScaleAnimation
      duration={0.1}
      functions={{ whileTap: { scale: 1 } }}
      scale={1.1}
    >
      <button onClick={onClick} type={type}>
        <Text
          fontFamily="Prompt"
          fontWeight={700}
          color={customColor}
          fontSize={customFontSize}
        >
          {text}
        </Text>
      </button>
    </ScaleAnimation>
  );
}

export default DButton;
