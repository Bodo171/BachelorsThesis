import { StyledTableCell, StyledTableRow } from '../../stylecomponents/table.tsx';

const ReportRow: React.FC<{tag: string, probability: number}> = ({tag, probability}) => {
    return <StyledTableRow key={tag}>
        <StyledTableCell>{tag}</StyledTableCell>
        <StyledTableCell>{probability}</StyledTableCell>
    </StyledTableRow>
}

export default ReportRow;
