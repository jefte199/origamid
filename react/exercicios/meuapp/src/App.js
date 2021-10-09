import React from 'react';

//Components
import Title from './components/Title';
//import Input from './components/Input';
import Radio from './components/Radio';

/*
const styleCont = {
  maxWidth: "420px",
  margin: "0 auto",
  display: 'flex',
  flexDirection: "row"
}

*/
const styleH = {          
color: "#e91e63",
fontFamily: "courier"
}

const styleB = { margin: '.5rem' };

const questions = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

const App = () => {
  const [radio, setRadio] = React.useState('');
  const [question, setQuestion] = React.useState(0);
  const [result, setResult] = React.useState(0);

  function handleQuestion() {
    setQuestion(question + 1);
    if (questions[question].resposta == radio) setResult(result + 1);
  
  }
  return (
    <>
      <Title txt="Form: Desafio" />
      {questions[question] &&
        <div>
          <fieldset>
            <legend>{questions[question].pergunta}</legend>
            {questions[question].options.map((qst, index) => {
              return <Radio option={radio} setOption={setRadio} txt={qst} key={questions[question].id + index} />
            })}
          </fieldset>
          <button style={styleB} onClick={handleQuestion}>proximo</button>
        </div>
      }
      {
        question > 3 ?<h3 style={styleH}>Sua pontuação é {result}/4</h3>: <h3 style={styleH}>Aguardando Termino do Questionario</h3>
      }
    </>
  );
};

export default App;
