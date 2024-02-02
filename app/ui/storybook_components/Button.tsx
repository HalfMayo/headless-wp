import {ForwardedRef, forwardRef, memo }from 'react'

interface ButtonProps {
    className?: string,
    color?: "primary" | "secondary" | "tertiary",
    rank?: "main" | "default"
    label: string,
    onClick?: () => void,
    onTransitionEnd?: () => void,
    disabled?: boolean,
    type?: "button" | "reset" | "submit",
}

const Button = forwardRef(function Button( props: ButtonProps, ref: ForwardedRef<HTMLButtonElement> ) {

    const{className, color = "primary", rank = "default", label, onClick, onTransitionEnd, disabled = false, type} = props;

    return(
        <button ref={ref} type={type} className={`${className} py-2 px-3 w-fit text-sm font-medium border rounded-full
                            ${disabled
                                ? 'text-disabled bg-transparent border-disabled'
                                : rank === "main"
                                    ? `${color === "primary"
                                                        ? "text-white bg-primary border-primary"
                                                        : color === "secondary"
                                                            ? "bg-secondary-container border-secondary-container text-on-secondary-container"
                                                            : "bg-tertiary-container border-tertiary-container text-on-tertiary-container"}`
                                    : `bg-transparent ${color === "primary"
                                                            ? "text-primary border-primary"
                                                            : color === "secondary"
                                                                ? "text-secondary border-secondary"
                                                                : "text-tertiary border-tertiary"}`
                            }`} onClick={onClick} onTransitionEnd={onTransitionEnd} disabled={disabled} value={label}>
            {label}
        </button>
    )
})

export default memo(Button)