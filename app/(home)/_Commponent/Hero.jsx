import { Layers } from 'lucide-react'

export const Hero = () => {
    return (
        <div
            className=' h-[30vh] flex flex-col items-center justify-center max-w-5xl'
        >
            <div className=' flex items-center justify-center w-[300px] h-[300px] 
            sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]'>
                <Layers className=' h-[60%] w-[60%]' />
            </div>
        </div>
    )
}
