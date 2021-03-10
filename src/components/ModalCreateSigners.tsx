import React, { useState } from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import Button from './Button'
import styles from '../styles/Components/ModalCreateSigners.module.css';


const ModalMinuta: React.FC = () => {
 
  const [ modal, setModal ] = useState(true);

  const toggle = () => setModal(!modal);

  return (
      <Modal className={`${styles.modalContainer} modal-lg`} isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          Insira seus dados
        </ModalHeader>
        
        <ModalBody className="px-5">
            <div className={styles.fieldGroup}>
              <label>Nome</label>
              <input type="text" placeholder="Nome completo"/>
            </div>

            <div className={styles.fieldGroup}>
              <label>E-mail</label>
              <input type="email" placeholder="E-mail"/>
            </div>

            <div className={styles.fieldGroup}>
              <label>Telefone</label>
              <input type="tel" placeholder="(00) 00000-0000"/>
            </div>

            <div className={styles.fieldGroup}>
              <label>Documento</label>
              <input type="number" placeholder="000.000.000-00"/>
            </div>

            <div className={styles.fieldGroup}>
              <label>Data Nascimento</label>
              <input type="date" placeholder="00/00/0000"/>
            </div>

        </ModalBody>

        <ModalFooter className="d-flex justify-content-center align-items-center">
          <Button
            outlined={false}
            onClick={toggle}
            loading={false}
          >
            Cadastrar
          </Button>
        </ModalFooter>
      </Modal>
  );
}

export default ModalMinuta;