import ReportRow from './reportrow.tsx'
import { StyledTable, StyledTableBody, StyledTableCell, StyledTableHead, StyledTableRow } from '../../stylecomponents/table.tsx';
const Report: React.FC<any> = ({data}) => {
    // console.log(data);
    return <StyledTable>
        <StyledTableHead>
            <StyledTableRow>
                <StyledTableCell>Tag</StyledTableCell>
                <StyledTableCell>Probability</StyledTableCell>
            </StyledTableRow>
        </StyledTableHead>
        <StyledTableBody>
            {Object.entries(data).map((entry) => <ReportRow tag={entry[0]} probability={entry[1]}/>)}
        </StyledTableBody>
    </StyledTable>;
}

export default Report;
