import {TextField} from "@mui/material"
import {ICustomInput} from "../../../src/Types"

const textFieldStyles = {
    width: {
        xs: '100%',
        sm: '48%',
        md: '32%'
    }
}

const CustomInput = ({
    value,
    children,
    label,
    name,
    onChange,
    type,
    InputProps,
} : ICustomInput) => {
    let isTypeNumber = type === 'number'
    return (
        <TextField
        required
            onChange={(e) => onChange(e,isTypeNumber)}
                value={`${value}` }
            name={name}
            sx={{
            ...textFieldStyles
        }}
        InputProps={InputProps}
            size='small'
            type={type || 'text'}
            label={label}
            select={children ? true : false}
            variant="outlined">
            {children && children}
        </TextField>
    )
}

export default CustomInput
