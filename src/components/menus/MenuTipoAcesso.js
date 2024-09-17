import React from 'react';
import './TipoAcesso.css';

const TipoAcesso = () => {
  return (
    <div className="access-type-container">
      <header className="header">
        <button className="back-button">&lt;</button>
        <div className="user-greeting">
          <span className="user-icon">👤</span>
          Olá, [usuário]!
        </div>
        <div className="date">29 ABR. 2024</div>
      </header>
      <main className="main-content">
        <h1 className="title">TIPO DE ACESSO</h1>
        <div className="access-options">
          <button className="access-button general">
            <div className="icon general-icon"></div>
            GERAL
          </button>
          <button className="access-button administrative">
            <div className="icon administrative-icon"></div>
            ADMINISTRATIVO
          </button>
        </div>
      </main>
    </div>
  );
};

export default TipoAcesso;
