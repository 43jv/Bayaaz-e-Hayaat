
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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

import UrduText from './urdu';  

import AKSZ from "./data/Adeeba_ki_Samaaji_Zimmedaari.pdf"
import BQAK from "./data/Badalti_Qudratein_aur_Khawateen.pdf"
import HBC from "./data/Humne_Bandooq_Chalaai.pdf"
import RAH from "./data/Rationing _aur_Hum.pdf"
import YB from "./data/Yaadash_Bakhair.pdf"
import MKM from "./data/Mom_ki_Maryam.pdf"

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
            Archive
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
                    image={AKSZ}
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
                    <Button size="small" href = {AKSZ} target = "_blank">View</Button>
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
                    image={BQAK}
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
                    <Button size="small" href = {BQAK} target = "_blank">View</Button>
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
                    image={HBC}
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
                    <Button size="small" href = {HBC} target = "_blank">View</Button>
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
                    image={RAH}
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
                    <Button size="small" href = {RAH} target = "_blank">View</Button>
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
                    image={MKM}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                   Mom ki Maryam
                    </Typography>
                    <Typography>
                        Jeelani Bano
                    </Typography>
                  </CardContent>
                  <CardActions>
               
                  <Button component={Link} to="/urdu" size="small" target = "_blank">View</Button>
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
                   image={YB}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                   Yaadash Bakhair
                    </Typography>
                    <Typography>
                    
                    </Typography>
                  </CardContent>
                  <CardActions>
               
                  <Button component={Link} to="/test" size="small" target = "_blank">View</Button>
                  </CardActions>
                </Card>
                
              </Grid>
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}