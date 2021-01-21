import React from 'react'
import Header from '../components/header'
import Container from '../components/container'
import Lead from '../components/lead'
import Forms from '../components/forms'
import TYPage from '../components/typage'


export default function Carrefour() {
  const [step, setStep] = React.useState('lead');
  const [source, setSource] = React.useState('');

  function leadHandler(source){
    setSource(source);
    setStep('forms');
  }

  function formsHandler(action){
    if(action=='forward') setStep('ty');
    else if(action=='back') setStep('lead');
  }

  let mode = 'carrefour'

  return (
    <>
      <Container mode={mode}>
        <Header mode={mode}>
        </Header>
        {
          { 'lead': <Lead mode={mode} handler={leadHandler} />,
            'forms': <Forms mode={mode} source={source} handler={formsHandler} />,
            'ty': <TYPage />
          }[step]
        }
      </Container>
    </>
  )
}
