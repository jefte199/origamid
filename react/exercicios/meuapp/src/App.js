import React from 'react';

//Components
import Title from './components/Title';
/*
const styleCont = {
  maxWidth: "420px",
  margin: "0 auto",
  display: 'flex',
  flexDirection: "row"
}

const styleB = { margin: '.5rem' };
*/
const App = () => {

  const [form, setForm] = React.useState({
    name: "",
    email: "",
    senha: "",
    cep: "",
    rua: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  const [status, setStatus] = React.useState(false);

  const formFild = [
    {
      id: "nome",
      label: "Nome",
      type: "text"
    },
    {
      id: "email",
      label: "Email",
      type: "email"
    },
    {
      id: "senha",
      label: "Senha",
      type: "password"
    },
    {
      id: "cep",
      label: "Cep",
      type: "text"
    },
    {
      id: "rua",
      label: "Rua",
      type: "text"
    },
    {
      id: "bairro",
      label: "Bairro",
      type: "text"
    },
    {
      id: "city",
      label: "city",
      type: "text"
    },
    {
      id: "estado",
      label: "Estado",
      type: "text"
    },

  ]

  function handleText({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  function handleSubmit (event) {
    event.preventDefault();
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then(response => {
      response.ok? setStatus(true): setStatus(false);
    });
  }

  return (
    <>
      <Title txt="Form: input" />
      <form onSubmit={handleSubmit}>
        {
          formFild.map(({ id, type, label }) => {
            return (
              <div key={id}>
                <label htmlFor={id}>{label}</label>
                <input
                  type={type}
                  id={id}
                  value={form[id]}
                  onChange={handleText}
                />
                <br />
              </div>
            )
          })
        }
        <p>Status da requisição</p>
        <p>{status? `${status} Cadastro realizado` : `${status} Cadastro não realizado`}</p>
        <button>Send</button>
      </form>
    </>
  );
};

export default App;
