import React from 'react';
import './App.css';
import {Pages} from "../common/components/routes/Pages";
import {Header} from "../common/components/header/Header";
import {Footer} from "../common/components/footer/Footer";

function App() {
  return (
    <div className="App">
        <Header/>
          <Pages/>
      <Footer/>
    </div>
  );
}

export default App;
