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
  Portal,
  Progress,
  SimpleGrid,
  Spacer,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";
// assets
import peopleImage from "assets/img/people-image.png";
import logoChakra from "assets/svg/logo-white.svg";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
import IconBox from "components/Icons/IconBox";
// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  RocketIcon,
  StatsIcon,
  WalletIcon
} from "components/Icons/Icons.js";
import DashboardTableRow from "components/Tables/DashboardTableRow";
import TimelineRow from "components/Tables/TimelineRow";
import React, { useState } from "react";
// react icons
import { BsArrowRight } from "react-icons/bs";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { dashboardTableData, timelineData } from "variables/general";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import avatar4 from "assets/img/avatars/avatar4.png";
import avatar5 from "assets/img/avatars/avatar5.png";
import avatar6 from "assets/img/avatars/avatar6.png";
import ImageArchitect1 from "assets/img/ImageArchitect1.png";
import ImageArchitect2 from "assets/img/ImageArchitect2.png";
import ImageArchitect3 from "assets/img/ImageArchitect3.png";
import {
  FaCube,
  FaFacebook,
  FaInstagram,
  FaPenFancy,
  FaPlus,
  FaTwitter
} from "react-icons/fa";

export default function Dashboard() {
  const value = "$100.000";
  // Chakra Color Mode
  const { colorMode, toggleColorMode } = useColorMode();
  const iconTeal = useColorModeValue("teal.300", "teal.300");
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");
  const [series, setSeries] = useState([
    {
      type: "area",
      name: "Mobile apps",
      data: [190, 220, 205, 350, 370, 450, 400, 360, 210, 250, 292, 150]
    },
    {
      type: "area",
      name: "Websites",
      data: [400, 291, 121, 117, 25, 133, 121, 211, 147, 25, 201, 203]
    }
  ]);
  const overlayRef = React.useRef();

  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
      <SimpleGrid
        columns={{ sm: 1, md: 2, xl: 4 }}
        spacing="24px"
        mb={{ lg: "26px" }}
      >
        <Card minH="83px">
          <CardBody>
            <Flex flexDirection="row" align="center" justify="center" w="100%">
              <Stat me="auto">
                <StatLabel
                  fontSize="sm"
                  color="gray.400"
                  fontWeight="bold"
                  pb=".1rem"
                >
                  Total Earnings
                </StatLabel>
                <Flex>
                  <StatNumber fontSize="lg" color={textColor}>
                    Rs 53,000
                  </StatNumber>
                  <StatHelpText
                    alignSelf="flex-end"
                    justifySelf="flex-end"
                    m="0px"
                    color="green.400"
                    fontWeight="bold"
                    ps="3px"
                    fontSize="md"
                  >
                    {/*-14%*/}
                  </StatHelpText>
                </Flex>
              </Stat>
              <IconBox as="box" h={"45px"} w={"45px"} bg={iconTeal}>
                <WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />
              </IconBox>
            </Flex>
          </CardBody>
        </Card>
        <Card minH="83px">
          <CardBody>
            <Flex flexDirection="row" align="center" justify="center" w="100%">
              <Stat me="auto">
                <StatLabel
                  fontSize="sm"
                  color="gray.400"
                  fontWeight="bold"
                  pb=".1rem"
                >
                  Total Credits Listed
                </StatLabel>
                <Flex>
                  <StatNumber fontSize="lg" color={textColor}>
                    2,300
                  </StatNumber>
                  <StatHelpText
                    alignSelf="flex-end"
                    justifySelf="flex-end"
                    m="0px"
                    color="green.400"
                    fontWeight="bold"
                    ps="3px"
                    fontSize="md"
                  >
                    {/*-14%*/}
                  </StatHelpText>
                </Flex>
              </Stat>
              <IconBox as="box" h={"45px"} w={"45px"} bg={iconTeal}>
                <GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />
              </IconBox>
            </Flex>
          </CardBody>
        </Card>
        <Card minH="83px">
          <CardBody>
            <Flex flexDirection="row" align="center" justify="center" w="100%">
              <Stat>
                <StatLabel
                  fontSize="sm"
                  color="gray.400"
                  fontWeight="bold"
                  pb=".1rem"
                >
                  Credits Sold
                </StatLabel>
                <Flex>
                  <StatNumber fontSize="md" color={textColor}>
                    500
                  </StatNumber>
                  <StatHelpText
                    alignSelf="flex-end"
                    justifySelf="flex-end"
                    m="0px"
                    color="red.500"
                    fontWeight="bold"
                    ps="2px"
                    fontSize="md"
                  >
                    {/*-14%*/}
                  </StatHelpText>
                </Flex>
              </Stat>

              <IconBox as="box" h={"45px"} w={"40px"} bg={iconTeal}>
                <DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />
              </IconBox>
            </Flex>
          </CardBody>
        </Card>
        <Card minH="83px">
          <CardBody>
            <Flex flexDirection="row" align="center" justify="center" w="100%">
              <Stat me="auto">
                <StatLabel
                  fontSize="sm"
                  color="gray.400"
                  fontWeight="bold"
                  pb=".1rem"
                >
                  Avg. Time Per Credit Sale
                </StatLabel>
                <Flex>
                  <StatNumber fontSize="lg" color={textColor} fontWeight="bold">
                    2 months
                  </StatNumber>
                  <StatHelpText
                    alignSelf="flex-end"
                    justifySelf="flex-end"
                    m="0px"
                    color="green.400"
                    fontWeight="bold"
                    ps="3px"
                    fontSize="md"
                  >
                    {/*-14%*/}
                  </StatHelpText>
                </Flex>
              </Stat>
              <IconBox as="box" h={"45px"} w={"45px"} bg={iconTeal}>
                <CartIcon h={"24px"} w={"24px"} color={iconBoxInside} />
              </IconBox>
            </Flex>
          </CardBody>
        </Card>
      </SimpleGrid>

      <Grid
        templateColumns={{ sm: "1fr", lg: "1.5fr 1.5fr" }}
        templateRows={{ sm: "repeat(2, 1fr)", lg: "1fr" }}
        gap="24px"
        mb={{ lg: "26px" }}
      >
        <Card p="28px 10px 16px 0px" mb={{ sm: "26px", lg: "0px" }}>
          <CardHeader mb="20px" pl="22px">
            <Flex direction="column" alignSelf="flex-start">
              <Text fontSize="lg" color={textColor} fontWeight="bold" mb="6px">
                Earnings Overview
              </Text>
              <Text fontSize="md" fontWeight="medium" color="gray.400">
                <Text as="span" color="green.400" fontWeight="bold">
                  (+5%) more
                </Text>{" "}
                in 2021
              </Text>
            </Flex>
          </CardHeader>
          <Box w="100%" h={{ sm: "300px" }} ps="8px">
            <LineChart />
          </Box>
        </Card>

        <Card p="28px 10px 16px 0px" mb={{ sm: "26px", lg: "0px" }}>
          <CardHeader mb="20px" pl="22px">
            <Flex direction="column" alignSelf="flex-start">
              <Text fontSize="lg" color={textColor} fontWeight="bold" mb="6px">
                Buyer Persona (Industry)
              </Text>
              <Text fontSize="md" fontWeight="medium" color="gray.400">
                <Text as="span" color="green.400" fontWeight="bold">
                  (+5%) more
                </Text>{" "}
                in 2021
              </Text>
            </Flex>
          </CardHeader>
          <Box w="100%" h={{ sm: "300px" }} ps="8px">
            <BarChart />
          </Box>
        </Card>

        {/*}
        <Card p="16px">
          <CardBody>
            <Flex direction="column" w="100%">
              <Flex
                direction="column"
                mt="24px"
                mb="36px"
                alignSelf="flex-start"
              >
                <Text
                  fontSize="lg"
                  color={textColor}
                  fontWeight="bold"
                  mb="6px"
                >
                  Active Users
                </Text>
                <Text fontSize="md" fontWeight="medium" color="gray.400">
                  <Text as="span" color="green.400" fontWeight="bold">
                    (+23%)
                  </Text>{" "}
                  than last week
                </Text>
              </Flex>
            </Flex>
          </CardBody>
        </Card>
  */}
      </Grid>

      <Card px="12px" mb={{ lg: "26px" }} pb="0px">
        <CardHeader p="12px 5px" mb="12px">
          <Flex direction="column">
            <Text fontSize="lg" color={textColor} fontWeight="bold" px="5px">
              My Projects
            </Text>
          </Flex>
        </CardHeader>
        <CardBody px="5px" pb="20px">
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
            gap="36px"
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
              borderColor="gray.300"
              minHeight={{ sm: "200px", md: "100%" }}
              borderRadius="30px"
              bgColor="gray.700"
              Shadow="0px 3.5px 35px rgba(0, 0, 0, 0.5)"
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

      {/*<Card p="16px" overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardHeader p="12px 0px 28px 0px">
            <Flex direction="column">
              <Text
                fontSize="lg"
                color={textColor}
                fontWeight="bold"
                pb=".5rem"
              >
                My Projects
              </Text>
              <Flex align="center">
                <Icon
                  as={IoCheckmarkDoneCircleSharp}
                  color="teal.300"
                  w={4}
                  h={4}
                  pe="3px"
                />
                <Text fontSize="sm" color="gray.400" fontWeight="normal">
                  <Text fontWeight="bold" as="span">
                    30 done
                  </Text>{" "}
                  this month.
                </Text>
              </Flex>
            </Flex>
          </CardHeader>
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" ps="0px">
                <Th ps="0px" color="gray.400">
                  Companies
                </Th>
                <Th color="gray.400">Members</Th>
                <Th color="gray.400">Budget</Th>
                <Th color="gray.400">Completion</Th>
              </Tr>
            </Thead>
            <Tbody>
              {dashboardTableData.map((row) => {
                return (
                  <DashboardTableRow
                    name={row.name}
                    logo={row.logo}
                    members={row.members}
                    budget={row.budget}
                    progression={row.progression}
                  />
                );
              })}
            </Tbody>
          </Table>
        </Card>
        */}

      {/*<Card maxH="100%">
        <CardHeader p="22px 0px 35px 14px">
          <Flex direction="column">
            <Text fontSize="lg" color={textColor} fontWeight="bold" pb=".5rem">
              Orders overview
            </Text>
            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              <Text fontWeight="bold" as="span" color="teal.300">
                +30%
              </Text>{" "}
              this month.
            </Text>
          </Flex>
        </CardHeader>
        <CardBody ps="20px" pe="0px" mb="31px" position="relative">
          <Flex direction="column">
            {timelineData.map((row, index, arr) => {
              return (
                <TimelineRow
                  logo={row.logo}
                  title={row.title}
                  date={row.date}
                  color={row.color}
                  index={index}
                  arrLength={arr.length}
                />
              );
            })}
          </Flex>
        </CardBody>
          </Card>*/}
    </Flex>
  );
}
