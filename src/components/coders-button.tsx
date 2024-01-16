export type CodersButtonProps = {
    label: string
    color: string
}


const CodersButton = ({label}: CodersButtonProps) => {
    return (
        <button>{label}</button>
    )
}

export default CodersButton