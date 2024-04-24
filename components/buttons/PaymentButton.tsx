import Link from 'next/link'
import React from 'react'

type Props = {}

const PaymentButton = (props: Props) => {
  return (
    <Link href={'/'} className='h-14 w-14 bg-gray-500 rounded-full'></Link>
  )
}

export default PaymentButton