import React, { useCallback, useContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import {fetchUrl, getReport as getReportApi, solveStatement} from "./service/api.ts";

interface ProviderState {
    inputStatement?: string;
    inputUrl?: string;
    statementId?: number;
    loading: boolean;
    tags: string[];
    error?: string;
    report?: any;
    fetchStatement?: (url: string) => Promise<any>
    getTags?: (statement: string) => Promise<any>;
    getReport?: (statement: string) => Promise<any>;
}
interface ProviderProps {
    children: PropTypes.ReactNodeLike,
}
interface ActionProps {
    type: string,
    payload?: any,
}
const SET_STATEMENT = 'SET_STATEMENT';
const SET_URL = 'SET_URL';
const FETCH_FAILED = 'FETCH_FAILED';
const GET_PREDICTIONS = 'GET_PREDICTIONS';
const SET_PREDICTION_DATA = 'SET_PREDICTION_DATA';
const FETCHED_REPORT = 'FETCHED_REPORT';

const reducer: (state: ProviderState, action: ActionProps) => ProviderState =
    (state, {type, payload}) => {
    switch(type){
        case SET_STATEMENT:
            return {...state, inputStatement: payload.statement, loading: false, error: null};
        case SET_URL:
            return {...state, inputUrl: payload.url, loading: true};
        case GET_PREDICTIONS:
            return {...state, loading: true};
        case FETCH_FAILED:
            return {...state, error: payload.error, loading: false};
        case SET_PREDICTION_DATA:
            return {...state, statementId: payload.statementId, tags: payload.tags, loading: false, error: null};
        case FETCHED_REPORT:
            return {...state, report: payload.report, loading: false, error: null};
            default:
        return state;
    }

}
const initialState = {
    inputStatement: null,
    inputUrl: null,
    loading: false,
    tags: [],
    report: null,
}
export const StatementContext = React.createContext<ProviderState>(initialState);

export const StatementProvider: React.FC<ProviderProps> = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { inputStatement, inputUrl, loading, tags, report, statementId, error } = state;
    const value = { inputStatement, inputUrl, loading, tags, report, fetchStatement, getTags, getReport, statementId, error};
    return (
        <StatementContext.Provider value={value}>
            {children}
        </StatementContext.Provider>
    );
    async function fetchStatement(url: string){
        try {
            dispatch({type: SET_URL, payload: {url}});
            const {data} = await fetchUrl(url);
            const {statement} = data;
            console.log("fetching statement from", url);
            dispatch({type: SET_STATEMENT, payload: {statement}});
        } catch(e){
            dispatch({type: FETCH_FAILED, payload: {error: 'Statement fetch failed'}})
        }
    }
    async function getTags(statement: string){
        try {
            dispatch({type: SET_STATEMENT, payload: {statement}});
            dispatch({type: GET_PREDICTIONS, payload: {statement}});
            const {data} = await solveStatement(statement);
            const {topPredictions, statementId} = data;
            //console.log(topPredictions, statement)
            dispatch({type: SET_PREDICTION_DATA, payload: {tags: topPredictions, statementId: statementId}});
        } catch(e){
            dispatch({type: FETCH_FAILED, payload: {error: 'Prediction failed'}})
        }
    }
    async function getReport(id: number){
        try{
            dispatch({type: GET_PREDICTIONS});
            const {data} = await getReportApi(id);
            //console.log('data', data)
            dispatch({type: FETCHED_REPORT, payload: {report: data}})
        }catch(e){
            dispatch({type: FETCH_FAILED, payload: {error: 'Prediction failed'}})
        }
    }
};
