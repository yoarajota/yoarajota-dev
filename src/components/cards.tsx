import { Box, Heading } from "@chakra-ui/react"
import { CardsType } from "asset/types"
import NormalText from "./typography/normalText"
import Titles from "./typography/titles"

function Cards({ title, desc, size }: CardsType) {
    let p;
    switch (size) {
        case 'sm':
            p = 13
            break;
        case 'md':
            p = 5
            break;
        case 'bg':
            p = 2;
            break;
        default:
            p = 5
    }

    return (
        <Box p={p} >
            <Titles size="esm" fontSize='xl' text={title} />
            <NormalText text={desc} />
        </Box>
    )
}

export default Cards