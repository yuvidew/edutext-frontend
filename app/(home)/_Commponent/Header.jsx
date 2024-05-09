import ModeToggle from '@/components/ui/ModeToggle'
import { Boxes } from 'lucide-react'
import React from 'react'
import { LoginBtn } from './LoginBtn'

export const Header = () => {
    return (
        <header>
            <main className=' container h-[5rem] flex items-center justify-between'>
                <div className='flex h-full items-center gap-x-2'>
                    <Boxes className='h-[3rem] w-[2.3rem] ' />
                    <h1 className=' font-medium text-[1.3rem] lg:block md:hidden hidden'>EduText</h1>
                </div>
                <div className=' flex h-full items-center justify-end gap-x-4'>
                    <LoginBtn/>
                    <ModeToggle/>
                </div>
            </main>
        </header>
    )
}
