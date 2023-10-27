import { TitlePage } from "../Estilos/estilos"
import Menu from "./Menu"


function CEP(){
    return(
        <>
            <Menu></Menu>
            <TitlePage>CEP</TitlePage>
            <template>
                <form action="">
                    <label htmlFor="CEP" placeholder="CEP">CEP: </label>
                    <input type="text" />

                    <label htmlFor="Rua" placeholder="Rua">Rua: </label>
                    <input type="text" />

                    <label htmlFor="Estado" placeholder="Estado">Estado:  </label>
                    <input type="text" />

                    <label htmlFor="Cidade" placeholder="Cidade">Cidade </label>
                    <input type="text" />

                    <label htmlFor="Numero" placeholder="Numero">Numero </label>
                    <input type="text" />
                </form>
            </template>
        </>
    )
}

export default CEP;