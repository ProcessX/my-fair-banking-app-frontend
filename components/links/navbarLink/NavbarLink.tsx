import React from 'react'
import Link from 'next/link'


type Props = {
  url: string
}

const NavbarLink = (props: Props) => {
  return (
    <Link href={props.url} className='h-10 w-10 bg-gray-300 rounded-full'></Link>
  )
}

export default NavbarLink