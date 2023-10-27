function Menu(){
    const menu = {
        background: 'red',
        display:'flex',
        justifyContent:'center'
    }
    const link= {
        display: 'inlineBlock',
        textDecoration: 'none',
        padding: '20px',
        color: "#fff",
        fontSize: "15px"
    }
    return(
        <>
            <nav style ={menu}>
                <ul style={{display:"flex", listStyleType:"none"}}>
                    <li><a href="/" style={link}>Home</a></li>
                    <li><a href="/listacarros" style={link}>Lista Carro</a></li>
                    <li><a href="/sobre" style={link}>Sobre</a></li>
                    <li><a href="/cep" style={link}>CEP</a></li>
                </ul>
            </nav>
        
        </>
    )
}

export default Menu