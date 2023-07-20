import { Box, Button, FormControl, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useCallbackRef, useDisclosure } from "@chakra-ui/react";
import { createClient } from "@vercel/edge-config";
import { keyable } from "asset/types";
import _ from "lodash";
import React, { useState, useEffect, useCallback } from "react";
import api from "../../api/axios";
import DButton from "components/typography/dButton";
import { Colors } from "asset/enums";
import Titles from "components/typography/titles";
import { verifyToken } from "helpers/login";

export const getStaticProps = async () => {
    return {
        props: {
            json: await createClient(process.env.EDGE_CONFIG).getAll(),
        },
    };
};


const Form = ({ onClose }: keyable) => {
    const [credentials, setCredentials] = useState<keyable>({ email: "akJrT8XrDwvRk3k@example.com", password: "5zG@u7Q@9p" })
    const login = useCallback(() => {
        api.post("api/login", credentials).then((response) => {
            if (response.status === 200) {
                localStorage.setItem('token', response.data.token)
                onClose()
            }
        }).catch((error) => {

        })
    }, [credentials])

    return <FormControl display="flex" alignItems="center" flexDirection="column" gap="1em">
        <Input color={Colors.Gray} placeholder="Email" variant="unstyled" value={credentials.email} onChange={(e) => setCredentials((prev) => ({ ...prev, email: e.target.value }))} />
        <Input color={Colors.Gray} placeholder="Password" variant="unstyled" value={credentials.password} onChange={(e) => setCredentials((prev) => ({ ...prev, password: e.target.value }))} />
        <DButton customFontSize="0.9rem" onClick={login} type="submit" text="Submit" />
    </FormControl>
}

export default function Admin({ json }: keyable) {
    const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true })
    const [state, setState] = useState<keyable>(json)

    useEffect(() => {
        const isAuthenticated = async () => {
            if (await verifyToken(localStorage.getItem('token') ?? "")) {
                onClose()
            }
        }

        isAuthenticated()
    }, [])

    function handleChange(value: any, trace: any) {
        setState((prev) => {
            let clone = _.clone(prev)
            _.set(clone, trace, value);
            return clone;
        })
    }

    function sendAtt() {
        api.post('api/config', state, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            }
        })
    }

    function renderData(data: any, trace: Array<string | number> = []) {
        if (Array.isArray(data)) {
            return <Box display="flex" gap="25px">
                {data.map((item, index) => {
                    let nTrace = [...trace]
                    nTrace.push(index)
                    return <Box key={index}>{renderData(item, nTrace)}</Box>
                })}
            </Box>
        }

        if (typeof data === 'object' && data !== null) {
            return Object.entries(data).map(([key, value]) => {
                let nTrace = [...trace]
                nTrace.push(key)

                return <Box key={key}>
                    <strong>{key}:</strong> {renderData(value, nTrace)}
                </Box>
            });
        }

        return <Input value={data} onChange={(e) => handleChange(e.target.value, trace)} />;
    }


    return (
        <Box color="white">
            <Modal closeOnOverlayClick={false} isCentered isOpen={isOpen} onClose={onClose}>
                <ModalOverlay
                    bg='blackAlpha.300'
                    backdropFilter='blur(10px) hue-rotate(90deg)'
                />
                <ModalContent backgroundColor={Colors.Black}>
                    <ModalHeader><Titles size="esm" text="Log in" /></ModalHeader>
                    <ModalBody>
                        <Form onClose={onClose} />
                    </ModalBody>
                </ModalContent>
            </Modal>
            <Button onClick={sendAtt}>Save</Button>
            {renderData(state)}
        </Box>
    );
}