import { Flex } from '@chakra-ui/react';
import React from 'react'

type Props = {}

const PageHeader = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Flex className='px-4 justify-between items-center h-[88px]'>
      {children}
    </Flex>
  )
}

export default PageHeader