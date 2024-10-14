import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className='w-11/12 mx-auto flex justify-between pt-24 pb-5'>
        <Link href="mailto:aflahahamed777@gmail.com" className='text-sm text-myGrey opacity-[0.7] ml-3'>aflahahamed777@gmail.com</Link>
        <Link href="https://www.instagram.com/___.aflu/" className='text-sm text-myGrey opacity-[0.7] ml-3'>Instagram</Link>
    </footer>
  )
}

export default Footer