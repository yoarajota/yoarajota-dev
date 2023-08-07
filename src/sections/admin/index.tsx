"use client";

import {
  Box,
  FormControl,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spinner,
  useDisclosure,
} from "@chakra-ui/react";
import { createClient } from "@vercel/edge-config";
import { keyable } from "asset/types";
import _ from "lodash";
import React, { useState, useEffect, useCallback } from "react";
import api from "../../api/axios";
import DButton from "components/typography/dButton";
import { Colors } from "asset/enums";
import { verifyToken } from "helpers/login";
import { motion } from "framer-motion";
import JSONInput from "react-json-editor-ajrm";
import { localeEn } from "../../../statics/localeEn";
import Titles from "components/typography/titles";

export const getStaticProps = async () => {
  return {
    props: {
      json: await createClient(process.env.EDGE_CONFIG).getAll(),
    },
  };
};

const Form = ({ onClose }: keyable) => {
  const [credentials, setCredentials] = useState<keyable>({
    email: "",
    password: "",
    loading: false,
  });
  const login = useCallback(async () => {
    setCredentials((prev) => ({ ...prev, loading: true }));
    await api
      .post("api/login", credentials)
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          onClose();
        }
      })
      .catch((error) => {});
    setCredentials((prev) => ({ ...prev, loading: false }));
  }, [credentials, onClose]);

  return (
    <FormControl
      display="flex"
      alignItems="center"
      flexDirection="column"
      gap="1em"
    >
      <Input
        color={Colors.Gray}
        placeholder="Email"
        variant="unstyled"
        value={credentials.email}
        onChange={(e) =>
          setCredentials((prev) => ({ ...prev, email: e.target.value }))
        }
      />
      <Input
        color={Colors.Gray}
        type="password"
        placeholder="Password"
        variant="unstyled"
        value={credentials.password}
        onChange={(e) =>
          setCredentials((prev) => ({ ...prev, password: e.target.value }))
        }
      />
      <Box h="40px">
        {credentials.loading ? (
          <Spinner speed="0.9s" color={Colors.Orange} size="sm" />
        ) : (
          <DButton
            customFontSize="0.9rem"
            onClick={login}
            type="submit"
            text="Submit"
          />
        )}
      </Box>
    </FormControl>
  );
};

export default function Admin({ json }: keyable) {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  const [state, setState] = useState<keyable>(json);
  const [opacity, setOpacity] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setOpacity(1);

    const isAuthenticated = async () => {
      if (await verifyToken(localStorage.getItem("token") ?? "")) {
        onClose();
      }
    };
    isAuthenticated();
  }, [onClose]);

  async function sendAtt() {
    setIsLoading(true);
    await api
      .post("api/config", state, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      })
      .catch(() => {});
    setIsLoading(false);
  }

  return (
    <Box color="white">
      <Modal
        closeOnOverlayClick={false}
        isCentered
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent backgroundColor={Colors.Black}>
          <ModalHeader>
            <Titles size="esm" text="Log in" />
          </ModalHeader>
          <ModalBody>
            <Form onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity }}>
        <FormControl
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap="10px"
          marginTop="10px"
        >
          <Box h="40px">
            {isLoading ? (
              <Spinner speed="0.9s" color={Colors.Orange} size="sm" />
            ) : (
              <DButton type="submit" onClick={sendAtt} text="Save changes" />
            )}
          </Box>
          <JSONInput
            locale={localeEn}
            onBlur={(val: keyable) => {
              setState(val.jsObject);
            }}
            placeholder={state}
            id={_.uniqueId("json-input-id")}
          />
        </FormControl>
      </motion.div>
    </Box>
  );
}
