import { Box, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

type Props = {
  label: string,
  url: string,
}

const MainActionLink = (props: Props) => {
  return (
    <Box as={Link} href={props.url} className='bg-gray-100 rounded-lg h-[160px] block p-4 pb-5'>
      <Text className='max-w-[96px]'>{props.label}</Text>
    </Box>
  )
}

export default MainActionLink