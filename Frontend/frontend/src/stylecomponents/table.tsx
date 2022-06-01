import {Paper, TableContainer, Table, TableBody, TableCell, TableRow, TableHead} from '@mui/material'

export const StyledTableCell = ({children}) => {
    return <TableCell>{children}</TableCell>;
};

export const StyledTableRow = ({children}) => {
    return <TableRow>{children}</TableRow>;
};

export const StyledTableBody = ({children}) => {
    return <TableBody>{children}</TableBody>;
};

export const StyledTableHead = ({children}) => {
    return <TableHead>{children}</TableHead>
};

export const StyledTable = ({children}) => {
    return <TableContainer component={Paper} classes={['customTableContainer']}>
        <Table size="small">{children}</Table>
    </TableContainer>
};
