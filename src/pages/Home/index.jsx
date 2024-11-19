import { useState } from "react";
import { useEffect } from "react";
import styles from "./home.module.css"
import { Link } from "react-router-dom";
import Head from "../../components/Head"

function Home() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function requestApi() {
      try {
        const response = await fetch(
          "https://ranekapi.origamid.dev/json/api/produto"
        );
        const data = await response.json();
        setProdutos(data);
        setLoading(false);
        console.log(produtos);
      } catch (error) {
        console.log("Houve algum erro" + error);
        setLoading(false);
      }
    }
    requestApi();
  }, []);


  if(produtos === null) return null

  return (
    <section className={styles.home + " animeLeft"}>
       <Head title="Home" description="Bem vindo!"/>
      {produtos.map((produto) => (
          <Link  key={produto.id} to={`produtos/${produto.id}`}>
            <img src={produto.fotos[0].src} alt="produto-img" />
            <h1 className={styles.nome}>{produto.nome}</h1>
          </Link>
      ))}
    </section>
  );
}

export default Home;
