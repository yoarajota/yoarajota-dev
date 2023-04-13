import { Box, Grid, GridItem } from "@chakra-ui/react";
import { Colors } from "asset/enums";
import { ClientContext } from "components/contexts/client";
import Titles from "components/typography/titles";
import { useContext } from "react";

function Contact() {
    const { innerWidth } = useContext(ClientContext)

    const cSpan1 = innerWidth < 720 ? 2 : 1;
    const cSpan2 = innerWidth < 720 ? 2 : 4;
    const end = innerWidth < 720 ? 2 : 1;
    const h = innerWidth < 720 ? 'auto' : '25em';

    return (
        <Box w="100%" minHeight="80vh" display='flex' alignItems='center' justifyContent='center'>
            <Grid w='42%'
                templateRows={innerWidth < 700 ? 'repeat(6, 1fr)' : 'repeat(2, 1fr)'}
                templateColumns={innerWidth < 700 ? 'repeat(2, 1fr)' : 'repeat(5, 1fr)'}
                gap={4}
                minW={innerWidth < 700 ? '95%' : "34.375em"}
                border={`1px solid ${Colors.Orange}`}
                borderRadius='2.5em' h={h}>
                <GridItem colSpan={cSpan1}>
                </GridItem>
                <GridItem colSpan={cSpan2}>
                    <Titles>
                        joao vitor basso sberse
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
                <GridItem colSpan={end}>
                </GridItem>
            </Grid>
        </Box>
    )
}

export default Contact;