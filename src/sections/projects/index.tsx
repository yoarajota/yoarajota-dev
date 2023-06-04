import {
  Badge,
  Box,
  Button,
  Grid,
  GridItem,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";
import Titles from "../../components/typography/titles";
import { ClientContext } from "components/contexts/client";
import { useCallback, useContext, useEffect, useState } from "react";
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
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import ScaleAnimation from "components/animations/scaleAnimation";

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
  const {
    msg,
    systemConfig: { project },
  } = useContext(ClientContext);
  const [currentRepo, setCurrentRepo] = useState<keyable>({});

  const { data, refetch } = useQuery(
    "project",
    () => {
      return axios
        .get("https://api.github.com/users/yoarajota/repos")
        .then((res) => {
          res.data.forEach(function (obj: keyable) {
            obj.blocked = !config["repos-to-show"].includes(obj.name) ? 1 : 0;
          });

          res.data.sort(function (a: keyable, b: keyable) {
            if (a.blocked !== b.blocked) {
              return a.blocked ? 1 : -1;
            }

            const x = a.created_at;
            const y = b.created_at;

            return x < y ? 1 : -1;
          });
          return res.data;
        });
    },
    { staleTime: 600000 }
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
    console.log(currentRepo);
  }, [currentRepo]);

  const handle = useCallback((i: keyable) => {
    if (i.blocked) {
      setCurrentRepo({});
    } else {
      setCurrentRepo(i);
    }
  }, []);

  return (
    <Box w="100%" paddingTop="5em" textAlign="center">
      <Titles text={msg?.projects_title} />
      <Grid
        margin="3em auto 0 auto"
        w="80%"
        h="300px"
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={4}
        border={`1px solid  ${Colors.Orange}`}
        borderRadius="8px"
      >
        <GridItem
          rowSpan={project.rowSpan?.[0]}
          colSpan={project.colSpan[0]}
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
                borderBottom={`1px solid  ${Colors.Orange}`}
                key={_.uniqueId()}
                opacity={i.blocked ? 0.5 : 1}
                onClick={() => {
                  handle(i);
                }}
                >
                  <ScaleAnimation className={`list-item-project ${i.blocked && 'blocked-item'}`} scale={0.98}>
                  <NormalText
                    customColor={Colors.Orange}
                    text={i.name}
                    functions={{ w: "65%", h: "-webkit-fill-available" }}
                  />
                  <Box display="flex" alignItems="center" gap="1em">
                    <LanguagesIcons language={i.language} />
                    <Box>
                      {i.blocked ? (
                        <ImBlocked color={Colors.Orange} />
                      ) : (
                        <ImInfo color={Colors.Orange} />
                      )}
                    </Box>
                  </Box>
                  </ScaleAnimation>

                </ListItem>
              );
            })}
          </List>
        </GridItem>
        <GridItem p="1em" colSpan={project.colSpan?.[1]} position="relative">
          {!_.isEmpty(currentRepo) && (
            <Box className="project-title-wrap">
              <motion.div
                initial={{ x: 20 }}
                animate={{ x: 0 }}
                key={"title-" + currentRepo.id}
              >
                <Titles size="sm" text={currentRepo.name} />
              </motion.div>
              <Box h="2em" w="2em" m="0 auto">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  key={"son-" + currentRepo.id}
                >
                  <Link
                    href={currentRepo.html_url}
                    target="_blank"
                    position="absolute"
                    right={0}
                    top={0}
                    borderLeft={`1px solid ${Colors.Orange}`}
                    borderBottom={`1px solid ${Colors.Orange}`}
                    borderBottomStartRadius="8px"
                    p="5px"
                  >
                    <AiFillGithub size="2em" color={Colors.Gray} />
                  </Link>
                </motion.div>
              </Box>
            </Box>
          )}
        </GridItem>
        <GridItem colSpan={project.colSpan?.[2]} rowSpan={project.rowSpan?.[1]}>
          {!_.isEmpty(currentRepo) && (
            <motion.div
              initial={{ x: 20 }}
              animate={{ x: 0 }}
              key={"description-" + currentRepo.id}
              className="project-desc-wrap"
            >
              <Box h="100%">
                <Box h="85%" w="80%" m="0 auto">
                  <NormalText text={currentRepo.description} />
                </Box>
                <Box h="15%">
                  <Badge bg={Colors.Orange} color={Colors.Black}>
                    <Link href={currentRepo.html_url + "#readme"} target="link">
                      Read me
                    </Link>
                  </Badge>
                </Box>
              </Box>
            </motion.div>
          )}
        </GridItem>
      </Grid>
      <motion.div animate={{height: ["0", "fit-content"]}}>

      </motion.div>
    </Box>
  );
}

export default Project;
