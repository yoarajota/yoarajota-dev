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
import { ImBlocked, ImInfo } from "react-icons/im";
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

function Project() {
  const { msg, systemConfig: { project} } = useContext(ClientContext);
  const [currentRepo, setCurrentRepo] = useState<keyable>([]);

  const { data, refetch } = useQuery(
    "project",
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
      <Titles text={msg.project_title} />
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
          rowSpan={project.rowSpan?.[0]}
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
                <ListItem
                  p="0 10px"
                  display="flex"
                  borderBottom={`1px solid  ${Colors.Orange}`}
                  key={_.uniqueId()}
                  alignItems="center"
                  justifyContent="space-between"
                  h="2em"
                  opacity={i.blocked ? 0.5 : 1}
                  onClick={() => { setCurrentRepo(i) }}
                >
                  <NormalText customColor={Colors.Orange} text={i.name} />
                  <Box display="flex" alignItems="center" gap="1em">
                    <LanguagesIcons language={i.language} />
                    <Box>
                      {i.blocked ? <ImBlocked color={Colors.Orange} /> : <ImInfo color={Colors.Orange} />}
                    </Box>
                  </Box>
                </ListItem>
              );
            })}
          </List>
        </GridItem>
        <GridItem colSpan={project.rowSpan?.[1]}>
          <Titles text={currentRepo.name} />
        </GridItem>
        <GridItem colSpan={project.rowSpan?.[2]}>
        </GridItem>
        <GridItem colSpan={project.rowSpan?.[3]}>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Project;
