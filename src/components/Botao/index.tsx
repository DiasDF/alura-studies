import React from "react";
import BotaoSt from './Botao.module.scss'

class Botao extends React.Component {
  render() {
    return <button className={BotaoSt.botao}>Botão</button>;
  }
}

export default Botao;
