import React from 'react'
import Offercard from '../Offercard/Offercard'
import Box from '@mui/material/Box'
import bread from '../assets/bread.png'
import bg1 from '../assets/bg1.png'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'


function Offercard2({
  title = "offre toast",
  image1 = <Box component="img" src={bread} sx={{ height: { xs: '30px', md: '40px' } }} ></Box>,
  description = "Vous avez besoin d’une présence en ligne rapide et efficace mais surtout limitée en terme de temps et/ou de budget : l’offre toast est faite pour vous !Design personnalisé, accompagnement, conseil...",
  note = "👉 Le tout sur une base solide en référencement pour que vos futurs clients vous trouvent en quelques clics.", btn = "parlez-nous de votre besoin" }) {

  return (

    <Box component='section' align='center' sx={{
      width: { xs: '400px', md: '550px' },
      height: { xs: '300px', md: '300px' },
      backgroundImage: `url(${bg1})`,
      backgroundSize: {xs:0 ,md:'contain'},
      backgroundRepeat: 'no-repeat',
      marginX: { xs: '80px', md: '70px'},
      marginY:{xs:'10px', md:'50px'},
      backgroundColor: 'white',
      borderRadius: '50px',
      boxShadow:'0px 10px 30px rgba(0, 0, 0,0.1)',
      display:'inline-block'
      

    }}>

      <Box component="div" sx={{
        display: 'flex',
        // flexWrap:{xs:'wrap', md:'nowrap'},
        alignItems: 'center', gap: 0,


      }}>
        <Typography component='p' variant='h3' sx={{

          fontFamily: "Inter, sans-serif",
          fontSize: { xs: '20px', md: '30px' },
          fontWeight: { xs: '300', md: '500' },
          marginX: { xs: '70px', md: '150px' },
          marginY: { xs: '30px', md: '30px' }

        }}>{title}</Typography>

        <Box component="div" sx={{
          marginX: { xs: '-50px', md: '-100px' }

        }}>
          {image1}

        </Box>

      </Box>

      <Box component='div' sx={{

      }}>

        <Typography component='p' sx={{
          fontFamily: 'Inter, sans-serif',
          fontSize: { xs: '8px', md: '14px' },
          textAlign: 'center',
          marginX: { xs: '60px', md: '120px' },


        }}>
          {description} <br /> <Typography component='p' sx={{
            fontFamily: 'Inter, sans-serif',
            fontSize: { xs: '8px', md: '14px' },
            textAlign: 'center',
            fontWeight:{xs:'600' , md:'600'},
            marginX: { xs: '25px', md: '5px' },
            marginY:{xs:'20px' , md:'5px'}
          }} >{note}</Typography>

        </Typography>


      </Box>


          <Button variant='contained' sx={{
            width:{xs:'100px' , md:'200px'},
            height:{xs:'18px', md:'20px'},
            textTransform:'none',
            fontFamily:'Inter, sans-serif',
            fontSize:{xs:'6px', md:'12px'},
            borderRadius:'50px',
            backgroundImage: 'linear-gradient(45deg , #D95DB0 30%, #3344DC 90% )',
            marginX:{xs:'90px' , md:'190px'},
            marginY:{xs:'10px' , md:0}

          }}>
            {btn}
          </Button>


    </Box>

  )
}

export default Offercard2