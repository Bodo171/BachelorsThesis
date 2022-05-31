import {useState} from "react";


interface StatementFormProps{
    onFetch?: (url: string) => void;
    onSubmit?: (statement: string) => void;
    initialStatement?: string;
    initialUrl?: string;
}
export const StatementForm: React.FC<StatementFormProps> = ({onFetch, onSubmit, initialStatement, initialUrl}) => {
    const [statement, setStatement] = useState(initialStatement || '');
    const [url, setUrl] = useState(initialUrl || '');
    return <>
        <input placeholder="url" onChange={(e) => {setUrl(e.target.value)}}/>
        <br/> <br/>
        <button onClick={() => {onFetch(statement)}}>
            Load from url
        </button>
        <br/> <br/>
        <textarea placeholder="statement"
                  rows={10}
                  cols={50}
                  onChange={(e) => {setStatement(e.target.value)}}
        />
        <br/> <br/>
        <button onClick={() => {onSubmit(statement)}}>
            Submit
        </button>
        <br/> <br/>
    </>;
}
