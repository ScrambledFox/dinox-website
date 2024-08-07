
"use client";

import { motion } from 'framer-motion'
import Image from 'next/image'

import leavesImage from '/public/images/leaves.png'

export default function LeavesDecoration() {

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      className='absolute top-0 left-0 w-full user-select-none pointer-events-none'
    >
      <Image
        src={leavesImage}
        alt="leaves"
        className='absolute z-0 top-0 left-0 w-full blur-[4px]'
        priority={true}
      />
    </motion.div>
  )

}