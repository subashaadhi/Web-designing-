import React from 'react';
import { Box, Container, Typography, Button, Paper } from '@mui/material';
import projectImage1 from '../assets/building.png'; 
import projectImage2 from '../assets/a.png'; 

export default function DerniersProjets() {
  return (
    <Box 
      component="section" 
      sx={{ 
        backgroundColor: '#ffffff', 
        py: { xs: '50px', md: '80px' }, 
        px: { xs: 2, md: 4 }, 
        mx: { xs: 0, md: '100px' },
        borderRadius: { xs: 0, md: '40px' }
      }}
    >
      <Container 
        maxWidth={false} 
        sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'flex-start', md: 'center' }, 
          justifyContent: 'space-between', 
          gap: { xs: '40px', md: '60px' },
          maxWidth: '1200px',
          px: 0
        }}
      >
        {/* Left Content Area - Added flexDirection: 'column' */}
        <Box 
          sx={{ 
            maxWidth: { xs: '100%', md: '450px' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            textAlign: 'left',
            width: '100%'
          }}
        >
          <Typography 
            variant="h2" 
            sx={{ 
              fontSize: { xs: '2rem', md: '2.5rem' }, 
              fontWeight: 700, 
              color: '#111111', 
              mb: '20px' 
            }}
          >
            Derniers projets
          </Typography>

          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: '0.95rem', 
              lineHeight: 1.6, 
              color: '#555555', 
              mb: '32px' 
            }}
          >
            Vous voulez en voir plus ? Contactez-nous et nous nous ferons un plaisir de partager avec vous quelques unes de nos réalisations.
          </Typography>

          <Button 
            href="#"
            variant="contained" 
            sx={{ 
              padding: '14px 28px', 
              borderRadius: '50px', 
              background: 'linear-gradient(90deg, #d946ef 0%, #4f46e5 100%)', 
              color: '#ffffff', 
              textTransform: 'none', 
              fontSize: '0.9rem', 
              fontWeight: 600, 
              boxShadow: '0 4px 15px rgba(217, 70, 239, 0.3)',
              width: { xs: '100%', sm: 'auto' },
              '&:hover': { 
                opacity: 0.95, 
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px rgba(217, 70, 239, 0.4)' 
              } 
            }}
          >
            Découvrir d'autres projets
          </Button>
        </Box>

        {/* Right Gallery / Card Preview Area */}
        <Box align='center'
          sx={{ 
            display: 'flex', 
            flexWrap:{xs:'wrap' ,md:'nowrap'},
            gap: '20px',
            overflowX: 'auto',
            width: '100%',
            maxWidth: { xs: '100%', md: '600px' },
            pb: 2,
            '&::-webkit-scrollbar': { display: 'none' },
            scrollbarWidth: 'none',
          }}
        >
          {/* Project Card 1 */}
          <Paper 
            elevation={0}
            sx={{ 
              minWidth: { xs: '260px', sm: '300px' },
              height: { xs: '320px', md: '420px' }, 
              borderRadius: '30px', 
              overflow: 'hidden',
              flexShrink: 0,
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
              backgroundColor: '#f5f5f5'
            }}
          >
            <Box 
              component="img" 
              src={projectImage1} 
              alt="Dernier projet 1" 
              sx={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover' 
              }} 
            />
          </Paper>

          {/* Project Card 2 */}
          <Paper 
            elevation={0}
            sx={{ 
              minWidth: { xs: '260px', sm: '300px' },
              height: { xs: '320px', md: '420px' }, 
              borderRadius: '30px', 
              overflow: 'hidden',
              flexShrink: 0,
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
              backgroundColor: '#f5f5f5'
            }}
          >
            <Box 
              component="img" 
              src={projectImage2} 
              alt="Dernier projet 2" 
              sx={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover' 
              }} 
            />
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}