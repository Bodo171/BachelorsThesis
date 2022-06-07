import {useState, useEffect} from "react";
import StyledButton from "../../stylecomponents/button.tsx";
import StyledInput from "../../stylecomponents/input.tsx";

interface StatementFormProps{
    onFetch?: (url: string) => void;
    onSubmit?: (statement: string) => void;
    initialStatement?: string;
    initialUrl?: string; 
}
export const StatementForm: React.FC<StatementFormProps> = ({onFetch, onSubmit, initialStatement, initialUrl}) => {
    //const {inputUrl, inputStatement} = useContext(StatementContext);
    const [statement, setStatement] = useState(initialStatement || '');
    const [url, setUrl] = useState(initialUrl || '');
    useEffect(() =>{
            setStatement(initialStatement)
        }, [initialStatement]
    );
    return <>
        <StyledInput
            value={url}
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
                  value={statement}
                  onChange={(e) => {setStatement(e.target.value)}}
        />
        <br/> <br/>
        <StyledButton onClick={() => {onSubmit(statement)}}>
            Submit
        </StyledButton>
        <br/> <br/>
    </>;
}
