import React from 'react';
import Features2 from './Features2'
import Features3 from './Features3'
import {
	Grid,
	makeStyles,
	createStyles,
	Typography,
	Card,
	CardContent,
} from '@material-ui/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			minWidth: '140px',
			textAlign:'center'

		},
		section1: {
			textAlign: 'center',
			padding:'60px 0px 10px 0px',
		},
		featuresHeading:{
			fontWeight:500,
			[theme.breakpoints.down('sm')]:{
				fontSize:'35px',
				fontWeight:400,
			}
		},
		card: {
			margin: theme.spacing(2),
			textAlign: 'center',
			borderRadius:"30px",
			display:'flex',
			justifyContent:'center',
			alignItems:'center',
			padding:'30px',
			'&:hover':{
			backgroundImage: 'linear-gradient(to top, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%)'
			}
		},
		icon: {
			width: '70px',
			height: '70px',
			backgroundColor: '#f6f6fb',
			padding: '20px',
			borderRadius: '30px'
		},
		cardHeading:{
			padding:'25px 0 20px',
			fontWeight:600
		},
		
		cardDescription:{
		
		
	}
	})
);

function Features() {
	const classes = useStyles();

	return (
		<div>
			<div className={classes.section1}>
				<Typography gutterBottom variant="subtitle1">
					Featured List
				</Typography>
				<Typography gutterBottom variant="h2" className={classes.featuresHeading}>
					Appton Providing You <br />
					Best Features
				</Typography>
			</div>
			<div >
				<Grid container justify='center' className={classes.cardGroup}>
					<Grid item xs={12} sm={6} md={3} data-aos="zoom-in" duration='3000'>
						<Card className={classes.root} variant="outlined" className={classes.card}>
							<CardContent className={classes.bg}>
								<img
									src="https://image.flaticon.com/icons/svg/2306/2306224.svg"
									className={classes.icon}
									alt='icon'
								/>
								<Typography gutterBottom variant="subtitle1" className={classes.cardHeading}>
									Easy to Edit
								</Typography>
								<Typography gutterBottom variant="body1" className={classes.cardDescription}>
									Lorem ipsum is are many variations of pass majy.
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<Card className={`${classes.root} ${classes.card}`}variant="outlined">
							<CardContent>
								<img
									src="https://image.flaticon.com/icons/svg/3215/3215177.svg"
									className={classes.icon}
									alt='icon'

								/>
								<Typography gutterBottom variant="subtitle1" className={classes.cardHeading}>
									Fully Secure
								</Typography>
								<Typography gutterBottom variant="body1" className={classes.cardDescription}>
									Lorem ipsum is are many variations of pass majy.
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<Card className={classes.root} variant="outlined" className={classes.card}>
							<CardContent>
								<img
									src="https://image.flaticon.com/icons/svg/3108/3108260.svg"
									className={classes.icon}
								/>
								<Typography gutterBottom variant="subtitle1" className={classes.cardHeading}>
									Manage Users
								</Typography>
								<Typography gutterBottom variant="body1" className={classes.cardDescription}>
									Lorem ipsum is are many variations of pass majy.
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} sm={6} md={3} data-aos="zoom-in-up" duration='2000'>
						<Card className={classes.root} variant="outlined" className={classes.card}>
							<CardContent>
								<img
									src="https://image.flaticon.com/icons/svg/3182/3182314.svg"
									className={classes.icon}
									alt='icon'

								/>

								<Typography gutterBottom variant="subtitle1" className={classes.cardHeading}>
									Free Trial
								</Typography>
								<Typography gutterBottom variant="body1" className={classes.cardDescription}>
									Lorem ipsum is are many variations of pass majy.
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</div>
			<Features2 />
			<Features3 />
		</div>
	);
}

export default Features;
