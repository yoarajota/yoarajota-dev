import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import { Colors } from "asset/enums";
import { ContactConfig, keyable } from "asset/types";
import { ClientContext } from "components/contexts/client";
import NormalText from "components/typography/normaltext";
import Titles from "components/typography/titles";
import { useContext, useEffect, useRef, useState } from "react";
import { BiWorld } from "react-icons/bi";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { FiDownload, FiMail } from "react-icons/fi";

function Contact() {
    const { innerWidth, systemConfig: { contact: { h, cSpan2, text, size, end } } } = useContext(ClientContext);

    const stl = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: Colors.Orange,
    };

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
                templateRows={innerWidth < 764 ? "repeat(1, 1fr)" : "repeat(2, 1fr)"}
                templateColumns={innerWidth < 764 ? "repeat(2, 1fr)" : "repeat(5, 1fr)"}
                gap={4}
                minW={innerWidth < 764 ? "95%" : "33.375em"}
                border={`2px solid ${Colors.Orange}`}
                borderRadius="2.5em"
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
                <GridItem {...stl} colSpan={1}>
                    <FiMail size={size} />
                </GridItem>
                <GridItem {...stl} colSpan={1}>
                    <BsLinkedin size={size} />
                </GridItem>
                <GridItem {...stl} colSpan={1}>
                    <BsWhatsapp size={size} />
                </GridItem>
                <GridItem {...stl} colSpan={1}>
                    <BsGithub size={size} />
                </GridItem>
                <GridItem {...stl} colSpan={end}>
                    <BiWorld size={size} />
                </GridItem>
            </Grid>
        </Box>
    );
}

export default Contact;
