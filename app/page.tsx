import Image from "next/image";
import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import GridContainer from "@/components/layoutBlocks/gridContainer/GridContainer";
import MainActionLink from "@/components/links/mainActionLink/MainActionLink";
import PageHeader from "@/components/layoutBlocks/pageHeader/PageHeader";

export default function Home() {
  return (
    <>
      <PageHeader>
        <Box>
          <Text>Hi, Michael Burnham</Text>
          <Text>Welcome back</Text>
        </Box>
      </PageHeader>
      <GridContainer>
        <GridItem w={"100%"} colSpan={1}>
          <Heading>$ 1600.45</Heading>
          <Text size={"md"}>Next reset in 5 hours</Text>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem colSpan={1}>
          <MainActionLink label="Pay with QR Code" url="/" />
        </GridItem>
        <GridItem colSpan={1}>
          <MainActionLink label="Pay with transfer" url="/" />
        </GridItem>
        <GridItem colSpan={1}>
          <MainActionLink label="Ask for a payment" url="/" />
        </GridItem>
        <GridItem colSpan={1}>
          <MainActionLink label="See your history" url="/" />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem>
          <Text>Your favorites</Text>
        </GridItem>
      </GridContainer>
    </>
  );
}
