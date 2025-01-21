import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './Components/Users';
import Createuser from './Components/Createuser';
import Updateuser from './Components/Updateuser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Users />}></Route>
          <Route path='/create' element={<Createuser />}></Route>
          <Route path='/update/:id' element={<Updateuser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
