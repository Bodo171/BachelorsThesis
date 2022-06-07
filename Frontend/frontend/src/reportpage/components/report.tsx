import {useState} from 'react';
import ReportRow from './reportrow.tsx'
import { StyledTable, StyledTableBody, StyledTableCell, StyledTableHead, StyledTableRow } from '../../stylecomponents/table.tsx';
import StyledButton from '../../stylecomponents/button.tsx';

const Report: React.FC<any> = ({data}) => {
    // console.log(data);
    const [page, setPage] = useState(0);
    const rows = Object.entries(data);
    const pageSize = 5;

    return <div>
            <StyledTable>
            <StyledTableHead>
                <StyledTableRow>
                    <StyledTableCell>Tag</StyledTableCell>
                    <StyledTableCell>Probability</StyledTableCell>
                </StyledTableRow>
            </StyledTableHead>
            <StyledTableBody>
                {rows.slice(page*pageSize, (page+1)*pageSize).map((entry) => <ReportRow tag={entry[0]} probability={entry[1]}/>)}
            </StyledTableBody>
        </StyledTable>
        <div className="paginationContainer">
            {page > 0 && <StyledButton onClick={() =>{setPage(page-1)}}>Previous page</StyledButton>}
            {(page+1)*pageSize<rows.length && <StyledButton onClick={() =>{setPage(page+1)}}>Next page</StyledButton>}
        </div>
    </div>;
}

export default Report;
