import { HStack, Textarea } from "@chakra-ui/react";
import axios from "api/axios";
import { DataStackType } from "asset/types";
import { useState } from "react";

const DataStack = ({ title, data }: DataStackType) => {
    const [num, setNum] = useState(data.length);
    const handleNewOne = () => {
        axios;
    }

    return <HStack w="95%" spacing="25px" margin="0 auto">
        {title}
        {data.map((text) => {
            console.log(text)
            return <Textarea value={text} />
        })}
    </HStack>
}

export default DataStack;