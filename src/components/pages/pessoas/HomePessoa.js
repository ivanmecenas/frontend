import "./homePessoa.css";
import { useState, useEffect } from "react";
import Formulario from "./FormularioPessoa";
import Tabela from "./TabelaPessoa";
import logomarca from "../../assets/logomarca.png";

function HomePessoa() {
  // Objeto pessoa
  const pessoa = {
    id: "",
    matricula: "",
    nome: "",
    telefone: "",
    email: "",
    senha: "",
  };

  // UseState
  const [pessoas, setPessoas] = useState([]);
  const [objPessoa, setObjPessoa] = useState(pessoa);
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [tituloHeader, setTitulo] = useState("Cadastrar Pessoa");

  // UseEffect
  useEffect(() => {
    fetch("http://localhost:8080/pessoa/listar")
      .then((retorno) => retorno.json())
      .then((retorno_convertido) => setPessoas(retorno_convertido));
  }, []);

  //Obtendo os dados do formulário
  const aoDigitar = (e) => {
    setObjPessoa({ ...objPessoa, [e.target.name]: e.target.value });
  };

  // Limpar formulário
  const limparFormulario = () => {
    setObjPessoa(pessoa);
    setBtnCadastrar(true);
  };

  // Selecionar pessoa
  const selecionarPessoa = (indice) => {
    setObjPessoa(pessoas[indice]);
    setBtnCadastrar(false);
  };

  // Alterar Titulo do Header


  // Cadastrar Pessoa
  const cadastrarPessoa = () => {
    fetch("http://localhost:8080/pessoa/cadastrar", {
      method: "post",
      body: JSON.stringify(objPessoa),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((retorno) => retorno.json())
      .then((retorno_convertido) => {
        if (retorno_convertido.mensagem !== undefined) {
          alert(retorno_convertido.mensagem);
        } else {
          setPessoas([...pessoas, retorno_convertido]);
          alert("Usuário cadastrado com sucesso");
          limparFormulario();
        }
      });
  };

  // Remover Pessoa
  const removerPessoa = () => {
    fetch("http://localhost:8080/pessoa/remover/" + objPessoa.id, {
      method: "delete",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((retorno) => retorno.json())
      .then((retorno_convertido) => {
        // Mensagem
        alert(retorno_convertido.mensagem);

        // cópia do vetor de pessoas
        let vetorTemp = [...pessoas];

        // busca o indice no vetorTemp
        let indice = vetorTemp.findIndex((p) => {
          return p.id === objPessoa.id;
        });

        // Remover pessoa do vertorTemp
        vetorTemp.splice(indice, 1);

        // atualizar o vetor de pessoas
        setObjPessoa(vetorTemp);

        // limpar formulário
        limparFormulario();
      });
  };

  // Alterar Pessoa
  const alterarPessoa = () => {
    fetch("http://localhost:8080/pessoa/alterar", {
      method: "put",
      body: JSON.stringify(objPessoa),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((retorno) => retorno.json())
      .then((retorno_convertido) => {
        if (retorno_convertido.mensagem !== undefined) {
          alert(retorno_convertido.mensagem);
        } else {
          alert("Usuário alterado com sucesso");
          // cópia do vetor de pessoas
          let vetorTemp = [...pessoas];

          // busca o indice no vetorTemp
          let indice = vetorTemp.findIndex((p) => {
            return p.id === objPessoa.id;
          });

          // Remover pessoa do vertorTemp
          vetorTemp[indice] = objPessoa;

          // atualizar o vetor de pessoas
          setPessoas(vetorTemp);

          // limpar formulário
          limparFormulario();
        }
      });
  };

  // Retorno: aqui será chamada a tela inicial principal
  return (
    <div className="corpo">
      <div className="imagem-container">
        <img src={logomarca} alt="Logomarca" />
      </div>
      <div className="form-container">
        <Formulario
          obj={objPessoa}
          botao={btnCadastrar}
          eventoTeclado={aoDigitar}
          titulo="Home Pessoa"
          cadastrar={cadastrarPessoa}
          cancelar={limparFormulario}
          remover={removerPessoa}
          alterar={alterarPessoa}
        />
      </div>
      {/* <Tabela vetor={pessoas} selecionar={selecionarPessoa} /> */}
    </div>
  );
}
export default HomePessoa;
