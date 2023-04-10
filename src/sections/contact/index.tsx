import { Box, Grid, GridItem } from "@chakra-ui/react";
import { Colors } from "asset/enums";
import Titles from "components/typography/titles";

function Contact() {

    return (
        <Box w="100%" minHeight="80vh" display='flex' alignItems='center' justifyContent='center'>
            <Grid w='42%' templateRows='repeat(2, 1fr)'
                templateColumns='repeat(5, 1fr)'
                gap={4} minW="34.375em" border={`1px solid ${Colors.Orange}`} borderRadius='2.5em' h='25em'>
                <GridItem rowSpan={1}>
                </GridItem>
                <GridItem colSpan={4}>
                    <Titles>
                        jota
                    </Titles>
                </GridItem>
                <GridItem colSpan={1}>
                </GridItem>
                <GridItem colSpan={1}>
                </GridItem>
                <GridItem colSpan={1}>
                </GridItem>
                <GridItem colSpan={1}>
                </GridItem>
                <GridItem colSpan={1}>
                </GridItem>
            </Grid>
        </Box>
    )
}

export default Contact;