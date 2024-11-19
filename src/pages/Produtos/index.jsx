import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import styles from './produto.module.css'
import Head from '../../components/Head'
import LoadingImg from '../../assets/loading.gif'

function Produtos(){

    const { id } = useParams();
    const [produto, setProduto] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function requestApi() {
          try {
            setLoading(true)
            const response = await fetch(
              `https://ranekapi.origamid.dev/json/api/produto/${id}`
            );
            const json = await response.json();
            setProduto(json);
          } catch (error) {
            console.log("Houve algum erro" + error);
          } finally {
            setLoading(false)
          }
        }
        requestApi();
      }, [id]);

      if(loading) return <img style={{ width: 100 }} src={LoadingImg} alt="loading"/>
      if(produto === null) return null

    return(
        <section className={styles.produto + " animeLeft"}>
          <Head title={`Produto | ${produto.nome}`} description="Bem vindo aos produtos"/>
          <div>
            {produto.fotos.map(foto => <img key={foto.src} src={foto.src} alt={foto.titulos} />)}
          </div>
          <div>
            <h1>{produto.nome}</h1>
            <span className={styles.preco}>R$ {produto.preco}</span>
            <p className={styles.descricao}>{produto.descricao}</p>
          </div>
      </section>
    )
}

export default Produtos