import React from 'react'
import { Header } from './_Commponent/Header'

const HomeLayout = ({children}) => {
    return (
        <div
            className='h-full '  
        >
            <Header/>
            <main className=''>
                {children}
            </main>
        </div>
    )
}

export default HomeLayout