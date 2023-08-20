import { Box, Center, HStack, Textarea } from "@chakra-ui/react";
import axios from "api/axios";
import { DataStackType } from "asset/types";
import _ from "lodash";
import { useContext, useState } from "react";
import { BsPlus } from "react-icons/bs";
import { MongoDBDataContext } from "./MongoDBData";

const DataStack = ({ title, data }: DataStackType) => {
  const { change } = useContext(MongoDBDataContext);
  const handleNewOne = () => {
    let clone = _.clone(data);
    clone.push("c");
    change(title, clone);
  };

  return (
    <Center gap="15px" w="100%">
      {title}
      <HStack w="95%" spacing="25px" margin="0 auto">
        {data.map((text) => {
          return <Textarea value={text} />;
        })}
        <Box onClick={handleNewOne}>
          <BsPlus size="2em" />
        </Box>
      </HStack>
    </Center>
  );
};

export default DataStack;
