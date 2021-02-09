import React, { useState } from 'react';
import { ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import Button from '../Button'
import { FaSearch } from 'react-icons/fa'
import { BiDownload } from 'react-icons/bi'
import { FiAlertCircle } from 'react-icons/fi'

import { Container, List, CircleIcon } from './styles'

const ModalMinuta: React.FC = () => {
 
  const [ modal, setModal ] = useState(true);

  const toggle = () => setModal(!modal);

  return (
      <Container className="modal-lg" isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} />
        
        <ModalBody className="px-5">
          <List>
            <li>
              <CircleIcon>
                <FiAlertCircle />
              </CircleIcon>
              <p>Por favor leia o documento com <b> atenção. </b></p>
            </li>

            <li>
              <CircleIcon>
                <FaSearch />
              </CircleIcon>
              <p>Confira todos os seus dados antes de realizar a assinatura.</p>
            </li>
            
            <li>
              <CircleIcon>
                <BiDownload />
              </CircleIcon>
              <p>Ao final da assinatura é possível realizar download de uma cópia do documento original.</p>
            </li>
          </List>
        </ModalBody>

        <ModalFooter className="d-flex justify-content-center align-items-center">
          <Button
            outlined={false}
            onClick={toggle}
            text={'Ok, entendi'}
            loading={false}
          />
        </ModalFooter>
      </Container>
  );
}

export default ModalMinuta;