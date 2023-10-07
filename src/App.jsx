import Componente01 from "./Componentes/Componente01";
import Componente02 from "./Componentes/Componentes02";
import Componente03 from "./Componentes/Componente03";

function App(){
  const linguagem = "JavaScript"

function clicouBotao(){
  alert("Alerta clicou botão")
}
  return(
    <>
        <h1>OLÁ MUNDO !!!</h1>
        <hr/>  
        <Componente01></Componente01>  
        <hr />
        <Componente02></Componente02>
        <hr />
        <Componente03 LinguagemPai = {linguagem} cliclouPai = {clicouBotao}> </Componente03>
        
    </>
  )
}

export default App;