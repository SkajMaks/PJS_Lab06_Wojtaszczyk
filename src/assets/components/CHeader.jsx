import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './CHeader.css';   // ← DODANY IMPORT

class CHeader extends Component {
  render() {
    return (
      <div className="headerContainer">
        <img src={logo} className="headerLogo" alt="logo" />
        <h2>Witaj w przykładowym serwisie</h2>
      </div>
    );
  }
}

export default CHeader;
