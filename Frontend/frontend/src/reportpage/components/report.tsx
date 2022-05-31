import ReportRow from './reportrow.tsx'

const Report: React.FC<any> = ({data}) => {
    console.log(data);
    return <>
        {Object.entries(data).map((entry) => <ReportRow tag={entry[0]} probability={entry[1]}/>)}
    </>;
}

export default Report;
