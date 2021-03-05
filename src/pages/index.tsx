import React, { useState, useContext, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import axios from 'axios';

import LogoAf from '../assets/img/logo-af.svg'

import StepBar from '../components/StepBar'
import Loading from '../components/Loading'
import ModalMinuta from '../components/Modal'

import { Container } from '../styles/pages/Home'
import { AuthContext } from '../providers/auth';

const Home: React.FC = () => {
  const {loading} = useContext(AuthContext)
  const router = useRouter()

  let { template } = router.query 
  
  useEffect(() => {
    if(template) {
      axios.post('/api/clicksign/document', {template})
      .then(response => console.log(response))
    }
  },[template])

  return (
    <>
      <Head>
        <title>Minutas</title>
      </Head>
      <Container>
       
        <img src={LogoAf} alt="Acordo Fechado" />
        <StepBar />

        <ModalMinuta />
      </Container>
      
      {loading && <Loading />}
    
    </>
  )
}

export default Home
