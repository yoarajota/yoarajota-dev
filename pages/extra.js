import {
  Box,
  Button,
  Center,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  SimpleGrid,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import Normaltext from "../public/components/typography/normaltext";
import Titles from "../public/components/typography/titles";
import { FiUser } from "react-icons/fi";
import { useQuery } from "react-query";

function Extra() {
  const toast = useToast();
  const [comments, setComments] = useState([]);
  const { isLoading, data } = useQuery(
    "comments",
    () => {
      return axios.get("http://localhost:8000/comments");
    },
    { staleTime: 1000 * 60 * 10 }
  );

  useEffect(() => {
    if (!isLoading) {
      setComments(data.data.data);
    }
    console.log(data?.data.data);
  }, [isLoading]);

  const formik = useFormik({
    initialValues: {
      name: "",
      comment: "",
    },
    onSubmit: (values, actions) => {
      axios
        .post("http://localhost:8000/comments", values)
        .then((response) => {
          setComments((prevState) => [...prevState, values]);
          data = {};
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

  useEffect(() => {
    console.log(comments);
  }, [comments]);

  return (
    <Box minHeight="100vh">
      <Box w="100%">
        <Box w="100%" paddingTop="65px">
          <Box>
            <Box w="100%" textAlign="center">
              <Titles>Contato</Titles>
            </Box>
            <SimpleGrid
              gap="30px"
              column={"2"}
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
                <Box h="150" m="15px 0" w="100%" textAlign='center'>
                  <Normaltext>Linkedin</Normaltext>
                </Box>
              </Box>
            </SimpleGrid>
            <HStack
              m="0 auto"
              w="80%"
              alignItem="center"
              display="flex"
              as="form"
              onSubmit={formik.handleSubmit}
            >
              <FormControl marginRight="15px" width="20%">
                <Input
                  placeholder="Nome"
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                ></Input>
              </FormControl>
              <FormControl marginRight="15px" width="60%">
                <Input
                  placeholder="Escreva um comentário"
                  name="comment"
                  onChange={formik.handleChange}
                  value={formik.values.comment}
                ></Input>
              </FormControl>

              <Button type="submit" width="20%">
                Submit
              </Button>
            </HStack>
            <Box w="90%" m="0 auto" display="flex" flexWrap="wrap">
              <SimpleGrid w="100%" column={"3"} minChildWidth="220px">
                {(comments ?? [] ?? data?.data.data).map((comment) => {
                  return (
                    <HStack display="block" m="2%">
                      <Box
                        display="flex"
                        alignItems="center"
                        borderBottom="1px solid rgba(115, 115, 115, 0.6)"
                        justifyContent="space-between"
                        w="100%"
                      >
                        <FiUser size="23" />
                        <Normaltext>{comment.name}</Normaltext>
                      </Box>
                      <Box>
                        <Normaltext>{comment.comment}</Normaltext>
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
  );
}

export default Extra;
