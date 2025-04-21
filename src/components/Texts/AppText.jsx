import React from 'react'

const AppText = ({children, className }) => {
    return (
        <p className={`text-gray-600 text-sm font-medium font-[Montserrat] ${className}`}>{children}</p>
    )
}

export default AppText;