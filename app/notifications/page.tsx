import React from 'react'
import { Metadata } from 'next'
import PageHeader from '@/components/layoutBlocks/pageHeader/PageHeader'
import { GridItem, Heading, Text, Input } from '@chakra-ui/react'
import GridContainer from '@/components/layoutBlocks/gridContainer/GridContainer'

type Props = {}

const page = (props: Props) => {
  return (
    <>
      <PageHeader>
        <Heading>Favorites - Details</Heading>
      </PageHeader>
      <GridContainer>
        <GridItem colSpan={2}>
          <Text>JK</Text>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <Text>Name</Text>
        <Input
          value={'Value'}
          placeholder='Here is a sample placeholder'
          size='sm'
        />
      </GridContainer>
    </>
  )
}

export default page

export const metadata: Metadata = {
  title: 'Notifications',
};