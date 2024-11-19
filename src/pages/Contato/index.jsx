import styles from "./contato.module.css"
import Head from "../../components/Head"

function Contato(){
    
    return(
        <section className={styles.contato + " animeLeft"}>
            <Head title="Contato" description="Entre em contato"/>
            <img src="https://portaltailandia.com/wp-content/uploads/2020/04/contato_portal_tailandia.jpg" alt="img-contato"/> 
            <div>
                <h1>Entre em contato.</h1>
                <ul className={styles.dados}>
                    <li>rodrigo@gmail.com</li>
                    <li>21xxx-xxxx</li>
                    <li>Rua Dom Corleone, 209</li>
                </ul>
            </div>
        </section>
    )
}

export default Contato
