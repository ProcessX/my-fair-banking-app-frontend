import PaymentButton from '@/components/buttons/PaymentButton'
import NavbarLink from '@/components/links/navbarLink/NavbarLink'
import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <Box className='fixed bottom-0 left-0 w-[100vw] max-w-[100vw] bg-white border-t-2 border-gray-100 py-2 px-6'>
      <Flex className='justify-between items-center'>
        <NavbarLink url='/' />
        <NavbarLink url='/account' />
        <PaymentButton />
        <NavbarLink url='/beneficiaries' />
        <NavbarLink url='/notifications' />
      </Flex>
    </Box>
  )
}

export default Navbar