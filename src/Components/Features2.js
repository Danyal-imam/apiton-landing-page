import React from 'react';
import {
	Grid,
	Button,
	makeStyles,
	createStyles,
	Typography,
	List,
	ListItem,
	ListItemAvatar,
	Avatar,
	ListItemText,
	Container
} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import useWebAnimations from "@wellyshen/use-web-animations";


const useStyles = makeStyles((theme) => createStyles({
	
	startSection:{
		padding:'50px 0px 50px 0px'
	},
	iconBG:{
		backgroundImage: 'linear-gradient(to right, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%)',
		backgroundColor:'transparent'
	},
	featureHeading:{
		fontWeight:500,
		[theme.breakpoints.down('sm')]:{
			fontSize:'35px',
			fontWeight:400,
		}

	},
	image:{
		maxWidth:'100%',
		height:'auto',
		overflow:'hidden',
	}
}));

function Features2() {
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
		<div className={classes.startSection}>
			<Container maxWidth='lg'>
			<Grid container justify="center">
				<Grid item xs={12} sm={12} md={6} ref={elementRef}>
					<img src="http://layerdrops.com/apitonhtml/assets/images/resources/cta-1-moc-1.png" className={classes.image} alt='cell'/>
				</Grid>
				<Grid item xs={12} sm={12} md={6}>
					<Typography gutterBottom variant="subtitle1">
						Best Application
					</Typography>
					<Typography gutterBottom variant="h2" className={classes.featureHeading}>
						Powerful Application for Your Projects
					</Typography>
					<Typography gutterBottom variant="h5">
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur.
					</Typography>
					<List>
						<ListItem>
							<ListItemAvatar>
								<Avatar className={classes.iconBG}>
									<CheckIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText> Refresing to get such a personal touch </ListItemText>
						</ListItem>
						<ListItem>
							<ListItemAvatar>
								<Avatar className={classes.iconBG}>
									<CheckIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText> Duis aute irure dolor in reprehenderit in voluptate. </ListItemText>
						</ListItem>
						<ListItem>
							<ListItemAvatar>
								<Avatar className={classes.iconBG}>
									<CheckIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText> Velit esse cillum dolore eu fugiat nulla pariatur. </ListItemText>
						</ListItem>
					</List>
                    <Button variant="outlined" size="large">DISCOVER MORE </Button>
				</Grid>
			</Grid>
			</Container>
		</div>
	);
}

export default Features2;
