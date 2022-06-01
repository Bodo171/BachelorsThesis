import {useState, useContext} from "react";
import { StatementContext } from "../../StatementProvider.tsx";
import StyledButton from "../../stylecomponents/button.tsx";

interface StatementFormProps{
    onFetch?: (url: string) => void;
    onSubmit?: (statement: string) => void;
}
export const StatementForm: React.FC<StatementFormProps> = ({onFetch, onSubmit, initialStatement, initialUrl}) => {
    const {inputUrl, inputStatement} = useContext(StatementContext)
    const [statement, setStatement] = useState(inputUrl || '');
    const [url, setUrl] = useState(inputStatement || '');
    return <>
        <input
            value={inputUrl}
            placeholder="url" 
            onChange={(e) => {setUrl(e.target.value)}}
        />
        <br/> <br/>
        <StyledButton onClick={() => {onFetch(url)}}>
            Load from url
        </StyledButton>
        <br/> <br/>
        <textarea placeholder="statement"
                  rows={10}
                  cols={50}
                  value={inputStatement}
                  onChange={(e) => {setStatement(e.target.value)}}
        />
        <br/> <br/>
        <StyledButton onClick={() => {onSubmit(statement)}}>
            Submit
        </StyledButton>
        <br/> <br/>
    </>;
}
