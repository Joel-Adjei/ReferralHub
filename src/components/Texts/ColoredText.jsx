import React from 'react'

const ColoredText = ({children, className }) => {
    return (
        <p className={`text-blue-600 ${className}`}>{children}</p>
    )
}

export default ColoredText;