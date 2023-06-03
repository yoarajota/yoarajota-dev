import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import { Colors } from "asset/enums";
import ScaleAnimation from "components/animations/scaleAnimation";
import { ClientContext } from "components/contexts/client";
import NormalText from "components/typography/normaltext";
import Titles from "components/typography/titles";
import React, { cloneElement, useContext } from "react";
import { BiWorld } from "react-icons/bi";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { FiDownload, FiMail } from "react-icons/fi";


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
                <GridItem {...stl} colSpan={1}>
                    <ScaleAnimation scale={1.2} className="contact-buttons">
                        <FiMail size={size} />
                    </ScaleAnimation>
                </GridItem>
                <GridItem {...stl} colSpan={1}>
                    <ScaleAnimation scale={1.2} className="contact-buttons">
                        <BsLinkedin size={size} />
                    </ScaleAnimation>
                </GridItem>
                <GridItem {...stl} colSpan={1}>
                    <ScaleAnimation scale={1.2} className="contact-buttons">
                        <BsWhatsapp size={size} />
                    </ScaleAnimation>
                </GridItem>
                <GridItem {...stl} colSpan={1}>
                    <ScaleAnimation scale={1.2} className="contact-buttons">
                        <BsGithub size={size} />
                    </ScaleAnimation>
                </GridItem>
                <GridItem {...stl} colSpan={end}>
                    <ScaleAnimation scale={1.2} className="contact-buttons">
                        <BiWorld size={size} />
                    </ScaleAnimation>
                </GridItem>
            </Grid>
        </Box>
    );
}

export default Contact;