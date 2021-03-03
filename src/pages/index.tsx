import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';

import Head from 'next/head';

import LogoAf from '../assets/img/logo-af.svg'

import StepBar from '../components/StepBar'
import Loading from '../components/Loading'
import ModaMinuta from '../components/Modal'

import { Container } from '../styles/pages/Home'
import { AuthContext } from '../providers/auth';



const Home: React.FC = () => {
  const {loading} = useContext(AuthContext)

  useEffect(() => {
    axios.get('/api/clicksign/alldocuments')
    .then(response => response)
  },[])

  return (
    <>
      <Container>
        <Head>
          <title>Minutass</title>
        </Head>

        <img src={LogoAf} alt="Acordo Fechado" />
        
        <StepBar />

        <ModaMinuta />
      </Container>
      
      {loading && <Loading />}
    </>
  )
}

export default Home
