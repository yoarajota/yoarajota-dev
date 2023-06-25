import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import { Colors } from "asset/enums";
import ScaleAnimation from "components/animations/scaleAnimation";
import { ClientContext } from "components/contexts/client";
import NormalText from "components/typography/normaltext";
import Titles from "components/typography/titles";
import React, { cloneElement, useContext, useEffect, useState } from "react";
import { BiWorld } from "react-icons/bi";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { FiDownload, FiMail } from "react-icons/fi";
import { stateStorage } from "react-trigger-state";
import { AnimatePresence, motion } from "framer-motion";
import _ from "lodash";
import FadeInFromTop from "components/animations/fadeInFromTop";

const stl = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: Colors.Orange,
};

function Contact() {
    const {
        systemConfig: {
            contact: {
                h,
                cSpan2,
                text,
                size,
                end,
                grid: { templateRows, templateColumns, minW },
            },
        },
    } = useContext(ClientContext);

    const [showButtons, setShowButtons] = useState<boolean>(false);
    const scrollYProgress = stateStorage.get("scrollYProgress");
    useEffect(() => {
        scrollYProgress.onChange((hookedYPosition: number) => {
            if ((hookedYPosition ?? 0) < 0.86) {
                setShowButtons(false);
            } else if ((hookedYPosition ?? 0) > 0.86 && !showButtons) {
                setShowButtons(true);
            }
        });
    }, [scrollYProgress, showButtons]);

    const icons = [
      { Icon: FiMail, href: "mailto:joaovbscontato@gmail.com", type: "mail" },
      {
        Icon: BsLinkedin,
        href: "https://www.linkedin.com/in/joao-vitor-sberse/",
        type: "redirect",
      },
      {
        Icon: BsWhatsapp,
        href: "https://wa.me/5554996448146?text=Olá,%20João!%20Gostaria%20de%20lhe%20conhecer%20um%20pouquinho%20melhor.%20Poderiamos%20conversar?",
        type: "redirect",
      },
      {
        Icon: BsGithub,
        href: "https://github.com/yoarajota",
        type: "redirect",
      },
      {
        Icon: BiWorld,
        href: "https://who-is-yoarajota.vercel.app",
        type: "redirect",
      },
    ];

    return (
      <Box
        w="100%"
        minHeight="80vh"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Box paddingTop="55px">
          <Titles text={"Contact"} />
        </Box>
        <Box padding="65px 0 10px 0" {...stl}>
          <Box display="flex" gap="0.5em" cursor="pointer">
            <NormalText text="Download" />
            <FiDownload color="var(--gray)" size="1.3em" />
          </Box>
        </Box>
        <Grid
          m="0 auto"
          w="42%"
          templateRows={templateRows}
          templateColumns={templateColumns}
          gap={4}
          minW={minW}
          padding="0.35em 0.75em"
          border={`1px solid ${Colors.Orange}`}
          borderRadius="1.5em"
          h={h}
        >
          <GridItem {...stl} colSpan={2}>
            <Image
              margin={"0 auto"}
              alt="picture of João Vítor Sberse"
              src={"images/me.jpg"}
              w="150px"
              borderRadius="999px"
              border="2px solid var(--orange)"
            />
          </GridItem>
          <GridItem
            flexDirection="column"
            textAlign="center"
            {...stl}
            colSpan={cSpan2}
          >
            <Titles size={text} text="João Vítor Basso Sberse" />
            <NormalText text="Developer" />
          </GridItem>
          <AnimatePresence exitBeforeEnter>
            {showButtons &&
              icons.map((icon, k) => (
                <GridItem
                  key={_.uniqueId("contact-buttons-")}
                  {...stl}
                  colSpan={1}
                >
                  <FadeInFromTop delay={k * 0.15}>
                    <ScaleAnimation scale={1.2} className="contact-buttons">
                      <a rel="noreferrer" target="_blank" href={icon.href}>
                        <icon.Icon size={size} />
                      </a>
                    </ScaleAnimation>
                  </FadeInFromTop>
                </GridItem>
              ))}
          </AnimatePresence>
        </Grid>
      </Box>
    );
}

export default Contact;