import {
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
} from "@chakra-ui/react";
import SlideFromLeft from "./animations/slideleft";

function Timeline(props) {
  return (
    <Box
      h="20px"
      width="80%"
      margin="120px auto 0 auto"
      alignItems="center"
      display="flex"
      position="relative"
    >
      <Box
        h="5px"
        width="100%"
        backgroundColor="#737373"
        borderRadius="360px"
        position="absolute"
      ></Box>

      <SlideFromLeft position="absolute" howFar="70px">
        <Popover trigger="hover">
          <PopoverTrigger>
            <Box
              onClick={() => {
                props.setInfo("carrer_information_1");
              }}
              cursor="pointer"
              w="20px"
              h="20px"
              border="2px solid #0d0d0d"
              borderRadius="360px"
              backgroundColor="#D99E6A"
              transform="scale(1, 1)"
              _hover={{
                transform: "scale(1.3, 1.3)",
              }}
            />
          </PopoverTrigger>
          <PopoverContent bg="0D0D0D" color="white">
            <PopoverHeader fontWeight="semibold">Júnior</PopoverHeader>
            <PopoverArrow bg="0D0D0D" />
            <PopoverBody>
              Ingresso no mercado de trabalho da programação.
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </SlideFromLeft>

      <Popover trigger="hover">
        <PopoverTrigger>
          <Box
            onClick={() => {
              props.setInfo("carrer_information_2");
            }}
            cursor="pointer"
            position="absolute"
            w="20px"
            h="20px"
            border="2px solid #0d0d0d"
            borderRadius="360px"
            backgroundColor="#D99E6A"
            transform="scale(1, 1)"
            _hover={{
              transform: "scale(1.3, 1.3)",
            }}
          />
        </PopoverTrigger>
        <PopoverContent bg="0D0D0D" color="white">
          <PopoverHeader fontWeight="semibold">Júnior</PopoverHeader>
          <PopoverArrow bg="0D0D0D" />
          <PopoverBody>
            Ingresso no mercado de trabalho da programação.
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
}

export default Timeline;
