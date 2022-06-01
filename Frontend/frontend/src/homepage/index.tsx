import {useContext, useState} from 'react';
import {Link} from 'react-router-dom'
import TagList from './components/taglist.tsx';
import {StatementForm} from "./components/statementform.tsx";
import {StatementContext} from "../StatementProvider.tsx";
import StyledButton from '../stylecomponents/button.tsx';

const Homepage: React.FC = () => {
    const {tags, fetchStatement, getTags, inputStatement, inputUrl, error, statementId} = useContext(StatementContext);
    //console.log(inputUrl, inputStatement);
    return <div className="page">
        <StatementForm
            onSubmit={(statement) => {getTags(statement)}}
            onFetch={((url)=>{fetchStatement(url)})}
        />
        <TagList tags={tags} />
        {statementId &&
            <Link to={`report/${statementId}`}> 
                <StyledButton>View detailed report</StyledButton>
            </Link>
        }
    </div>
}

export default Homepage;
