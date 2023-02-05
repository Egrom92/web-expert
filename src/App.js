import './style/entry.scss'
import 'react-loading-skeleton/dist/skeleton.css'
import {Users, User} from './pages'
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Users/>} />
        <Route exact path="/user/:userId" element={<User/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
