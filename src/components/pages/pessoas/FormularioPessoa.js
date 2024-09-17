function FormularioPessoa({
  botao,
  eventoTeclado,
  cadastrar,
  obj,
  titulo,
  cancelar,
  remover,
  alterar,
}) {
  return (
    <div className="fundo">
      <form onLoad={(titulo = { titulo })}>
        <div>
          <label className="label">Nome</label>
          <input
            type="text"
            name="nome"
            value={obj.nome}
            className="form-input"
            onChange={eventoTeclado}
          />
        </div>

        <div>
          <label className="label">Matrícula</label>
          <input
            type="text"
            name="matricula"
            value={obj.matricula}
            className="form-input"
            onChange={eventoTeclado}
          />
        </div>

        <div>
          <label className="label">Telefone</label>
          <input
            type="text"
            name="telefone"
            value={obj.telefone}
            className="form-input"
            onChange={eventoTeclado}
          />
        </div>

        <div>
          <label className="label">E-mail</label>
          <input
            type="text"
            name="email"
            value={obj.email}
            className="form-input"
            onChange={eventoTeclado}
          />
        </div>

        <div>
          <label className="label">Senha</label>
          <input
            type="password"
            name="senha"
            value={obj.senha}
            className="form-input"
            onChange={eventoTeclado}
          />
        </div>

        {botao ? (
          <div className="div-botao">
            <input
              type="button"
              value="Confirmar"
              onClick={cadastrar}
              className="form-botao"
            />
          </div>
        ) : (
          <div>
            <input
              type="button"
              value="Alterar"
              className="btn btn-warning"
              onClick={alterar}
            />
            <input
              type="button"
              value="Remover"
              className="btn btn-warning"
              onClick={remover}
            />
            <input
              type="button"
              value="Cancelar"
              className="btn btn-warning"
              onClick={cancelar}
            />
          </div>
        )}
      </form>
    </div>
  );
}

export default FormularioPessoa;
