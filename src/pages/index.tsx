import React, { useState, useContext } from 'react';


import Head from 'next/head';

import LogoAf from '../assets/img/logo-af.svg'

import StepBar from '../components/StepBar'
// import Button from '../components/Button'
import Loading from '../components/Loading'
import ModaMinuta from '../components/Modal'

import { Container } from '../styles/pages/Home'
import { AuthContext } from '../providers/auth';



const Home: React.FC = () => {
  const {loading} = useContext(AuthContext)

  return (
    <>
    <Container>
      <Head>
        <title>Minutas</title>
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
