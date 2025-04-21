import React from 'react'
import { Link } from 'react-router'

const SolidButton = ({onClick, text, className}) => {

    return (
        <button
            onClick={onClick}
            className={`w-full solid-button cursor-pointer text-white  py-2 border-2 rounded-lg ${className}`}>
            {text}
        </button>
    )
}

export default SolidButton