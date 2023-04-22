import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import { Colors } from "asset/enums";
import { ClientContext } from "components/contexts/client";
import NormalText from "components/typography/normaltext";
import Titles from "components/typography/titles";
import { useContext } from "react";
import { BiWorld } from "react-icons/bi";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

function Contact() {
  const { innerWidth } = useContext(ClientContext);

  const cSpan1 = innerWidth < 720 ? 2 : 2;
  const cSpan2 = innerWidth < 720 ? 2 : 3;
  const end = innerWidth < 720 ? 2 : 1;
  const h = innerWidth < 720 ? "auto" : "25em";
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
      //   display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <Box paddingTop="65px">
        <Titles>Contact</Titles>
      </Box>
      <Box>
        <NormalText text="Download" />
      </Box>
      <Grid
        m="0 auto"
        w="42%"
        templateRows={innerWidth < 700 ? "repeat(6, 1fr)" : "repeat(2, 1fr)"}
        templateColumns={innerWidth < 700 ? "repeat(2, 1fr)" : "repeat(5, 1fr)"}
        gap={4}
        minW={innerWidth < 700 ? "95%" : "34.375em"}
        border={`2px solid ${Colors.Orange}`}
        borderRadius="2.5em"
        h={h}
      >
        <GridItem {...stl} colSpan={cSpan1}>
          <Image
            margin={"0 auto"}
            alt="picture of João Vítor Sberse"
            src={"images/me.jpg"}
            w="150px"
            borderRadius="999px"
            border="2px solid var(--orange)"
          />
        </GridItem>
        <GridItem textAlign="center" {...stl} colSpan={cSpan2}>
          <Titles size="md">João Vítor Basso Sberse</Titles>
        </GridItem>
        <GridItem {...stl} colSpan={1}>
          <FiMail size="3em" />
        </GridItem>
        <GridItem {...stl} colSpan={1}>
          <BsLinkedin size="3em" />
        </GridItem>
        <GridItem {...stl} colSpan={1}>
          <BsWhatsapp size="3em" />
        </GridItem>
        <GridItem {...stl} colSpan={1}>
          <BsGithub size="3em" />
        </GridItem>
        <GridItem {...stl} colSpan={end}>
          <BiWorld size="3em" />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Contact;
