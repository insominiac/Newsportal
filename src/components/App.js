import React, { Component } from 'react';
import './App.css';
import News from './News/News';
import Sidenews from './News/Sidenews';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      news1:{
        type:'top-healines',
        query:'sources=cbc-news'

      },
      news2:{
        type:'everything',
        query:'domains=wsj.com'
      },
      news3:{
        type:'everything',
        query:'sources=bbc-news'
      }
  
    };
  }
  render() {
    return (
      <div className="container-fluid">
        <nav className="navbar-fixed">
          <div className="nav-wrapper indigo lighten-4">
            <a href="/" className="bran-logo center">My Feed</a>
          </div>
        </nav>
          <div className="row">
            <div className="col s8">
            <News news={this.state.news1}/>
            <News news={this.state.news2}/>
            </div>

        <div className="col s4">
          <Sidenews news={this.state.news3}/>
        </div>
          
          </div>
        

      </div>
    );
  }
}

export default App;
