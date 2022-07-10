import React, { useEffect, useState } from 'react';
import './style.css'

//https://sujeitoprogramador.com/rn-api/?api=posts

//quero carregar as informações sempre que o projeto for aberto
//então  vamos utilizar useEffect
//fetch => vamos utilizar para fazer a requisição HTTP

function App() {
  const [nutri, setNutri] = useState([]);

  //Essa função está com o array vazio, então será chamada sempre q abrir o site
  useEffect(() => {

    function loadApi() {
      let url = "https://sujeitoprogramador.com/rn-api/?api=posts";

      fetch(url)
        .then((resultado) => resultado.json()).then((jsonAPI) => {
          setNutri(jsonAPI)
        })
    }
    loadApi();
  }, []);





  return (
    <div className='container'>
      <header>
        <strong>React Nutri</strong>
      </header>
      {nutri.map((item) => {
        return (
          <article key={item.id} className='post'>
            <strong className='titulo'>{item.titulo}</strong>
            <img src={item.capa} alt={item.titulo} className='capa'></img>
            <p className='subtitulo'>{item.subtitulo}</p>
            <a className='botao'>Acessar</a>
          </article>
        )
      })}

    </div>
  );
}

export default App;
