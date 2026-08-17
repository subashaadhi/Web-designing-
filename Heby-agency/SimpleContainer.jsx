import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import bgImage from '../assets/bg.png';
import logo from '../assets/Vector.png'
import { height, padding, position, right, zIndex } from '@mui/system';
import Button from '@mui/material/Button';
import female from '../assets/fem.png'

function SimpleContainer() {
    return (
        <>
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth={false} disableGutters sx={{
                    width: { xs: "90%", md: "80%" }, height: { xs: "90%", md: "100%" }, bgcolor: '#13111C', pb: 8, borderRadius: "0 0 50px 50px",

                }}>
                    <Box sx={{
                        width: { xs: "100%", md: "100%" }, maxWidth: '1202px', height: { xs: '300px', md: '480px' }, mx: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: { xs: 2, md: 4 },
                        position: 'relative', overflow: 'hidden', zIndex: 0,

                    }}>                 


                        <Box component="img" src={bgImage} sx={{

                            position: "absolute",
                            zIndex: 1,
                            top: 0,
                            bottom: 0,
                            padding: 0,
                            right: { xs: 0, md: 0 },
                            height: "100%",
                            width: { xs: '100%', md: '70%' },
                            // marginTop:
                            pointerEvents: 'none',

                        }} >

                        </Box>

                        {/* <Button variant="contained" sx={{
                                    width: {sx:"25px", md:"50px"},
                                    height:{sx:"25px", md:"50px"},
                                    borderRadius:{sx:'50%' , md:'50%'},
                                    backgroundColor:' #ffff',
                                    p:{xs:'1px',md:'5px'},
                                    fontSize:{xs:"10px",md:'18px'},
                                    position:'relative',
                                    zIndex:'2'
                                    
                                }}>👋</Button> */}

                        <Stack
                            direction="row"
                            spacing={2}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: 0,
                                margin: 0,
                            }}
                        > <Box component="img" src={logo}
                            sx={{
                                width: { xs: "50px", md: "77.8px" },
                                height: "auto"


                            }}>
                            </Box>

                            <Typography component="p" variant="h6"
                                sx={{ color: "#ffff", fontSize: { xs: '12px', md: '14px', marginLeft: { xs: "30px", md: "50px" }, fontFamily: 'inter', fontWeight: '400' } }}
                            >offres à propos projets manifeste
                            </Typography>

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
                                    zIndex: '2'


                                }}>
                                1h de conseil gratuit</Button>



                        </Stack>

                        <Box component="div" sx={{
                            margin: { xs: 0, md: 0 },
                            paddingLeft: { xs: 0, md: '50px' },
                            paddingBottom: { xs: '40px', md: '100px' },
                            alignItems: 'center',
                            margintop:{xs:'10px', md:'500px'}

                        }}>

                            <Typography component="p" variant='h1' sx={{
                                color: '#ffff', fontFamily: 'Inter, sans-serif', fontWeight: { xs: '300', md: '500px' }, fontSize: { xs: '80px', md: '120px' }, letterSpacing: { xs: '-2px', md: '-4px' }, lineHeight: { xs: '90px', md: '110px' }
                           ,
                           }}>
                                digital <br /> makers
                            </Typography>

                            <Button variant="contained" sx={{
                                width: { xs: '200px', md: '250px' },
                                height: { xs: '30px', md: '60px' },
                                display: 'flex',
                                gap: { xs: '10px' },
                                bgcolor:'#ffff',
                                borderRadius:'10px',
                                marginTop:{xs:'10px' , md:'60px'}
                            }} >

                                <Box component="img" src={female} sx={{
                                    width: { xs: '20px', md: '50px' },
                                    height: { xs: '20px', md: '50px' },
                                    borderRadius:'10px',
                                    padding:0,
                                    
                                }}>

                                </Box>

                                <Typography component="p" sx={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: { xs: '8px', md: '12px' },
                                    textTransform:'none',
                                    color:'black',
                                    textAlign:'center'

                                }}>
                                    2min pour nous connaitre <br />

                                    <Typography component='span'
                                        sx={{
                                            fontFamily: "Inter, sans-serif",
                                            fontSize: { xs: '8px', md: '12px' },
                                            textTransform:'none',
                                            textDecoration:'underline',
                                            color:'blue',
                                            padding:0,

                                        }}>C'est parti !</Typography>

                                </Typography>




                            </Button>



                        </Box>

                    </Box>
                </Container>
            </React.Fragment>
        </>
    )
}

export default SimpleContainer