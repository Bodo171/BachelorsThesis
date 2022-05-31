import {useContext, useState} from 'react';
import TagList from './components/taglist.tsx';
import {StatementForm} from "./components/statementform.tsx";
import {StatementContext} from "../StatementProvider.tsx";

const Homepage: React.FC = () => {
    const {tags, fetchStatement, getTags, inputStatement, inputUrl, error} = useContext(StatementContext);
    console.log(tags, error);
    return <div className="page">
        <StatementForm
            onSubmit={(statement) => {getTags(statement)}}
            onFetch={((url)=>{fetchStatement(url)})}
            initialStatement={inputStatement}
            initialUrl={inputUrl}
        />
        <TagList tags={tags} />
    </div>
}

export default Homepage;
