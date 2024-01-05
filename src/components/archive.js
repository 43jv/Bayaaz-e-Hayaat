
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import A from "./data/AKSZ.png"
import Apdf from "./data/Aksz.pdf"
import B from "./data/BQAK.png"
import Bpdf from "./data/Bqak.pdf"
import C from "./data/HBC.png"
import Cpdf from "./data/Hbc.pdf"
import D from "./data/RAH.png"
import Dpdf from "./data/Rah.pdf"

const cards = [1, 2, 3, 4];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Archive() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
        
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* // TODO: Remove, dont repeat code use map */}
          <Grid container spacing={4}>
           
              <Grid item key={1} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={A}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Adeeba ki Samaaji Zimmedaari
                    </Typography>
                    <Typography>
                        TODO: Include Author and other info
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href = {Apdf} target = "_blank">View</Button>
                  </CardActions>
                </Card>
                
              </Grid>
              <Grid item key={1} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={B}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Badalti Qudratein aur Khawateen
                    </Typography>
                    <Typography>
                        TODO: Include Author and other info
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href = {Bpdf} target = "_blank">View</Button>
                  </CardActions>
                </Card>
                
              </Grid>
              <Grid item key={1} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={C}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Humne Bandooq Chalaai
                    </Typography>
                    <Typography>
                        TODO: Include Author and other info
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href = {Cpdf} target = "_blank">View</Button>
                  </CardActions>
                </Card>
                
              </Grid>
              <Grid item key={1} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={D}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Rationing aur Hum
                    </Typography>
                    <Typography>
                        TODO: Include Author and other info
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href = {Dpdf} target = "_blank">View</Button>
                  </CardActions>
                </Card>
                
              </Grid>
            
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}