import React from 'react'
import { Metadata } from 'next'
import PageHeader from '@/components/layoutBlocks/pageHeader/PageHeader'
import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import GridContainer from '@/components/layoutBlocks/gridContainer/GridContainer'

type Props = {}

const page = (props: Props) => {
  return (
    <>
      <PageHeader>
        <Box>
          <Heading>History</Heading>
        </Box>
      </PageHeader>
      <GridContainer>
        <GridItem colSpan={2} className='bg-gray-700 text-white p-4 pt-6 rounded-xl text-center'>
          <Text>Current balance</Text>
          <Heading className='mt-2 mb-7'>$ 1600.45</Heading>
          <Grid templateColumns={'repeat(2, 1fr)'} gap={4}>
            <GridItem colSpan={1} className='bg-gray-600 rounded-lg py-4'>
              <Text>Spendings</Text>
              <Text>$ 201</Text>
            </GridItem>
            <GridItem colSpan={1} className='bg-gray-600 rounded-lg py-4'>
              <Text>Next reset</Text>
              <Text>00:00</Text>
            </GridItem>
          </Grid>
        </GridItem>
      </GridContainer>
    </>
  )
}

export default page

export const metadata: Metadata = {
  title: 'Account',
};