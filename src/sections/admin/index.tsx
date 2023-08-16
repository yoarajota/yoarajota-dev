"use client";

import {
  Box,
  Divider,
  FormControl,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Textarea,
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
import axios from "../../api/axios";
import ModalForm from "components/admin/ModalForm";
import Titles from "components/typography/titles";
import DataStack from "components/admin/DataStack";

export const getStaticProps = async () => {
  return {
    props: {
      json: await createClient(process.env.EDGE_CONFIG).getAll(),
    },
  };
};

const Area = () => {
  return <Textarea value={'olar'} />
}

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
      .catch(() => { });
    setIsLoading(false);
  }

  // const mongoDBData: any = {
  //   "objectives": ["a", "b"]
  // }

  // const MongoDBDATA = () => {
  //   let arrData = [];
  //   for (let key in mongoDBData) {
  //     let data = mongoDBData[key];
  //     if (_.isArray(data)) {
  //       arrData.push(<DataStack title={key} data={data} />);
  //     } else {
  //       arrData.push(<Area />);
  //     }
  //   }
  //   return <>{...arrData}</>;
  // }

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
            <ModalForm onClose={onClose} />
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
          {!isOpen &&
            <>
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
              {/* <Divider /> */}
              {/* <MongoDBDATA /> */}
            </>
          }
        </FormControl>
      </motion.div>
    </Box>
  );
}
