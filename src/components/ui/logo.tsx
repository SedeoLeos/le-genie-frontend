'use client'
import React from 'react'
type LogoProps = {
    defaultPlatform?: 'dark' | 'light'
}

const logoVariants = {
    div: {
        dark: 'text-white dark:text-gray-900  bg-gray-900 dark:bg-white',
        light: 'dark:text-white text-gray-90 dark:bg-gray-900 bg-white',
    },
    span: {
        dark: 'text-gray-900 dark:text-white',
        light: 'dark:text-gray-900 text-white',
    },
}

const Logo = ({ defaultPlatform = 'dark' }: LogoProps) => {
    return (
        <div className="flex items-end space-x-2">
            <div className={`w-12 h-10 rounded-sm flex items-center justify-center  font-bold text-3xl ${logoVariants.div[defaultPlatform]}`} >
                Le
            </div>
            <span className={` font-semibold  ${logoVariants.span[defaultPlatform]}`}>Genie.</span>
        </div>
    )
}

export default Logo