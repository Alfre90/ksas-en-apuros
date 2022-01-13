import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Main from './components/Main';

function App() {
  return (
    <div className="center w85">
      <div className="ph3 pv1 background-gray">
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route
            exact
            path="/main"
            element={<Main/>}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
