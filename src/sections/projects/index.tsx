import { Box, Grid, GridItem, Image, List, ListItem } from "@chakra-ui/react";
import Titles from "../../components/typography/titles";
import { ClientContext } from "components/contexts/client";
import { useContext, useEffect, useState } from "react";
import axios from "api/axios";
import { useQuery } from "react-query";
import { keyable } from "asset/types";
import NormalText from "components/typography/normaltext";
import { Colors } from "asset/enums";
import { IoLogoJavascript } from "react-icons/io";
import _ from "lodash";

function Projects() {
    const { msg } = useContext(ClientContext);

    const { data, refetch } = useQuery(
        "projects",
        () => {
            return axios.get("https://api.github.com/users/yoarajota/repos").then((res) => {
                res.data.sort(function (a: keyable, b: keyable) {
                    const x = a.created_at;
                    const y = b.created_at;

                    return ((x < y) ? 1 : ((x > y) ? -1 : 0));
                })

                return res.data
            });
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



    const Languages = {
        "Javascript": <IoLogoJavascript><IoLogoJavascript/>,
        "PHP": <></>
    };

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
                border={`1px solid  ${Colors.Orange}`}
                borderRadius="8px"
            >
                <GridItem rowSpan={2} colSpan={1}
                    borderRight={`1px solid  ${Colors.Orange}`}>
                    <List textAlign="left">
                        {data?.map((i: keyable) => {
                            return <Box display="flex" borderBottom={`1px solid  ${Colors.Orange}`} key={_.uniqueId()}>
                                {/* <Image borderRadius="full" w="2.5em" src={i.owner.avatar_url} /> */}
                                <NormalText text={i.name} />
                                <NormalText text={i.language} />
                            </Box>
                        })}
                    </List>
                </GridItem>
                <GridItem colSpan={2} />
                <GridItem colSpan={2} />
                <GridItem colSpan={4} />
            </Grid>
        </Box>
    );
}

export default Projects;
