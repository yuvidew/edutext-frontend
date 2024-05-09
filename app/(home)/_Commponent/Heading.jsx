import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import React from 'react'

export const Heading = () => {
  return (
    <>
    <section className=" h-[70%] flex items-center justify-center flex-col text-center m-auto max-w-3xl space-y-4">
      <h1 className=" text-2xl sm:text-5xl md:text-6xl font-bold">
        Crafting Knowledge with eduText: Your Ultimate Text Editing Companion
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
          EduText is the Connected workspace where 
          <br />
          better, faster work happens,
      </h3>
      <Button>Enter to EduText <ArrowRight className=' h-5 w-5 ml-2' /></Button>
    </section>
    </>
  )
}
