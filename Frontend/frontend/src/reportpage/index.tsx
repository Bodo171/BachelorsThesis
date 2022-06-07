import {useParams, Link} from 'react-router-dom'
import {useContext, useEffect} from "react";
import StyledButton from '../stylecomponents/button.tsx';
import StyledLink from '../stylecomponents/link.tsx';
import Report from "./components/report.tsx";
import {StatementContext} from "../StatementProvider.tsx";

const ReportPage: React.FC = () => {
    const {id}  = useParams();
    const {report, getReport} = useContext(StatementContext);
    useEffect(() => {
        //console.log('setting')
        getReport(id);
    },[id]);
    //console.log("myreport", report);
    return <div className="page">
        {report && <Report data={report}/>}
        <StyledLink to={'/'}> 
            <StyledButton color="info" variant="contained">Home</StyledButton>
        </StyledLink>
    </div>
}

export default ReportPage;
