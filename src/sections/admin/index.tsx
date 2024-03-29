"use client";

import {
  Box,
  Divider,
  FormControl,
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
import React, { useState } from "react";
import api from "../../api/axios";
import DButton from "components/typography/dButton";
import { Colors } from "asset/enums";
import { motion } from "framer-motion";
import JSONInput from "react-json-editor-ajrm";
import { localeEn } from "../../../statics/localeEn";
import ModalForm from "components/admin/ModalForm";
import Titles from "components/typography/titles";
import MongoDBDATA from "components/admin/MongoDBData";

export const getStaticProps = async () => {
  return {
    props: {
      json: await createClient(process.env.EDGE_CONFIG).getAll(),
    },
  };
};

export default function Admin({ json, auth, information }: keyable) {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: !auth });
  const [state, setState] = useState<keyable>(json);
  const [opacity, setOpacity] = useState<number>(auth ? 1 : 0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
            <ModalForm
              onClose={() => {
                setOpacity(1);
                onClose();
              }}
            />
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
          {!isOpen && (
            <>
              <DButton type="submit" onClick={() => {}} text="Refetch" />
              <Divider />
              <Titles size="sm" text="System Config" />
              <Box h="40px">
                {isLoading ? (
                  <Spinner speed="0.9s" color={Colors.Orange} size="sm" />
                ) : (
                  <DButton
                    type="submit"
                    onClick={sendAtt}
                    text="Save changes"
                  />
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
              <Divider />
              <MongoDBDATA data={information} />
            </>
          )}
        </FormControl>
      </motion.div>
    </Box>
  );
}
