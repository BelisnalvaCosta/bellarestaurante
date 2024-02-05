import { React } from "react";
import { Bellarestaurante } from "./assets/bellarestaurante.jpeg";
import './App.css';
import { Navegacao } from "./Navegacao";
import { ItemCardapio } from "./ItemCardapio";
import { pratosPrincipais, sobremesas, bebidas } from "/cardapio.js";

function App(){  
  const [paginaSelecionada, atualizarPaginaSelecionada] = React.useState(0);

  const paginasMenu = [pratosPrincipais, sobremesas, bebidas];

  return (
    <> 
    <img src={Bellarestaurante} className="capa"></img>

    <Navegacao atualizarPaginaSelecionada = {atualizarPaginaSelecionada}/>
    <div className="menu">
      {paginasMenu[paginaSelecionada].map((item) => (
      <ItemCardapio 
      nome={item.nome} 
      descricao={item.descricao} 
      preco={item.preco}       
      imagem={item.imagem}
      />
      ))}
    </div>
  </>
  );
}
export default App;