import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from "@/components/ui/label"

import { User } from 'lucide-react'
import React from 'react'

export const Login = () => {
    return (
        <div className=' mt-[2rem] w-full'>
            <form action="" className=' mt-[1rem]'>
                <Label className = " text-[1rem]">Email  </Label>
                <div className=' flex items-center mb-[.9rem]  mt-[.8rem] bg-stone-50 rounded-md'>
                    <Button size = "sm" type = "button">
                        <User/>
                    </Button>
                    <Input 
                        placeholder = "Enter email.." 
                        className = " bg-transparent border-none placeholder:text-stone-800 text-stone-900"
                    />
                </div>
        
                <div className=' flex items-center justify-end'>
                    <Button className = "">Submit</Button>
                </div>
            </form>
        </div>
    )
}
