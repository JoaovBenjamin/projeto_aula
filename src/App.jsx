import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/home";
import ListaCarros from "./Pages/ListaCarros";
import Sobre from "./Pages/Sobre";
function App(){
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path='/listacarros' element={<ListaCarros></ListaCarros>}></Route>
          <Route path="/sobre" element={<Sobre></Sobre>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
  


export default App;