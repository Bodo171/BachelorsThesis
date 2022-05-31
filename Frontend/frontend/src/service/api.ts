import axios from 'axios'

const baseUrl = 'localhost:5000'
const url = `http://${baseUrl}/`;

export const fetchUrl = (statementUrl: string) =>{
    return axios.post(url + 'url', {url: statementUrl});
}

export const solveStatement: (statement: string) => Promise<{topPredictions: string[], statementId: number}> =
    (statement) => {
    console.log({statement})
    return axios.post(url + 'problem', {statement});
}

export const getReport: (statementId: string) => Promise<any> = statementId => {
    return axios.post(url + 'report', {id: statementId});
}
