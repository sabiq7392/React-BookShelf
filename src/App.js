// import logo from './assets/img/Logo.svg';
import React from 'react';
import './App.css';
import Header from './assets/js/component/Header';
import Main from './assets/js/component/Main';
import Footer from './assets/js/component/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
