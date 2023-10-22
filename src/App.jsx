// 1. import `ChakraProvider` component
import Tareas from './Tareas';
import SobreNosotros from './SobreNosotros';
import Home from './Home';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<SobreNosotros/>}/>
        <Route path="/tareas" element={<Tareas/>}/>
      </Routes>
    </>
  )
}

export default App;