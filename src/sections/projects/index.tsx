import { Box, Grid, GridItem, List, ListItem } from "@chakra-ui/react";
import Titles from "../../components/typography/titles";
import { ClientContext } from "components/contexts/client";
import { useContext, useEffect, useState } from "react";
import axios from "api/axios";
import { useQuery } from "react-query";
import { keyable, LanguagesIconsType } from "asset/types";
import NormalText from "components/typography/normaltext";
import { Colors } from "asset/enums";
import { DiPhp, DiPython, DiJavascript1 } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { ImBlocked } from "react-icons/im";
import { BiInfoCircle } from "react-icons/bi";
import _ from "lodash";
import config from "../../../config.json";

const LanguagesIcons = ({ language }: LanguagesIconsType) => {
  switch (language) {
    case "JavaScript":
      return <DiJavascript1 color={Colors.Orange} size="1.5em" />;
    case "PHP":
      return <DiPhp color={Colors.Orange} size="1.5em" />;
    case "Python":
      return <DiPython color={Colors.Orange} size="1.5em" />;
    case "TypeScript":
      return <SiTypescript color={Colors.Orange} size="1.5em" />;
  }
  return <></>;
};

function Projects() {
  const { msg, innerWidth } = useContext(ClientContext);
  const [gridConfig, setGridConfig] = useState<keyable>([]);

  useEffect(() => {
    if (innerWidth < 860) {
      setGridConfig({});
    } else {
      setGridConfig({
        templateRows: "repeat(2, 1fr)",
        templateColumns: "repeat(8, 1fr)",
        colSpan: [2, 3, 3, 6],
        rowSpan: [2],
      });
    }
  }, [innerWidth]);

  const { data, refetch } = useQuery(
    "projects",
    () => {
      return axios
        .get("https://api.github.com/users/yoarajota/repos")
        .then((res) => {
          res.data.sort(function (a: keyable, b: keyable) {
            if (!config["repos-to-show"].includes(a.name)) {
              a.blocked = 1;
            }

            const x = a.created_at;
            const y = b.created_at;

            return x < y ? 1 : x > y ? -1 : 0;
          });

          return res.data;
        });
    },
    { staleTime: 600000, enabled: false }
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

  return (
    <Box w="100%" paddingTop="5em" textAlign="center">
      <Titles>{msg.projects_title}</Titles>
      <Grid
        margin="3em auto 0 auto"
        w="80%"
        h="300px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(8, 1fr)"
        gap={4}
        border={`1px solid  ${Colors.Orange}`}
        borderRadius="8px"
      >
        <GridItem
          rowSpan={gridConfig?.rowSpan?.[0]}
          colSpan={2}
          borderRight={`1px solid  ${Colors.Orange}`}
          overflowY="scroll"
          scrollSnapType="y"
          css={{
            "&::-webkit-scrollbar": {
              width: "3px",
            },
            "&::-webkit-scrollbar-track": {
              width: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: Colors.Orange,
            },
          }}
        >
          <List textAlign="left">
            {data?.map((i: keyable) => {
              return (
                <Box
                  p="0 10px"
                  display="flex"
                  borderBottom={`1px solid  ${Colors.Orange}`}
                  key={_.uniqueId()}
                  alignItems="center"
                  justifyContent="space-between"
                  h="2em"
                >
                  <NormalText customColor={Colors.Orange} text={i.name} />
                  <Box display="flex" alignItems="center" gap="1em">
                    <LanguagesIcons language={i.language} />
                    <Box>
                      {i.blocked ? <ImBlocked /> : <BiInfoCircle size="" />}
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </List>
        </GridItem>
        <GridItem colSpan={gridConfig?.rowSpan?.[1]} />
        <GridItem colSpan={gridConfig?.rowSpan?.[2]} />
        <GridItem colSpan={gridConfig?.rowSpan?.[3]} />
      </Grid>
    </Box>
  );
}

export default Projects;
