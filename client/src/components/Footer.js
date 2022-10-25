import Container from '@mui/material/Container'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'mui-image'
import inventori_logo from './images/inventori_logo.jpeg'
import { Link, ListItemIcon, Typography } from '@mui/material';
import { textAlign } from '@mui/system';



const Footer = (props) => {
    return (
        <Container style={{marginTop: "30px"}}>
            <Grid style={{display: "flex", justifyContent: "space-between"}}>
            <Grid xs={8}>
            <Typography variant='h6' sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: "sans-serif",
                fontWeight: 800,
                letterSpacing: '.3rem',
                color: '#b2abf2',
                textDecoration: 'none',
                marginLeft: "150px" 
            }}>Inventori</Typography>
            </Grid>
            <Grid xs= {4}>
                <Link href='/' style={{color: "#b2abf2"}}>Contact | </Link> 
                <Link href='/aboutUs' style={{color: "#b2abf2"}}>About Us | </Link> 
                <Link href='/' style={{color: "#b2abf2", marginRight: "150px"}}>Support</Link>
            </Grid>
            </Grid>
            <hr/>
            <Grid >
                <Typography style={{color: "#b2abf2", textAlign: "center" }}>Inventori &reg; {new Date().getFullYear()} </Typography>
            </Grid>
        </Container>
    )
}
export default Footer;