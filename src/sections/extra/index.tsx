'use client'

import {
  Box,
  Button,
  Divider,
  FormControl,
  HStack,
  Input,
  SimpleGrid,
  useToast,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import Titles from "../../components/typography/titles";
import { FiUser } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import NormalText from "../../components/typography/normalText";
import _ from "lodash";
import axios from "api/axios";

function Extra({ commentsData }: { commentsData: Array<any> }) {
  const toast = useToast();
  const [comments, setComments] = useState<Array<any>>(commentsData);

  const formik = useFormik({
    initialValues: {
      name: "",
      comment: "",
    },
    onSubmit: (values, actions) => {
      axios
        .post("/comments", values)
        .then((response) => {
          setComments((prevState) => [...prevState, values]);
          toast({
            title: "Sucesso!",
            description: response.data.message,
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          actions.resetForm();
        })
        .catch((err) => {
          console.log(err);
          toast({
            title: "Erro!",
            description: err.response.data.message,
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        });
    },
  });

  return (
    <>
      <Box minHeight="100vh">
        <Box w="100%">
          <Box w="100%" paddingTop="65px">
            <Box>
              <Box w="100%" textAlign="center">
                <Titles text="Contato" />
              </Box>
              <SimpleGrid
                gap="30px"
                column={["2"]}
                minChildWidth={"370px"}
                justifyContent="center"
                w="90%"
                m="30px auto 0 auto"
              >
                <Box w="100%">
                  <Divider />
                  <Box h="150"></Box>
                </Box>
                <Box w="100%">
                  <Divider />
                  <Box h="150" m="15px 0" w="100%" textAlign="center">
                    <Box alignItems="center" display="flex">
                      <BsLinkedin size="20px" />
                      <NormalText text={"Linkedin"} />
                    </Box>
                    <Box alignItems="center" display="flex">
                      <BsLinkedin size="20px" />
                      <NormalText text={"Linkedin"} />
                    </Box>
                  </Box>
                </Box>
              </SimpleGrid>
              <HStack
                m="25px auto"
                w="80%"
                display="flex"
                as="form"
                onSubmit={() => formik.handleSubmit}
              >
                <SimpleGrid
                  w="100%"
                  gap={"20px"}
                  columns={3}
                  m="0 auto"
                  justifyContent="center"
                  minChildWidth="370px"
                >
                  <FormControl
                    marginRight="15px"
                    width="100%"
                    m="0 auto"
                    justifyContent="center"
                  >
                    <Input
                      _focus={{ outline: "none" }}
                      placeholder="Nome"
                      name="name"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                    ></Input>
                  </FormControl>
                  <FormControl
                    marginRight="15px"
                    width="100%"
                    m="0 auto"
                    justifyContent="center"
                  >
                    <Input
                      _focus={{ outline: "none" }}
                      placeholder="Escreva um comentário"
                      name="comment"
                      onChange={formik.handleChange}
                      value={formik.values.comment}
                    ></Input>
                  </FormControl>
                  <Button
                    _focus={{ outline: "none" }}
                    type="submit"
                    width="100%"
                    m="0 auto"
                    justifyContent="center"
                  >
                    Submit
                  </Button>
                </SimpleGrid>
              </HStack>
              <Box w="90%" m="0 auto" display="flex" flexWrap="wrap">
                <SimpleGrid
                  w="100%"
                  column={"3"}
                  gap={"25px"}
                  minChildWidth="220px"
                >
                  {(comments ?? []).map((comment) => {
                    return (
                      <HStack display="block" m="2%" key={_.uniqueId()}>
                        <Box
                          display="flex"
                          alignItems="center"
                          borderBottom="1px solid rgba(115, 115, 115, 0.6)"
                          justifyContent="space-between"
                          w="100%"
                        >
                          <FiUser size="23" />
                          <NormalText text={comment.name} />
                        </Box>
                        <Box>
                          <NormalText text={comment.comment} />
                        </Box>
                      </HStack>
                    );
                  })}
                </SimpleGrid>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Extra;
