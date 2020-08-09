import React from 'react'
import {Grid, TextField, Button,makeStyles, createStyles,Typography,Container } from '@material-ui/core';
import useWebAnimations from "@wellyshen/use-web-animations";

const useStyles = makeStyles((theme) =>
  createStyles({
     
    heroCenter:{
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        paddingTop: '50px',
        [theme.breakpoints.down('sm')]:{
            flexDirection:'column-reverse',
        },
    },
    
    heroInput: {
        paddingBottom: '50px',
    },
    heroHeading:{
        fontWeight:700,
        [theme.breakpoints.down('xs')]:{
            fontSize:'40px',
            fontWeight:600,
        }
    },
    section1 : {
        backgroundColor: "#eee"
    },
    trialBtn:{
        marginLeft: '10px',
        padding:'15px',
        backgroundImage: 'linear-gradient(to right, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%)',
       
    
    },
    herotext: {
        opacity:'0.7',
        fontSize:'18px',
        paddingTop: '20px',
        paddingBottom: '50px',
        textAlign:'left',
    },
    btn:{
        color: '#8751fd',
        fontWeight:'550',
        padding:'15px 40px 15px 40px',
        boxShadow: '0 0 6px 0 rgba(157, 96, 212, 0.5)',
        border: 'solid 3px transparent',
        backgroundImage: 'linear-gradient(to right, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%)',
        backgroundOrigin: 'border-box',
        backgroundClip: 'content-box border-box',
        boxShadow: '2px 1000px 1px #fff inset',
        marginBottom:"15px",

    },
    image: {
        maxWidth:'100%',
        height:'auto',
        paddingLeft:'160px',
        paddingTop:'30px',
        [theme.breakpoints.down('md')]:{
            paddingLeft:'0px',
        }
    }
  }),
);

function Hero() {

    const classes = useStyles();
    const {ref:elementRef} = useWebAnimations({
        keyframes: {
         transform: "translateY(30px)", 
         transform: "translateY(-30px)", 

 
        },
         timing:{
             duration:3000,
             iterations:Infinity,
             easing: "ease-in-out",
             direction: "alternate",
         },
        
     });
    return (
        <div >
            <Container maxWidth="lg">
            <Grid container justify="center" className={classes.heroCenter}>
                <Grid item xs={12} sm={12} md={6}>
                    <form  noValidate autoComplete="off">
                        <div className={classes.heroInput}>
                        <TextField id="outlined-basic" label="Email" variant="outlined" />
                        <Button variant="contained" size="large" className={classes.trialBtn}>Free Trial</Button>
                        </div>
                        <Typography gutterBottom variant="h2" className={classes.heroHeading}>
                            Manage Your<br />
                            Project with<br />
                            Application
                        </Typography>
                        <Typography gutterBottom variant="subtitle1" className={classes.herotext}>
                            Nulla facilisi. Proin felis neque, suscipit egestas erat a<br />
                            tincidunt finibus magna consectetur lacus.
                        </Typography>
                        <Button  size="large" className={classes.btn}>Discover More </Button>

                    </form>
                 </Grid>
                 <Grid item xs={12} sm={12} md={6} ref={elementRef}>
                     <img src="https://apiton-next.vercel.app/_next/static/images/banner-moc-1-1-291a0c21a89f9c970fc64dde0486d32b.png" className={classes.image}/>
                 </Grid>
            </Grid>
            </Container>
        </div>
    )
}

export default Hero
