import React, { useState, useContext }  from 'react';
import { FaCheck } from 'react-icons/fa';
import StepBody from '../StepBody';

import Button from '../Button'

import { Steps, Badge, Step, Separator, Form, GroupButtons } from './styles';
import { AuthContext } from '../../providers/auth';

import { typeForm, fields } from './actions';

const StepBar: React.FC = () => {

  const { loading, setLoading } = useContext(AuthContext)

  const [ active, setActive ] = useState(1)


  const Body = (payment) => {
    payment = 'Depósito na Conta do Advogado';

    return (
      <Form>
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
            text="Cancelar"/>
            
          <Button 
            outlined={false}
            onClick={() => setLoading(!loading)} 
            loading={loading} 
            text="Gerar minuta" />
        </GroupButtons>
      </Form>
    )
  }

  const BodyTwo = () => {
    return (
      <>
      <h1>Teste2</h1>
      <button>Avançar</button>
      </>
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