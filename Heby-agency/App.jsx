
import { useState } from 'react'

import './App.css'
import SimpleContainer from './Container-card/SimpleContainer'
import About from './About/About'
import Offercard from './Offercard/Offercard'
import Offercard2 from './Offercard2/Offercard2'
import drink from './assets/drink.png'
import Box from '@mui/material/Box'
import Watermark from './Watermark/Watermark'
import Grow from './Grow/Grow'
import Clients from './Clients/Clients'
import MethodologySection from './Methodology/Methodolody'
import DerniersProjets from './DernierProjects/DernierProjects'
import Footer from './Footer/Footer'

function App() {


  return (
    <>
      <SimpleContainer />
      <About />
      <Offercard />

      <Box component="div" align='center' sx={{
        display: 'flex',
        flexWrap: { xs: 'wrap', md: 'wrap', lg: 'nowrap' },
        gap: '5px',
        justifyContent: 'center'
      }}>

        <Offercard2 />
        <Offercard2 title='offre club' image1={
          <Box
            component="img"
            src={drink}
            sx={{ height: { xs: '30px', md: '40px' } }}
          />
        }
          description='Vous êtes une agence et vous avez besoin de renfort sur des projets spécifiques ? Vous êtes une équipe d’experts et vous souhaitez votre organisation ? Votre demande colle davantage à une technologie spécifique ?'
          note='👉 La force de cette offre c’est le réseau : chacun sa spécialité et à chaque projet son expertise.' btn='en savoir plus sur cette offre'
        />


      </Box>

      <Watermark />
      <Grow />
      <Clients />
      <MethodologySection />
      <DerniersProjets />
      <Footer /> 
      



    </>
  )
}

export default App
