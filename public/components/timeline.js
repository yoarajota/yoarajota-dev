import {
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";

function Timeline(info) {
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
        backgroundColor="red"
        borderRadius="360px"
      ></Box>
      <Box
        onClick={() => {}}
        cursor="pointer"
        position="absolute"
        w="17px"
        h="17px"
        borderRadius="360px"
        backgroundColor="white"
      ></Box>
      <Popover trigger="hover">
        <PopoverTrigger>
          <Box
            cursor="pointer"
            position="absolute"
            left="90px"
            w="17px"
            h="17px"
            borderRadius="360px"
            backgroundColor="white"
          />
        </PopoverTrigger>
        <PopoverContent bg="tomato" color="white">
          <PopoverHeader fontWeight="semibold">Customization</PopoverHeader>
          <PopoverArrow bg="pink.500" />
          <PopoverCloseButton bg="purple.500" />
          <PopoverBody>
            Tadaa!! The arrow color and background color is customized. Check
            the props for each component.
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
}

export default Timeline;
