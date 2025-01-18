import Image from 'next/image'
import React from 'react'

function Test() {
  return (
    <div className='flex items-center justify-center p-2 m-[16px]'>
      <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      <h1 className='text-lg center m-2 px-5'>Test component here in the root layout</h1>
    </div>
  )
}

export default Test
