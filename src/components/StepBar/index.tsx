import React, { useState, useEffect, useContext }  from 'react';
import { FaCheck } from 'react-icons/fa';
import axios from 'axios'

import StepBody from '../StepBody';

import Button from '../Button'

import { Steps, Badge, Step, Separator, Form, GroupButtons } from './styles';
import { AuthContext } from '../../providers/auth';

import { typeForm, fields } from './actions';

const StepBar: React.FC = () => {

  const { loading, setLoading } = useContext(AuthContext)

  const [ active, setActive ] = useState(2)


  const Body = (payment) => {
    payment = 'Depósito na Conta do Advogado';

    function onSubmit(e) {
      e.preventDefault();

      axios.post('/api/clicksign/createdoc', {
        name: 'testte'
      })
      .then(console.log)
      .catch(error => console.log(error.response.data.error))

      // setLoading(!loading)
    }

    return (
      <Form onSubmit={onSubmit}>
        <span>Pedimos, por gentileza, preencher as informações para o escritório confeccionar a minuta. No caso o pagamento dar-se-á através de depósito em conta corrente da PARTE AUTORA. </span>
      
       {typeForm()
          .filter( form => form.payment.toLowerCase() === payment.toLowerCase() )
          .map( ({ inputs } ) => 
            inputs.map( input => 
              fields[input.id](input)
            )
          )
        }

        <span>Clique a baixo para gerar e assinar a sua minuta e após o envio o escritório realizará o protocolo em até 24 horas.</span>

        <GroupButtons>
          <Button 
            onClick={() => setLoading(!loading)} 
            loading={loading} 
            outlined={true} 
          >
            Cancelar
          </Button>
            
          <Button 
            onClick={() => ''}
            outlined={false}
            loading={loading} 
          >
            Gerar minuta
          </Button>
        </GroupButtons>
      </Form>
    )
  }

  const BodyTwo = () => {
    // console.log(response)
    return (
      <div className="d-flex flex-column w-100" style={{height: '500px'}}>
        <iframe style={{width: '100%', height: '100%'}} src="https://sandbox.clicksign.com/sign/5482e8b3-ac51-4f7a-888c-2029e35894f8" frameborder="0"></iframe>
        <button>Avançar</button>
      </div>
    )
  }

  const BodyThree   = () => {
    return (
      <>
      <h1>Teste 3</h1>
      <button>Avançar</button>
      </>
    )
  }

  return (
    <>
      <Steps>
        <Step onClick={() => setActive(1)}>
            <Badge active={active >= 1 ? 'true' : 'false'}> {active > 1 ? <FaCheck />  : 1 }</Badge>
            <span>Informar os dados</span>
        </Step>

        <Step onClick={() => setActive(2)}>

          <Separator />
          <Badge active={active >= 2 ? 'true' : 'false'}>{active > 2 ? <FaCheck />  : 2 }</Badge>
          <span>Ver minuta</span>

          <Separator />
        </Step>
         
        <Step onClick={() => setActive(3)}>
          <Badge active={active >= 3 ? 'true' : 'false'}>{active > 3 ? <FaCheck />  : 3 }</Badge>
          <span>Finalizar</span>
        </Step>
      </Steps>

      <StepBody active={active === 1}  children={<Body />} />
      <StepBody active={active === 2}  children={<BodyTwo />} />
      <StepBody active={active === 3}  children={<BodyThree />} />
    </>
  );
}

export default StepBar;