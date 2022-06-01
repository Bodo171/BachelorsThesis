import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Homepage from "./homepage/index.tsx";
import ReportPage from "./reportpage/index.tsx";
import {StatementProvider} from "./StatementProvider.tsx";

function App() {
  return <>
    <h1 className="title">Statement label predictor</h1>
    <StatementProvider>
      <div className="mainLayout">
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Homepage/>} />
                  <Route path="/report/:id" element={<ReportPage/>} />
              </Routes>
          </BrowserRouter>
      </div>
    </StatementProvider>
  </>
}

export default App;
