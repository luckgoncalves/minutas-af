import React, { useState, useContext }  from 'react';
import { FaCheck } from 'react-icons/fa';
import StepBody from '../StepBody';

import Button from '../Button'

import { Steps, Badge, Step, Separator, Form, GroupButtons } from './styles';
import { AuthContext } from '../../providers/auth';

const StepBar: React.FC = () => {

  const { loading, setLoading } = useContext(AuthContext)

  const [ active, setActive ] = useState(1)


  const Body = () => {


    return (
      <Form>
        <span>Pedimos, por gentileza, preencher as informações para o escritório confeccionar a minuta. No caso o pagamento dar-se-á através de depósito em conta corrente da PARTE AUTORA. </span>
       
        <fieldset>
          <label htmlFor="">Qual o nome do beneficiário?</label>
          <input type="text" name="" id="" placeholder="nome parte autora"/>
        </fieldset>

        <fieldset>
          <label htmlFor="">Qual o CPF/CNPJ do beneficiário?</label>
          <input type="text" name="" id="" placeholder="CPF/CNPJ parte autora"/>
        </fieldset>

        <fieldset>
          <label htmlFor="">Qual o banco para depósito?</label>
          <select name="" id="">
            <option>Selecionar banco da parte autora</option>
          </select>
        </fieldset>

        <fieldset>
          <label htmlFor="">Qual a agência?</label>
          <input type="text" name="" id="" placeholder="Agência da parte autora"/>
        </fieldset>

        <fieldset>
          <label htmlFor="">Qual a conta?</label>
          <input type="text" name="" id="" placeholder="Conta da parte autora"/>
        </fieldset>
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
            <Badge active={active >= 1}> {active > 1 ? <FaCheck />  : 1 }</Badge>
            <span>Selecionar motivo</span>
        </Step>

        <Step onClick={() => setActive(2)}>

          <Separator />
          <Badge active={active >= 2}>{active > 2 ? <FaCheck />  : 2 }</Badge>
          <span>Informar dados</span>

          <Separator />
        </Step>
         
        <Step onClick={() => setActive(3)}>
          <Badge active={active >= 3}>{active > 3 ? <FaCheck />  : 3 }</Badge>
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