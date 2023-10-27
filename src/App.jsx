import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/home";
import ListaCarros from "./Pages/ListaCarros";
import Sobre from "./Pages/Sobre";
import { Container, Button, ligthTheme, darkTheme } from "./Estilos/estilos";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import CEP from "./Pages/cep";
function App(){
  const[theme,setTheme] = useState('ligth')
  const mudarTheme = () => {
    setTheme(mudar => mudar ==='ligth' ? 'dark' : 'ligth')
  }
  return(
    <>
      <ThemeProvider theme={theme ==='ligth' ? ligthTheme : darkTheme}>
      <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path='/listacarros' element={<ListaCarros></ListaCarros>}></Route>
          <Route path="/sobre" element={<Sobre></Sobre>}></Route>
          <Route path="/cep" element={<CEP></CEP>}></Route>
        </Routes>
      </BrowserRouter>
      </Container>
      <Button onClick={mudarTheme}>Ola</Button>
      </ThemeProvider>

    </>
  )
}
  


export default App;