import { Box, Button, Card, CardBody, Center, FormControl, Input } from "@chakra-ui/react";
import { Colors } from "asset/enums";
import { ClientContext } from "components/contexts/client";
import { useContext } from "react";
import Skills from "../../components/skills";
import Titles from "../../components/typography/titles";
import Yj from "../../components/yj";
import NormalText from "components/typography/normaltext";
import { motion } from "framer-motion";
import ImageAndButtons from "components/imageAndButtons";
import FadeInFromTop from "components/animations/fadeInFromTop";
import { BsFillPersonFill } from "react-icons/bs";
import ScaleAnimation from "components/animations/scaleAnimation";

function Feedback() {
    return (<Center flexDirection="column">
        <Center>
            <FormControl w="70%">
                <Input outline="1px solid red" variant='unstyled' placeholder='Unstyled' />
            </FormControl>
            <ScaleAnimation scale={0.9}>
                <button
                    type='submit'
                >
                    Submit
                </button>
            </ScaleAnimation>
        </Center>
        <Center w="70%">
            <Card variant="unstyled" background="transparent" >
                <CardBody display="flex" alignItems="center" gap="15px">
                    <BsFillPersonFill /> <NormalText customFontSize="1rem" text="View a summary of all your customers over the last month" />
                </CardBody>
            </Card>
        </Center>
    </Center>);
}

export default Feedback; 
