import React from 'react'
import { FlipWords } from './ui/flip-words'

const ChangingText = () => {
    const words = ["better", "cute", "beautiful", "modern"];
  return (
    <div className="h-[30rem] flex justify-center items-center px-4">
    <div className="text-5xl mx-auto font-normal text-neutral-100 dark:text-neutral-100">
      Build
      <FlipWords words={words} /> <br />
      websites with Aceternity UI
    </div>
  </div>
  )
}

export default ChangingText