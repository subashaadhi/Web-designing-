import { Box, Typography,Button } from '@mui/material'
import React from 'react'
import leftImage from '../assets/left-person.jpg'
import rightImage from '../assets/right-person.jpg'

function Grow({ 
  title = "Make you grow, together .", 
  description = "Vous avez beaucoup à nous apprendre sur votre marché et votre offre. Des infos précieuses qui méritent toute notre attention : parce qu’une solution digitale, ça se construit ensemble. C’est pour cela qu’un projet ne démarre jamais sans un vrai kick-off et que nous avons développés des méthodologies de co-construction. Vous impliquer dans chaque étape du projet, c’est vous en donner une maîtrise." 
}) {
  return (
    <Box 
      component='div' 
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        p: { xs: 2, md: 4 },
        gap: 4
      }}
    >
      
      <Box 
        component='img' 
        src={leftImage} 
        alt="Left person"
        sx={{
          width: { xs: '100%', sm: '350px', lg: '300px' },
          height: { xs: 'auto', md: '500px' },
          objectFit: 'cover',
        }}
      />

      
      <Box sx={{ flex: 1, textAlign: 'center', px: { xs: 1, md: 4 } }}>
        <Typography 
          component='h2' 
          variant='h3' 
          gutterBottom
          sx={{ fontWeight: 'bold' }}
        >
          {title}
        </Typography>


        

        <Typography 
          component='p' 
          variant='body1' 
          sx={{ mt: 2, color: 'text.secondary' }}
        >
          {description}
        </Typography>
            
            
            <Box component='div' sx={{
                 marginX:{xs:'20px',md:'150px'},
                 paddingX:{xs:'130px' , md:'60px'},
                 marginY:{xs:'5px' , md:'10px'}
            }}>
              
        <Button variant="contained"
                                sx={{
                                    color: '#ffff',
                                    backgroundImage: 'linear-gradient(45deg, #D95DB0 30%, #3344DC 90%)',
                                    boxShadow: '0 3px 5px 2px rgba(223, 116, 137, 0.3)',
                                    borderRadius: '60px',
                                    display: 'flex',
                                    flexWrap: 'nowrap',
                                    height: { xs: '20px', md: '35px' },
                                    width: { xs: '100px', md: '150px' },
                                    p: { xs: '1px', md: '2px' },
                                    fontSize: { xs: '6px', md: '8px' },
                                    position: 'relative',
                                    zIndex: '2',
                                    alignItems:'center',
                                    


                                }}>
                                nous contacter</Button> </Box>
        
        

      </Box>

      
      <Box 
        component='img' 
        src={rightImage} 
        alt="Right person"
        sx={{
          width: { xs: '100%', sm: '350px', lg: '300px' },
          height: { xs: 'auto', md: '500px' },
          objectFit: 'cover',
        }}
      />
    </Box>
  )
}

export default Grow