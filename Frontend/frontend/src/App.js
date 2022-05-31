import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Homepage from "./homepage/index.tsx";
import ReportPage from "./reportpage/index.tsx";
import {StatementProvider} from "./StatementProvider.tsx";

function App() {
  return <>
    <StatementProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path="/report/:id" element={<ReportPage/>} />
            </Routes>
        </BrowserRouter>
    </StatementProvider>
  </>
}

export default App;
