import { Routes, Route } from 'react-router-dom';
import Navigation from './routers/Navigation/navigation.component';
import Home from "./routers/Home/home.component";
import SignIn from './routers/Sign-in/sign-in.component';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
