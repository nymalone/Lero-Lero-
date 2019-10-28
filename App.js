import React from 'react';
import logo from './logo.svg';
import './App.css';
import Mussum from './images/mussum.png'

class App extends React.Component{s
state = { texto: "" }
  whatever = () => {
    const API_URL = "https://mipsum.herokuapp.com/frases/"
    const id = Math.ceil(Math.random() * 40);
    const URL = `${API_URL}${id}`; 

    fetch(URL)
      .then(response => response.json())
      .then(result => {
      console.log(result)
      this.setState({texto: result.frase})

    })
  }

  render(){
    return ( 
      <div className="App">
        <header className="App-header">
        <div class="foto">
        <img src={Mussum} alt=""/>
      </div> 
          Descubra sua frase Mussum do dia!
          <div>
            <br/>
          {this.state.texto} 
          <br/>
          </div>
          <br/>
         <button onClick={this.whatever}>Clique Aqui</button>
        </header>
      </div>
    );
  }
}

export default App;
