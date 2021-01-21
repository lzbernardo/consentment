import React from 'react'
import Switch from 'react-input-switch';
import { useFormikContext, Formik, Field, Form, ErrorMessage } from 'formik';
import SheetDB from 'sheetdb-js'
import styles from './Forms.module.css';

function Forms(props){
  const { handler, mode, source } = props;
  const [permissions, setPermissions] = React.useState([0,0,0,0]);
  const [feeling, setFeeling] = React.useState('😉')
  const [submitting, setSubmitting] = React.useState(false);


  const spreadsheetId = '1rVZ6TKE5TqBDAm0ttBIel6fH3OSxEsKzaQQyc2aazsg'
  const baseUrl = "https://pushtogsheet.herokuapp.com";
  const query = `valueInputOption=RAW&pizzly_pkey=pope8Qy8qfYyppnHRMgLMpQ8MuEUKDGeyhfGCj`;
  const url = new URL(`/proxy/google-sheets/${spreadsheetId}/values/A1:append?${query}`, baseUrl);
  const data = [["firstname", "lastname"], ["John", "Doe"]];

  function handleToggle(id){
    setPermissions(
      permissions.map((value, i, arr) => {
        return(i==id ? +!value : +value)
      })
    )
  }

  React.useEffect(() => {
    let sum = permissions.reduce((a, b) => a + b, 0);
    switch(sum){
      case 0: setFeeling('😉'); break;
      case 1: setFeeling('🙂'); break;
      case 2: setFeeling('😊'); break;
      case 3: setFeeling('🥰'); break;
      case 4: setFeeling('🥰'); break;
      default: setFeeling('😉'); break;
    }
    console.log(permissions);
  }, [permissions]);

  function cpfMask(value){
    return value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
  }

  return(
    <div className={styles.box}>
      <div className={styles.formsHeader}>
        <h2><span>Que bom que </span><br/>Você está aqui!</h2>
        <div className={styles.feeling}>
          {feeling}
        </div>
      </div>
      <Formik
        initialValues={{
                          permissoes: permissions,
                          cpf: ''
                      }}
        onSubmit={(values) => {
          console.log(values);
          setSubmitting(true);
          setTimeout(() => {
            SheetDB.write('https://sheetdb.io/api/v1/cssghqeah6wug', { sheet: 'Página1', data: {p1: permissions[0], p2: permissions[1], p3: permissions[2], p4: permissions[3], cpf: values.cpf, fonte: source, local: mode } }).then(function(result){
              console.log(result);
              handler('forward');
              setSubmitting(false);
            }, function(error){
              console.log(error);
              alert('Algo deu errado no envio dos dados. Por favor, tente novamente. Se o erro persistir, peça ajuda para o colaborador da weme presente no local :)');
              setSubmitting(false);
            });
          }, 1500)
        }}
      >
        {(props) = (
          <Form>
            <CustomSwitch id={0} permissions={permissions} handleToggle={handleToggle} />
            <CustomSwitch id={1} permissions={permissions} handleToggle={handleToggle} />
            <CustomSwitch id={2} permissions={permissions} handleToggle={handleToggle} />
            <CustomSwitch id={3} permissions={permissions} handleToggle={handleToggle} />
            <div className={styles.cpf}>
              <label>Insira seu <bold>CPF</bold>:</label>
              <Field className={styles.input} name="cpf" />
            </div>

            <button type="submit" disabled={submitting} className={styles.submit + ' alternate-' + mode}><img src="tail-spin.svg" className={styles.svg} hidden={!submitting}/> Confirmar</button>
        </Form>
        )}
      </Formik>
    </div>
  );
}

function CustomSwitch(props){
  const {id, permissions, handleToggle} = props;

  return(
    <div className={styles.option} onClick={() => handleToggle(id)}>
      <div className={styles.text}>
        <p>Textinho Explicativo</p>
      </div>
      <Switch
        className={styles.switch}
        value={permissions[id]}
        onChange={() => handleToggle(id)}
      />
    </div>
  )
}

export default Forms;