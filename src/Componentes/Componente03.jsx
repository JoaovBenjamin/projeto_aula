function Componente03(props){
    return(
        <>
            <h3>Componente 03</h3>

            <p>Informação do elemento Pai: {props.LinguagemPai}</p>
             <button onClick={props.cliclouPai}>Clique Aqui</button>
        </>
    )
}

export default Componente03