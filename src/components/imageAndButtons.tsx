import { Box, Button, Image } from "@chakra-ui/react";
import { useCallback, useEffect, useRef } from "react";
import { Colors } from "asset/enums";
import { SiLinkedin } from "react-icons/si";
import api from "../api/axios";
import { AiOutlineFilePdf } from "react-icons/ai";
import { ImageAndButtonType } from "asset/types";

function ImageAndButtons({ idString }: ImageAndButtonType) {
    const handleDownload = useCallback(() => {
        api.get('http://localhost:3000/api/download', { responseType: "blob" }).then((response) => {
            const file = new Blob([response.data], { type: "application/pdf" });
            const fileURL = URL.createObjectURL(file);

            var fileLink = document.createElement('a');
            fileLink.href = fileURL;
            fileLink.download = 'Currículo João Vítor Basso Sberse';
            fileLink.click();
            fileLink.remove();
        })
    }, [])

    return (
        <Box
            w='100%'
            position='relative'
            flexDirection='column-reverse'
            alignItems='center'
            id={idString}
        >
            <Box
                top='5.5rem'
                position='absolute'
                gap={"6rem"}
                display="flex"
                justifyContent="center"
            >
                <Button
                    h={'2rem'}
                    padding={'1.8rem 0.8rem'}
                    border="4px solid #4B4453"
                    borderRadius="999px"
                    onClick={() => {
                        handleDownload();
                    }}
                    bg="transparent"
                    color={Colors.Gray}
                    _active={{ bg: "" }}
                    _hover={{ bg: "" }}
                    gap="9px"
                >
                    <AiOutlineFilePdf size={"2em"} />
                </Button>
                <Button
                    h={'2rem'}
                    padding={'1.8rem 0.8rem'}
                    border="4px solid #4B4453"
                    borderRadius="999px"
                    onClick={() => {
                        handleDownload();
                    }}
                    bg="transparent"
                    color={Colors.Gray}
                    _active={{ bg: "" }}
                    _hover={{ bg: "" }}
                    gap="9px"
                >
                    <SiLinkedin size={"2em"} color={Colors.Gray} />
                </Button>
            </Box>
            <Image
                top='0'
                position='absolute'
                margin={'0 auto'}
                alt="picture of João Vítor Sberse"
                src={"images/me.jpg"}
                w="150px"
                borderRadius="999px"
                border="4px solid #4B4453"
            />
        </Box>
    );
}

export default ImageAndButtons;