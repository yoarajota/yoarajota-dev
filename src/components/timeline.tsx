import {
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
} from "@chakra-ui/react";
import { Colors } from "asset/enums";
import TimeLinePoints from "./animations/timelinePoints";

function Timeline({ data, setInfo }) {
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
        id="timeline-bar"
        h="5px"
        width="100%"
        backgroundColor={Colors.Gray}
        borderRadius="360px"
        position="absolute"
      ></Box>

      {data?.map((item) => {
        return (
          <TimeLinePoints width={item.progress}>
            <Popover trigger="hover">
              <PopoverTrigger>
                <Box
                  onClick={() => {
                    setInfo(item);
                  }}
                  cursor="pointer"
                  w="20px"
                  h="20px"
                  border={`"2px solid ${Colors.Black}`}
                  borderRadius="360px"
                  backgroundColor={Colors.Orange}
                  transform="scale(1, 1)"
                  _hover={{
                    transform: "scale(1.3, 1.3)",
                  }}
                />
              </PopoverTrigger>
              <PopoverContent bg="0D0D0D" color="white">
                <PopoverHeader fontWeight="semibold">
                  {item.level}
                </PopoverHeader>
                <PopoverArrow bg="0D0D0D" />
                <PopoverBody>{item.popover_text}</PopoverBody>
              </PopoverContent>
            </Popover>
          </TimeLinePoints>
        );
      })}

      {/* <SlideFromLeft position="absolute" howFar="70px">
        <Popover trigger="hover">
          <PopoverTrigger>
            <Box
              onClick={() => {
                setInfo("carrer_information_1");
              }}
              cursor="pointer"
              w="20px"
              h="20px"
              border={`"2px solid ${Colors.Black}`}
              borderRadius="360px"
              backgroundColor={Colors.Orange}
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
              Marcando o ingresso no mercado de trabalho da programação.
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </SlideFromLeft> */}
      {/* 
      <Popover trigger="hover">
        <PopoverTrigger>
          <Box
            onClick={() => {
              setInfo("carrer_information_2");
            }}
            cursor="pointer"
            position="absolute"
            w="20px"
            h="20px"
            border={`"2px solid ${Colors.Black}`}
            borderRadius="360px"
            backgroundColor={Colors.Orange}
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
      </Popover> */}
    </Box>
  );
}

export default Timeline;
