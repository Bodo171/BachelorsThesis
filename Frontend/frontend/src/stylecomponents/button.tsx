import {Button} from '@mui/material';

const StyledButton = ({onClick, children}) => {
    return  <>
        <Button onClick={onClick} color="info" variant="contained">
            {children}
        </Button>
    </>
}

export default StyledButton;