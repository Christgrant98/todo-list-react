// 1. import `ChakraProvider` component
import Tareas from './Task';
import AboutUs from './AboutUs';
import Home from './Home';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/tareas" element={<Tareas/>}/>
      </Routes>
    </>
  )
}

export default App;