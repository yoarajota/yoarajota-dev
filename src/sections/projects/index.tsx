import { Box, Grid, GridItem, List, ListItem } from "@chakra-ui/react";
import Titles from "../../components/typography/titles";
import { ClientContext } from "components/contexts/client";
import { useContext, useEffect, useState } from "react";
import axios from "api/axios";
import { useQuery } from "react-query";
import { keyable } from "asset/types";
import NormalText from "components/typography/normaltext";

function Projects() {
    const { msg } = useContext(ClientContext);

    const { data, refetch } = useQuery(
        "projects",
        () => {
            return axios.get("https://api.github.com/users/yoarajota/repos");
        },
        { staleTime: 1000 * 60 * 10, enabled: false }
    );

    const [fetched, setFetched] = useState(false);

    useEffect(() => {
        // if (callApi && !fetched) {
        if (true && !fetched) {
            refetch().then(() => {
                setFetched(true);
            });
        }
        // }, [callApi, fetched, refetch]);
    }, [fetched, refetch]);

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <Box
            w="100%"
            paddingTop="5em"
            textAlign="center"
        >
            <Titles>{msg.projects_title}</Titles>
            <Grid
                margin='3em auto 0 auto'
                w="80%"
                h='700px'
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(5, 1fr)'
                gap={4}
            >
                <GridItem rowSpan={2} colSpan={1} bg='tomato'>
                    <List>
                        {data?.data.map((i: keyable) => {
                            return <NormalText text={i.name} /> 
                        })}
                    </List>
                </GridItem>
                <GridItem colSpan={2} bg='papayawhip' />
                <GridItem colSpan={2} bg='papayawhip' />
                <GridItem colSpan={4} bg='tomato' />
            </Grid>
        </Box>
    );
}

export default Projects;
