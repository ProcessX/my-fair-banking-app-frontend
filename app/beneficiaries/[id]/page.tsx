import React from 'react'
import { Metadata } from 'next'
import PageHeader from '@/components/layoutBlocks/pageHeader/PageHeader'
import { GridItem, Heading, Input, Stack, Text, Box, Button } from '@chakra-ui/react'
import GridContainer from '@/components/layoutBlocks/gridContainer/GridContainer'

type Props = {}

const page = (props: Props) => {
  return (
    <>
      <PageHeader>
        <Heading>Beneficiary - Details</Heading>
      </PageHeader>
      <GridContainer>
        <GridItem colSpan={2}>
          <Text>JK</Text>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem colSpan={2}>
          <Stack spacing={6}>
            <Box>
              <Text className='mb-3'>Name</Text>
              <Input placeholder='James T. Kirk' />
            </Box>
            <Box>
              <Text className='mb-3'>IBAN</Text>
              <Input placeholder='BEXX XXXX XXXX XXXX XXXX XXXX' />
            </Box>
            <Box>
              <Text className='mb-3'>Add to favorites</Text>
              <Input placeholder='Favorite' />
            </Box>
          </Stack>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem colSpan={2}>
          <Stack spacing={2}>
            <Button variant={'solid'} colorScheme='teal'>Send payment</Button>
            <Button variant={'outline'} colorScheme='teal'>Ask for payment</Button>
          </Stack>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem colSpan={2}>
          <Button colorScheme='red' className='w-full'>Delete from my list</Button>
        </GridItem>
      </GridContainer>
    </>
  )
}

export default page

export const metadata: Metadata = {
  title: 'ID',
};