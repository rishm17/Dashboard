import React from "react";
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
  Link,
  Switch,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
// Assets
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import avatar4 from "assets/img/avatars/avatar4.png";
import avatar5 from "assets/img/avatars/avatar5.png";
import avatar6 from "assets/img/avatars/avatar6.png";
import ImageArchitect1 from "assets/img/ImageArchitect1.png";
import ImageArchitect2 from "assets/img/ImageArchitect2.png";
import ImageArchitect3 from "assets/img/ImageArchitect3.png";
import ProfileBgImage from "assets/img/ProfileBackground.png";
import {
  FaCube,
  FaFacebook,
  FaInstagram,
  FaPenFancy,
  FaPlus,
  FaTwitter
} from "react-icons/fa";
import { IoDocumentsSharp } from "react-icons/io5";

function Profile() {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const bgProfile = useColorModeValue(
    "hsla(0,0%,100%,.8)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );
  const borderProfileColor = useColorModeValue(
    "white",
    "rgba(255, 255, 255, 0.31)"
  );
  const emailColor = useColorModeValue("gray.400", "gray.300");

  return (
    <Flex direction="column">
      <Box
        mb={{ sm: "205px", md: "75px", xl: "70px" }}
        borderRadius="15px"
        px="0px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        align="center"
      >
        <Box
          bgImage={ProfileBgImage}
          w="100%"
          h="300px"
          borderRadius="25px"
          bgPosition="50%"
          bgRepeat="no-repeat"
          position="relative"
          display="flex"
          justifyContent="center"
        >
          <Flex
            direction={{ sm: "column", md: "row" }}
            mx="1.5rem"
            maxH="330px"
            w={{ sm: "90%", xl: "95%" }}
            justifyContent={{ sm: "center", md: "space-between" }}
            align="center"
            backdropFilter="saturate(200%) blur(50px)"
            position="absolute"
            boxShadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)"
            border="2px solid"
            borderColor={borderProfileColor}
            bg={bgProfile}
            p="24px"
            borderRadius="20px"
            transform={{
              sm: "translateY(45%)",
              md: "translateY(110%)",
              lg: "translateY(160%)"
            }}
          >
            <Flex
              align="center"
              mb={{ sm: "10px", md: "0px" }}
              direction={{ sm: "column", md: "row" }}
              w={{ sm: "100%" }}
              textAlign={{ sm: "center", md: "start" }}
            >
              <Avatar
                me={{ md: "22px" }}
                src={avatar4}
                w="80px"
                h="80px"
                borderRadius="15px"
              />
              <Flex direction="column" maxWidth="100%" my={{ sm: "14px" }}>
                <Text
                  fontSize={{ sm: "lg", lg: "xl" }}
                  color={textColor}
                  fontWeight="bold"
                  ms={{ sm: "8px", md: "0px" }}
                >
                  Username
                </Text>
                <Text
                  fontSize={{ sm: "sm", md: "md" }}
                  color={emailColor}
                  fontWeight="semibold"
                >
                  rishabhmathur7@gmail.com
                </Text>
              </Flex>
            </Flex>
            <Flex
              direction={{ sm: "column", lg: "row" }}
              w={{ sm: "100%", md: "50%", lg: "auto" }}
            ></Flex>
          </Flex>
        </Box>
      </Box>
      <Grid templateColumns={{ sm: "1fr", xl: "repeat(3, 1fr)" }} gap="22px">
        <Card p="16px" my={{ sm: "24px", xl: "0px" }}>
          <CardHeader p="12px 5px" mb="12px">
            <Flex direction="row">
              <Text fontSize="lg" color={textColor} fontWeight="bold">
                Profile Information
              </Text>
            </Flex>
          </CardHeader>
          <CardBody px="5px">
            <Flex direction="column">
              <Flex align="center" mb="18px">
                <Text
                  fontSize="md"
                  color="gray.300"
                  fontWeight="bold"
                  me="10px"
                >
                  Username:{" "}
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                  Username
                </Text>
              </Flex>
              <Flex align="center" mb="18px">
                <Text
                  fontSize="md"
                  color="gray.300"
                  fontWeight="bold"
                  me="10px"
                >
                  User Type:{" "}
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                  Business
                </Text>
              </Flex>
              <Flex align="center" mb="18px">
                <Text
                  fontSize="md"
                  color="gray.300"
                  fontWeight="bold"
                  me="10px"
                >
                  Company Name:{" "}
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                  Company Name
                </Text>
              </Flex>
              <Flex align="center" mb="18px">
                <Text
                  fontSize="md"
                  color="gray.300"
                  fontWeight="bold"
                  me="10px"
                >
                  CIN:{" "}
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                  CIN
                </Text>
              </Flex>
              <Flex align="center" mb="18px">
                <Text
                  fontSize="md"
                  color="gray.300"
                  fontWeight="bold"
                  me="10px"
                >
                  Contact Person:{" "}
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                  Rishabh Mathur
                </Text>
              </Flex>
              <Flex align="center" mb="18px">
                <Text
                  fontSize="md"
                  color="gray.300"
                  fontWeight="bold"
                  me="10px"
                >
                  Phone Number:{" "}
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                  9717471183
                </Text>
              </Flex>
              <Flex align="center" mb="18px">
                <Text
                  fontSize="md"
                  color="gray.300"
                  fontWeight="bold"
                  me="10px"
                >
                  Email Address:{" "}
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                  rishabhmathur7@gmail.com
                </Text>
              </Flex>
            </Flex>
          </CardBody>
        </Card>
        <Card p="16px" my={{ sm: "24px", xl: "0px" }}>
          <CardHeader p="12px 5px" mb="12px">
            <Flex direction="row">
              <Text fontSize="lg" color={textColor} fontWeight="bold">
                Banking Details
              </Text>
            </Flex>
          </CardHeader>
          <CardBody px="5px">
            <Flex direction="column">
              <Flex align="center" mb="18px">
                <Text
                  fontSize="md"
                  color="gray.300"
                  fontWeight="bold"
                  me="10px"
                >
                  Name:{" "}
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                  ABC Company Ltd.
                </Text>
              </Flex>
              <Flex align="center" mb="18px">
                <Text
                  fontSize="md"
                  color="gray.300"
                  fontWeight="bold"
                  me="10px"
                >
                  Account Number:{" "}
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                  12345677890
                </Text>
              </Flex>
              <Flex align="center" mb="18px">
                <Text
                  fontSize="md"
                  color="gray.300"
                  fontWeight="bold"
                  me="10px"
                >
                  IFSC Code:{" "}
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                  SBIN0001077
                </Text>
              </Flex>
              <Flex align="center" mb="18px">
                <Text
                  fontSize="md"
                  color="gray.300"
                  fontWeight="bold"
                  me="10px"
                >
                  Address:{" "}
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                  #124, ABC Street, XYZ City, Haryana 134101, India
                </Text>
              </Flex>
            </Flex>
          </CardBody>
        </Card>

        <Button
          p="0px"
          bg="transparent"
          borderColor="gray.300"
          minHeight={{ sm: "200px", md: "100%" }}
          borderRadius="30px"
          bgColor="gray.700"
          Shadow="0px 3.5px 35px rgba(0, 0, 0, 0.5)"
        >
          <Flex direction="column" justifyContent="center" align="center">
            <Icon as={FaPlus} fontSize="lg" mb="12px" />
            <Text fontSize="lg" fontWeight="bold">
              Click Here To Edit Profile
            </Text>
          </Flex>
        </Button>
      </Grid>
    </Flex>
  );
}

export default Profile;
