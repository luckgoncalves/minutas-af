import React, { useState, useContext, useEffect, useCallback }  from 'react';
import { FaCheck } from 'react-icons/fa';
import axios from 'axios'

import StepBody from '../StepBody';

import Button from '../../Button'

import { Steps, Badge, Step, Separator, Form, GroupButtons } from './styles';
import { AuthContext } from '../../../providers/auth';

import { typeForm, fields } from './actions';

interface FormProps {
  inputName: string,
  inputValue: string
}

const StepBar: React.FC = () => {

  const { loading, handleLoading } = useContext(AuthContext)
  
  const [ listBancos, setListBancos ] = useState([]);
  const [ active, setActive ] = useState(2)
  const [ signatario, setSignatario ] = useState()


  const Body = (payment) => {
    const [ form, setForm ] = useState<FormProps>();

    payment = 'Depósito na Conta do Advogado';

    useEffect(() => {

      listBancos.length === 0 &&
        axios.get('/bancos.json')
        .then(response => setListBancos(response.data))
    }, [listBancos]);

    //Cria um signatario;
    function createSignatario () {
      axios.post('api/clicksign/signers/createSignatario', {
        "signer": {
          "email": "lucasleitegoncalves@gmail.com",
          "phone_number": "41997669242",
          "auths": [
            "email"
          ],
          "name": "Lucas Gonçalves",
          "documentation": "085.921.769-80",
          "birthday": "1994-06-29",
          "has_documentation": true,
          "selfie_enabled": true,
          "handwritten_enabled": true,
          "official_document_enabled": true
        }
      })
      .then(async response => {
        setSignatario(response.data.signer)

        await createDocument(response.data.signer);
      
      })
    }

    //Cria o documento com os dados do formulário;
    function createDocument(signer) {
      axios.post('/api/clicksign/documents/createdoc', {
        "document":{
          "path": "/minuta padrão.docx",
          "template":{
            "data": {
              ...form
            }
          }
        }
      })
      .then(async response => {
        await addSignerDocument(signer, response.data.document)
      })
      .catch(error => console.log(error.response.data.error))
    }

    //Adiciona o signatario ao documento;
    function addSignerDocument(signer, document) {
      axios.post('/api/clicksign/signers/signersDocuments', {
        "list": {
          "document_key": document.key,
          "signer_key": signer.key,
          "sign_as": "sign",
          "message": "Prezado João,\nPor favor assine o documento.\n\nQualquer dúvida estou à disposição.\n\nAtenciosamente,\nGuilherme Alvez"
        }
      })
      .then(console.log)
      .catch(error => console.log(error.response.data.error))
    }

    async function onSubmit(e) {
      e.preventDefault();
          
      await createSignatario();
     
    }

    const handleForm = (inputName: string, inputValue: string) => {
      setForm({...form, [inputName]: inputValue})
    }

    return (
      <Form onSubmit={onSubmit}>
        <span>Pedimos, por gentileza, preencher as informações para o escritório confeccionar a minuta. 
          No caso o pagamento dar-se-á através de depósito em conta corrente da PARTE AUTORA. </span>

       {typeForm(listBancos, handleForm)
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
            onClick={() => handleLoading(!loading)} 
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

    return (
      <div className="d-flex flex-column w-100" style={{height: '500px'}}>
        <input id='request_signature_key' />
         <input type='button' value='Load' id="run-click"/>
        <div id='container' style={{height: '600px', overflow: 'auto'}}></div>
        
        <button>Avançar</button>
      </div>
    )
  }

  const BodyThree = () => {
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
            <Badge active={active >= 1 ? 'true' : 'false'}> 
              {active > 1 ? <FaCheck />  : 1 }
            </Badge>
            <span>Informar os dados</span>
        </Step>

        <Step onClick={() => setActive(2)}>

          <Separator />
          <Badge active={active >= 2 ? 'true' : 'false'}>
            {active > 2 ? <FaCheck />  : 2 }
          </Badge>
          <span>Ver minuta</span>

          <Separator />
        </Step>
         
        <Step onClick={() => setActive(3)}>
          <Badge active={active >= 3 ? 'true' : 'false'}>
            {active > 3 ? <FaCheck />  : 3 }
          </Badge>
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