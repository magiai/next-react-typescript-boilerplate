import React from "react";
import './forms.module.css';

interface TextareaProps {
    labelFor: string,
    id: string,
    className?: string,
    placeholderText?: React.ReactNode
}

export const Textarea = ({
    labelFor,
    id,
    className,
    placeholderText
}: TextareaProps) => {
    return (
        <>
            <label htmlFor = { labelFor }>Textarea</label>
            <textarea className = { className } id = { id }>{ placeholderText }</textarea>
        </>
    )
}