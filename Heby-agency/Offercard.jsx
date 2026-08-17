import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import wrap from '../assets/wrap.png'
import bg1 from '../assets/bg1.png'
import Button from '@mui/material/Button'

function Offercard() {
    return (

        <Box component='section' align='center' sx={{

            width: { xs: '90%', md: '70%' },
            height: { xs: '250px', md: '350px' },
            bgcolor: '#13111C',
            marginX: { xs: '20px', md: '200px' },
            borderRadius: '50px',
            position: 'relative',
            backgroundImage: `url(${bg1})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            overflow: 'hidden'

        }}>


            <Box component="div" sx={{
                pt: { xs: 2, md: 3 },
                pl: { xs: 0, md: 0 },
                // marginY:{xs:0, md:'200px'}

            }}>

                <Typography component='p' variant='h4' sx={{
                    color: "#ffff",
                    fontFamily: 'Inter, sans-serif',
                    fontSize: { xs: '20px', md: '30px' },
                    fontWeight: { xs: '200', md: '400px' },
                    margin: { xs: 0, md: 0 }
                }}>
                    Offre Wrap <Box component='img' src={wrap} align='center' sx={{
                        width: { xs: '30px', md: '50px' },
                        height: { xs: '30px', md: '50px' },

                    }}>

                    </Box>
                </Typography>

                <Typography component='p' align='center' sx={{
                    marginLeft: { xs: "5px", md: '20px' },
                    color: '#ffff',
                    fontSize: { xs: '8px', md: '14px' },
                    display: 'inline-flex',
                    fontFamily: 'Inter, sans-serif',
                    lineHeight: { xs: '20px', md: '30px' },
                    textAlign: 'center',
                    justifyContent: 'center',
                    maxWidth: { xs: "50%", md: '70%' },
                    maxHeight: { xs: '100px', md: '400px' }

                }}>

                    L’offre wrap vous permettra de lancer votre présence en ligne avec un accompagnement <br /> stratégique sur-mesure, sans rogner sur la qualité du design et du référencement.
                </Typography>

                <Typography component="p" sx={{
                    maxWidth: { xs: "50%", md: '80%' },
                    color: '#ffff',
                    fontFamily: 'Inter, sans-serif',
                    // display:'flex',
                    justifyContent: 'space-around',
                    marginX: { xs: '100px', md: '100px' },
                    marginY: { xs: '3px', md: '8px' },
                    gap: { xs: '2px', md: '10px' },
                    fontSize: { xs: '8px', md: '14px' }

                }}>
                    👉 Prestation SEO
                    👉 Design sur-mesure
                    👉 Stratégie digitale optimisée

                </Typography>

                <Box component='div' sx={{

                    marginX: { xs: '150px', md: '300px' },
                    marginY: { xs: '30px', md: '40px' }

                }}>
                    <Button variant="contained"
                        sx={{
                            color: '#ffff',
                            backgroundImage: 'linear-gradient(45deg, #D95DB0 30%, #3344DC 90% )',
                            boxShadow: '0 3px 5px 2px rgba(223, 116, 137, 0.3)',
                            borderRadius: '60px',
                            display: 'flex',
                            flexWrap: 'nowrap',
                            height: { xs: '20px', md: '35px' },
                            width: { xs: '100px', md: '180px' },
                            p: { xs: '1px', md: '2px' },
                            fontSize: { xs: '6px', md: '12px' },
                            textTransform: 'none'
                            // position: 'relative',
                            // zIndex: '2'


                        }}>
                        en savoir plus sur cette offre</Button>
                </Box>

            </Box>




        </Box>

    )
}

export default Offercard