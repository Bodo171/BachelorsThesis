import {useContext, useState} from 'react';
import TagList from './components/taglist.tsx';
import {StatementForm} from "./components/statementform.tsx";
import {StatementContext} from "../StatementProvider.tsx";
import {LinearProgress} from '@mui/material'
import StyledButton from '../stylecomponents/button.tsx';
import StyledError from '../stylecomponents/error.tsx';
import StyledLink from '../stylecomponents/link.tsx';

const Homepage: React.FC = () => {
    const {tags, fetchStatement, getTags, inputStatement, loading, inputUrl, error, statementId} = useContext(StatementContext);
    console.log(inputUrl, inputStatement, error);
    return <div className="page">
        {error && <StyledError>{error}</StyledError>}
        {loading && <LinearProgress />}
        <StatementForm
            onSubmit={(statement) => {getTags(statement)}}
            onFetch={((url)=>{fetchStatement(url)})}
            initialStatement={inputStatement}
            initialUrl={inputUrl}
        />
        <TagList tags={tags} />
        {statementId &&
            <StyledLink to={`report/${statementId}`}> 
                <StyledButton>View detailed report</StyledButton>
            </StyledLink>
        }
    </div>
}

export default Homepage;
