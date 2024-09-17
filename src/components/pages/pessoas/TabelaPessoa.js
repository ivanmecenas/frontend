function TabelaPessoa({ vetor, selecionar }) {
  return (
    <table className="table table-hover table-striped table-secondary table-bordered">
      <thead>
        <tr>
          <th>Id</th>
          <th>Matricula</th>
          <th>E-mail</th>
          <th>Nome</th>
          <th>Telefone</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody>
        {vetor.map((obj, indice) => (
          <tr key={indice}>
            <td>{obj.id}</td>
            <td>{obj.matricula}</td>
            <td>{obj.email}</td>
            <td>{obj.nome}</td>
            <td>{obj.telefone}</td>
            <td>
              <button
                onClick={() => {
                  selecionar(indice);
                }}
                className="btn btn-success"
              >
                Selecionar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TabelaPessoa;
