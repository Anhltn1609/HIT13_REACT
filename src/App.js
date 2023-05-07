import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
// import About from './About';
// import Nav from './Nav';
// import Content from './Content';
import SignIn from './component/SignIn';
import Login from './component/Login';

function App() {
  return (
    <div>
    
      {/* <Routes>
      <Route path='/' element={<Nav></Nav>}>
                <Route path='/home' element={<Home></Home>}></Route>
                <Route path='/about' element={<About></About>}></Route>
                <Route path='/content' element={<Content></Content>}></Route>
        <Route path='*' element={<div>Not found 404</div>}></Route>

      </Route>
      </Routes> */}

      <Routes>
        <Route path='/' element={<SignIn></SignIn>}>
        {/* <Route path='/abc' element={<Home></Home>}></Route> */}
        <Route path='/abc' element={<Login></Login>}></Route>
        </Route>
        <Route path='*' element={<div>Not found 404</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
