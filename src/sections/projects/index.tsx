"use client";

import {
  Badge,
  Box,
  Grid,
  GridItem,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";
import Titles from "../../components/typography/titles";
import { ClientContext } from "components/contexts/client";
import { useCallback, useContext, useEffect, useState } from "react";
import { keyable, LanguagesIconsType } from "asset/types";
import NormalText from "components/typography/normalText";
import { Colors } from "asset/enums";
import { DiPhp, DiPython, DiJavascript1 } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { ImBlocked, ImInfo } from "react-icons/im";
import _ from "lodash";
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

type ProjectProps = { projects: keyable };
export default function Project({ projects }: ProjectProps) {
  const {
    msg,
    systemConfig: { project },
    config,
    lang,
  } = useContext(ClientContext);

  const [currentRepo, setCurrentRepo] = useState<keyable>({});

  const handle = useCallback((i: keyable) => {
    if (i.blocked) {
      setCurrentRepo({});
    } else {
      setCurrentRepo(i);
    }
  }, []);

  return (
    <Box w="100%" paddingTop="1em" textAlign="center" minHeight="60vh">
      <Titles text={msg?.projects_title} />
      <Grid
        margin="3em auto 0 auto"
        w="80%"
        h="300px"
        templateRows={project.templateRows}
        templateColumns={project.templateColumns}
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
        >
          <List textAlign="left">
            {projects[lang]?.map((i: keyable) => {
              return (
                <ListItem
                  borderBottom={`1px solid  ${Colors.Orange}`}
                  key={_.uniqueId()}
                  opacity={i.blocked ? 0.5 : 1}
                  onClick={() => {
                    handle(i);
                  }}
                  overflow="hidden"
                >
                  <ScaleAnimation
                    className={`list-item-project ${
                      i.blocked && "blocked-item"
                    }`}
                    scale={0.98}
                  >
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
        <GridItem
          p="1em"
          colSpan={project.colSpan?.[1]}
          rowSpan={project.rowSpan?.[1]}
          position="relative"
        >
          {!_.isEmpty(currentRepo) && (
            <Box className="project-title-wrap">
              <motion.div
                initial={{ x: 20 }}
                animate={{ x: 0 }}
                key={"title-" + currentRepo.id}
              >
                <Titles size="sm" text={currentRepo.name} />
              </motion.div>
              <Box m="0 auto">
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
                    <AiFillGithub size="2em" color={Colors.Orange} />
                  </Link>
                </motion.div>
              </Box>
            </Box>
          )}
        </GridItem>
        <GridItem
          colSpan={project.colSpan?.[2]}
          rowSpan={project.rowSpan?.[2]}
          position="relative"
        >
          {!_.isEmpty(currentRepo) && (
            <>
              <motion.div
                initial={{ x: 20 }}
                animate={{ x: 0 }}
                key={"description-" + currentRepo.id}
                className="project-desc-wrap"
              >
                <Box maxH="85%" w="80%" m="0 auto">
                  <NormalText text={currentRepo.description} />
                </Box>
              </motion.div>
              <Badge
                width="84px"
                position="absolute"
                left="calc(50% - 42px)"
                bottom="12px"
                bg={Colors.Orange}
                color={Colors.Black}
              >
                <Link href={currentRepo.html_url + "#readme"} target="link">
                  Read me
                </Link>
              </Badge>
            </>
          )}
        </GridItem>
      </Grid>
      <motion.div animate={{ height: ["0", "fit-content"] }}></motion.div>
    </Box>
  );
}
