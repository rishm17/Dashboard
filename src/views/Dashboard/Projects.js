// Chakra imports
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Image,
  useColorModeValue,
  Text
} from "@chakra-ui/react";
// assets

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
// Custom icons
import React, { useState } from "react";
// react icons
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import avatar4 from "assets/img/avatars/avatar4.png";
import avatar6 from "assets/img/avatars/avatar6.png";
import ImageArchitect1 from "assets/img/ImageArchitect1.png";
import ImageArchitect3 from "assets/img/ImageArchitect3.png";
import { FaPlus } from "react-icons/fa";
import { Separator } from "components/Separator/Separator";

const MyProjects = () => {
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }} mb="25px">
      <Card px="12px" mb={{ lg: "0px" }} pb="0px" maxH="100%">
        <CardHeader p="12px 5px" mb="12px" display={{ sm: "flex", lg: "none" }}>
          <Flex direction="column">
            <Text fontSize="lg" color={textColor} fontWeight="bold" px="5px">
              My Projects
            </Text>
          </Flex>
        </CardHeader>
        <CardBody ps="10px" pe="5px" mb="20px" position="relative">
          <Grid
            templateColumns={{
              sm: "1fr",
              md: "1fr 1fr",
              xl: "repeat(3, 1fr)"
            }}
            templateRows={{
              sm: "1fr 1fr 1fr auto",
              md: "1fr 1fr",
              xl: "repeat(1, 1fr)"
            }}
            gap="48px"
          >
            <Flex direction="column" maxHeight="100%">
              <Box
                mb="0px"
                px="25px"
                py="25px"
                position="relative"
                borderRadius="30px"
                bgColor="gray.700"
                boxShadow="0px 3.5px 35px rgba(0, 0, 0, 0.5)"
              >
                <Image src={ImageArchitect1} borderRadius="15px" mb="12px" />

                <Flex direction="column">
                  <Text
                    fontSize="md"
                    color="gray.500"
                    fontWeight="600"
                    mb="10px"
                  >
                    Project #1
                  </Text>
                  <Text
                    fontSize="xl"
                    color={textColor}
                    fontWeight="bold"
                    mb="10px"
                  >
                    Modern
                  </Text>
                  <Text
                    fontSize="md"
                    color="gray.500"
                    fontWeight="400"
                    mb="20px"
                  >
                    As Uber works through a huge amount of internal management
                    turmoil.
                  </Text>
                  <Flex justifyContent="space-between">
                    <Button
                      variant="outline"
                      colorScheme="teal"
                      minW="110px"
                      h="36px"
                      fontSize="xs"
                      px="1.5rem"
                    >
                      VIEW PROJECT
                    </Button>
                    <AvatarGroup size="xs">
                      <Avatar name="Ryan Florence" src={avatar6} />
                      <Avatar name="Segun Adebayo" src={avatar2} />
                      <Avatar name="Kent Dodds" src={avatar3} />
                      <Avatar name="Prosper Otemuyiwa" src={avatar4} />
                    </AvatarGroup>
                  </Flex>
                </Flex>
              </Box>
            </Flex>
            <Flex direction="column" maxHeight="100%">
              <Box
                mb="0px"
                px="25px"
                py="25px"
                position="relative"
                borderRadius="30px"
                bgColor="gray.700"
                boxShadow="0px 3.5px 35px rgba(0, 0, 0, 0.5)"
              >
                <Image src={ImageArchitect3} borderRadius="15px" mb="12px" />

                <Flex direction="column">
                  <Text
                    fontSize="md"
                    color="gray.500"
                    fontWeight="600"
                    mb="10px"
                  >
                    Project #1
                  </Text>
                  <Text
                    fontSize="xl"
                    color={textColor}
                    fontWeight="bold"
                    mb="10px"
                  >
                    Minimalist
                  </Text>
                  <Text
                    fontSize="md"
                    color="gray.500"
                    fontWeight="400"
                    mb="20px"
                  >
                    Carbon Credits are a very important tool in the fight
                    against climate change.
                  </Text>
                  <Flex justifyContent="space-between">
                    <Button
                      variant="outline"
                      colorScheme="teal"
                      minW="110px"
                      h="36px"
                      fontSize="xs"
                      px="1.5rem"
                    >
                      VIEW PROJECT
                    </Button>
                    <AvatarGroup size="xs">
                      <Avatar name="Ryan Florence" src={avatar6} />
                      <Avatar name="Segun Adebayo" src={avatar2} />
                      <Avatar name="Kent Dodds" src={avatar3} />
                      <Avatar name="Prosper Otemuyiwa" src={avatar4} />
                    </AvatarGroup>
                  </Flex>
                </Flex>
              </Box>
            </Flex>

            <Button
              p="0px"
              bg="transparent"
              borderColor="gray.600"
              minHeight={{ sm: "200px", md: "100%" }}
              borderRadius="30px"
              bgColor="gray.700"
              Shadow="0px 3.5px 35px rgba(0, 0, 0, 0.5)"
              borderWidth="1px"
            >
              <Flex direction="column" justifyContent="center" align="center">
                <Icon as={FaPlus} fontSize="lg" mb="12px" />
                <Text fontSize="lg" fontWeight="bold">
                  Create a New Project
                </Text>
              </Flex>
            </Button>
          </Grid>
        </CardBody>
      </Card>
    </Flex>
  );
};

export default MyProjects;
