
const ReportRow: React.FC<{tag: string, probability: number}> = ({tag, probability}) => {
    return <tr>
        <td>{tag}</td>
        <td>{probability}</td>
    </tr>
}

export default ReportRow;
