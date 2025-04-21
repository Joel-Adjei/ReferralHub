import React from 'react'
import { Link } from 'react-router'
import ColoredText from "../Texts/ColoredText";

const OutlineButton = ({text , onClick, className}) => {

    return (
        <button onClick={onClick}
                className={`w-full cursor-pointer 
                hover:bg-blue-300 hover:text-white text-blue-600 py-2 border-2 border-blue-600 rounded-lg 
                ${className}`}>
            {text}
        </button>
    )
}

export default OutlineButton;