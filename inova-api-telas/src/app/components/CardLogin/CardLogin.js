import React from 'react';
import './CardLogin.css';

const CardLogin = () => {
  return (
    <div className="container">
      <h2>Login Aluno</h2>
      <form id="alunoLoginForm">
        <div className="input-container">
          <label htmlFor="matriculaAluno">Matrícula:</label>
          <input type="text" id="matriculaAluno" placeholder="Digite sua matrícula" required />
        </div>
        <div className="input-container">
          <label htmlFor="senhaAluno">Senha:</label>
          <input type="password" id="senhaAluno" placeholder="Digite sua senha" required />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default CardLogin;