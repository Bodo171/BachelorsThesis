import {Alert} from '@mui/material'

const StyledError = ({children}) => {
    console.log("alert");
    return <Alert severity="error">{children}</Alert>
}

export default StyledError;