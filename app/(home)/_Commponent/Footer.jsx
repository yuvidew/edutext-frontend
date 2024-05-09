import { Button } from '@/components/ui/button'
import { Boxes } from 'lucide-react'
import React from 'react'

export const Footer = () => {
    return (
        <footer className=' mt-[1.5rem] h-[5rem] flex items-center justify-between'>
            <div className=' h-full lg:flex md:hidden hidden items-center gap-x-2'>
                <Boxes className='h-[3rem] w-[2.3rem] ' />
                <h1 className=' font-medium text-[1.3rem] lg:block md:hidden hidden'>EduText</h1>
            </div>
            <Button variant = "secondary" >Privacy Policy</Button>
            <Button variant = "secondary" >Term & Condition</Button>
        </footer>
    )
}
