import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid'; // Standard MUI Grid (supports v2 props depending on version) // MUI Grid v2

const steps = [
  {
    icon: "💬",
    title: "Ateliers",
    description: "Créer une équipe pour votre projet client, avoir une organisation sans faille, c'est mieux. Prenons 1 hour pour en parler et structurer ensemble."
  },
  {
    icon: "✏️",
    title: "Figjam",
    description: "Brainstormer sur votre vision, affiner votre stratégie et planifier les étapes, tout cela est possible en créant des schémas, listes, vous allez adorer."
  },
  {
    icon: "🎨",
    title: "Figma",
    description: "Faire imaginer vos envies de design et l'expérience de votre projet. Figma est l'outil à la pointe de nos prototypes."
  },
  {
    icon: "</>",
    title: "Développement",
    description: "Pour developer vos envies et applications nous favorisons : Webflow, Node, React, Shopify ou Webgl."
  },
  {
    icon: "🔺",
    title: "Asana",
    description: "Notre solution numéro un pour vous donner toutes les clés en main et suivre l'avancée de chaque projet en toute transparence."
  }
];

export default function MethodologySection() {
  return (
    <Box 
      component="section" 
      sx={{ 
        backgroundColor: '#0a090f', 
        color: '#ffffff', 
        py: { xs: '50px', md: '80px' }, 
        px: { xs: 2, md: 4 }, 
        borderRadius: { xs: '20px', md: '30px' },
        maxWidth: '1200px',
        mx: { xs: 2, md: '100px' },
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' 
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: 'center', px: 0 }}>
        <Typography 
          variant="h2" 
          sx={{ 
            fontSize: { xs: '2rem', md: '2.8rem' }, 
            fontWeight: 700, 
            mb: '20px' 
          }}
        >
          Notre méthodologie
        </Typography>

        <Typography 
          variant="body1" 
          sx={{ 
            fontSize: '0.95rem', 
            color: '#a1a1aa', 
            maxWidth: '600px', 
            mx: 'auto', 
            mb: '60px', 
            lineHeight: 1.6 
          }}
        >
          Créer une équipe pour votre projet client, avoir une organisation sans faille, c'est mieux. Prenons 1 hour pour en parler et structurer ensemble.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {steps.map((step, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Box 
                sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  textAlign: 'center',
                  p: 2,
                  height: '100%'
                }}
              >
                <Box 
                  sx={{ 
                    fontSize: '2.5rem', 
                    mb: '16px',
                    backgroundColor: '#181722',
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid #272732',
                    flexShrink: 0
                  }}
                >
                  {step.icon}
                </Box>

                <Typography 
                  variant="h6" 
                  sx={{ fontSize: '1.25rem', fontWeight: 600, mb: '12px', color: '#ffffff' }}
                >
                  {step.title}
                </Typography>

                <Typography 
                  variant="body2" 
                  sx={{ fontSize: '0.9rem', color: '#a1a1aa', lineHeight: 1.5 }}
                >
                  {step.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}