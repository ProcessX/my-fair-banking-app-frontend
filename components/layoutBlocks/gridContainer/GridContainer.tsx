import React from 'react'
import { Grid } from '@chakra-ui/react'

type Props = {}

const GridContainer = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Grid className='max-w-[100vw] px-4 py-5' templateColumns={'repeat(2, 1fr)'} gap={4}>
      {children}
    </Grid>
  )
}

export default GridContainer