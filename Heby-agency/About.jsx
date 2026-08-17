import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'

function About() {
    return (
        <Box component="section" sx={{
            margin:{xs:'30px', md:'60px'}
        }} >

            <Typography component="p" variant='h3' align='center' sx={{

                fontFamily:"Inter, sans-serif",
                fontSize:{xs:'25px' , md:'52px'},
                margin:{xs:'10px', md:'20px'},
                lineHeight:{xs:'30px',md:'60px'},
                fontWeight:'500px'
                

            }} >
                Plus de simplicité, de flexibilité, <br /> de design et d'échanges

            </Typography>

             <Typography component="p" variant='h6' sx={{

                    fontFamily:'Inter, sans-serif',
                    fontSize:{xs:'12px' , md:'18px'},
                    fontWeight:'400px',
                    textAlign:'center',


                }}>Chez Hedy, nous prônons plus de simplicité dans les process : <br /> Less Meeting, More Organization
                   Pour cela,<br /> nous avons mis en place trois offres claires :

                </Typography>

        </Box>

    )
}

export default About