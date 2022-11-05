import React, { Component } from 'react';
import Links from './components/links';
import Contact from "./components/contact";
import Footer from "./components/footer";
import { Router, Routes, Route } from "react-router-dom";


class App extends Component {

  constructor(props){
    super(props);

    
  }
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Links />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;







