import { Routes, Route } from 'react-router-dom';
import Navigation from './routers/Navigation/navigation.component';
import Home from "./routers/Home/home.component";
import Authentication from './routers/authentication/authentication.component';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='auth' element={<Authentication/>} />
      </Route>
    </Routes>
  );
}

export default App;
