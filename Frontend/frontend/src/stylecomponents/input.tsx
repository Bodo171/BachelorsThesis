import {Input} from '@mui/material'

const StyledInput = ({value, onChange, placeholder}) =>{
    return <Input 
    inputProps={{onChange}} 
    placeholder={placeholder}
    value={value}
    fullWidth={true}
    />
}

export default StyledInput;