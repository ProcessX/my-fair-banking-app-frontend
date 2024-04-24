import React from 'react'
import { Metadata } from 'next'
import PageHeader from '@/components/layoutBlocks/pageHeader/PageHeader'
import { GridItem, Heading, Text } from '@chakra-ui/react'
import GridContainer from '@/components/layoutBlocks/gridContainer/GridContainer'

type Props = {}

const page = (props: Props) => {
  return (
    <>
      <PageHeader>
        <Heading>Beneficiaries</Heading>
      </PageHeader>
      <GridContainer>
        <GridItem colSpan={2}>
          <Text>5 person(s)</Text>
        </GridItem>
      </GridContainer>
    </>
  )
}

export default page

export const metadata: Metadata = {
  title: 'Beneficiaries',
};