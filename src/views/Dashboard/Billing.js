// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Spacer,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
// Assets
import BackgroundCard1 from "assets/img/BackgroundCard1.png";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import IconBox from "components/Icons/IconBox";
import { MastercardIcon, VisaIcon } from "components/Icons/Icons";
import BillingRow from "components/Tables/BillingRow";
import InvoicesRow from "components/Tables/InvoicesRow";
import TransactionRow from "components/Tables/TransactionRow";
import { Separator } from "components/Separator/Separator";
import React from "react";
import {
  FaPaypal,
  FaPencilAlt,
  FaRegCalendarAlt,
  FaWallet
} from "react-icons/fa";
import { RiMastercardFill } from "react-icons/ri";
import {
  billingData,
  invoicesData,
  newestTransactions,
  olderTransactions
} from "variables/general";

function Billing() {
  // Chakra color mode
  const iconTeal = useColorModeValue("teal.300", "teal.300");
  const textColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("#dee2e6", "gray.500");
  const bgButton = useColorModeValue(
    "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
    "gray.800"
  );

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Grid templateColumns={{ sm: "1fr", lg: "repeat(1, 1fr)" }}>
        <Card my="10px" ms={{ lg: "2px" }}>
          <CardHeader mb="12px" display={{ sm: "flex", lg: "none" }}>
            <Flex direction="column" w="100%">
              <Flex
                direction={{ sm: "row", lg: "row" }}
                justify={{ sm: "space-between", lg: "space-between" }}
                w="100%"
                my={{ md: "12px" }}
              >
                <Text
                  color={textColor}
                  fontSize={{ sm: "lg", md: "xl", lg: "lg" }}
                  fontWeight="bold"
                >
                  Your Transactions
                </Text>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody>
            <Flex direction="column" w="100%">
              {newestTransactions.map((row) => {
                return (
                  <TransactionRow
                    name={row.name}
                    logo={row.logo}
                    date={row.date}
                    price={row.price}
                  />
                );
              })}

              {olderTransactions.map((row) => {
                return (
                  <TransactionRow
                    name={row.name}
                    logo={row.logo}
                    date={row.date}
                    price={row.price}
                  />
                );
              })}
            </Flex>
          </CardBody>
        </Card>
      </Grid>
    </Flex>
  );
}

export default Billing;
