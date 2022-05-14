import {TextField} from "@mui/material"

const textFieldStyles = {
    width: {
        xs: '100%',
        sm: '48%',
        md: '32%'
    }
}

export interface ITextInput {
    type?: string
    value : string | number | string[]
    label : string
    name : string
    handleChangeEvent : (e : any) => void
}

const TextInput = ({value, label, name, handleChangeEvent, type} : ITextInput) => {
    return (<TextField
        onChange={(e) => handleChangeEvent(e)}
        value={value}
        name={name}
        sx={{
        ...textFieldStyles
    }}
        size='small'
        type={type || 'text'}
        label={label}
        variant="outlined"/>)
}

export default TextInput
