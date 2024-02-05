import { React } from "react";
import bellarestaurante from "./assets/bellarestaurante.webp";
import './App.css';
import { Navegacao } from "./Navegacao";
import { ItemCardapio } from "./ItemCardapio";
import { pratosPrincipais, sobremesas, bebidas } from "/cardapio.js";

function App(){  
  const [paginaSelecionada, atualizarPaginaSelecionada] = React.useState(0);

  const paginasMenu = [pratosPrincipais, sobremesas, bebidas];

  return (
    <> 
    <img src={bellarestaurante} className="capa"></img>

    <Navegacao atualizarPaginaSelecionada = {atualizarPaginaSelecionada}/>
    <div className="menu">
      {paginasMenu[paginaSelecionada].map((item) => (
      <ItemCardapio 
      nome={item.nome} 
      descricao={item.descricao} 
      preco={item.preco}       
      image={item.imagem}
      />
      ))}
    </div>
  </>
  );
}
export default App;