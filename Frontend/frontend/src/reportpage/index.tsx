import {useParams} from 'react-router-dom'
import {useContext, useEffect, useState} from "react";
import Report from "./components/report.tsx";
import {StatementContext} from "../StatementProvider.tsx";

const ReportPage: React.FC = () => {
    const {id}  = useParams();
    const {report, getReport} = useContext(StatementContext);
    useEffect(() => {
        console.log('setting')
        getReport(id);
    },[id]);
    console.log("myreport", report);
    return <div className="page">
        {report && <Report data={report}/>}
    </div>
}

export default ReportPage;
