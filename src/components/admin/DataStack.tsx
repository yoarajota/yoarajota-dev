import React, { useCallback, useContext } from "react";
import { Box, Center, HStack, Textarea } from "@chakra-ui/react";
import { DataStackType } from "asset/types";
import _ from "lodash";
import { BsPlus } from "react-icons/bs";
import { MongoDBDataContext } from "./MongoDBData";

const DataStack = ({ title, data }: DataStackType) => {
  const { change } = useContext(MongoDBDataContext);

  const handleNewOne = useCallback(() => {
    let clone = _.clone(data);
    clone.push("c");
    change(title, clone);
  }, [change, data, title]);

  const handleChange = useCallback(
    (val: string, index: number) => {
      let clone = _.clone(data);
      clone[index] = val;
      change(title, clone);
    },
    [change, data, title]
  );

  return (
    <Center gap="15px" w="100%">
      {title}
      <HStack w="95%" spacing="25px" margin="0 auto">
        {data.map((text, index) => (
          <Textarea
            key={index}
            onChange={(e) => handleChange(e.target.value, index)}
            value={String(text)}
          />
        ))}
        <Box onClick={handleNewOne}>
          <BsPlus size="2em" />
        </Box>
      </HStack>
    </Center>
  );
};

export default DataStack;
