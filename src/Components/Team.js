import React from 'react';
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
			textAlign: 'center'
		},
		section1: {
			textAlign: 'center',
			padding:'60px 0px 30px'
		},
		teamHeading:{
			fontWeight:500,
			[theme.breakpoints.down('sm')]:{
				fontSize:'35px',
				fontWeight:400,
			}
		},
		card: {
			margin: theme.spacing(2),
			textAlign: 'center',
			borderRadius: '15px',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			padding: '30px',
			'&:hover': {
				backgroundImage:
					'linear-gradient(to top, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%)'
			}
		},
		pix: {
            border:'2px solid #eee',
			borderRadius: '50%'
		},
		cardHeading: {
			padding: '25px 0 5px',
			fontWeight: 600
		},
		cardGroup: {
			padding: '10px'
		},
		cardDescription: {
            paddingBottom:'25px'
        }
	})
);

const members = [
	{
		name: 'Nathaniel Ron',
		designation: 'App Designer',
		image: 'http://layerdrops.com/apitonhtml/assets/images/team/team-1-1.jpg'
	},
	{
		name: 'Ronald Parks',
		designation: 'App Designer',
		image: 'http://layerdrops.com/apitonhtml/assets/images/team/team-1-2.jpg'
	},
	{
		name: 'Rachal Walker',
		designation: 'App Designer',
		image: 'http://layerdrops.com/apitonhtml/assets/images/team/team-1-3.jpg'
	},
	{
		name: 'William Peter',
		designation: 'App Designer',
		image: 'http://layerdrops.com/apitonhtml/assets/images/team/team-1-4.jpg'
	}
];

function Feature() {
	const classes = useStyles();

	return (
		<div>
			<div className={classes.section1}>
				<Typography gutterBottom variant="subtitle1">
					Expert People
				</Typography>
				<Typography gutterBottom variant="h2" className={classes.teamHeading}>
					Meet Our Professional<br /> Team Members
				</Typography>
			</div>
			<div>
				<Grid container justify="center" className={classes.cardGroup} data-aos="zoom-in" duration='2000'>
					{members.map((item) => (
						<Grid item xs={12} sm={6} md={3} >
							<Card className={classes.root} variant="outlined" className={classes.card}>
								<CardContent className={classes.bg}>
									<Typography  variant="h6" className={classes.cardHeading}>
										{item.name}
									</Typography>
									<Typography gutterBottom variant="body1" className={classes.cardDescription}>
										{item.designation}
									</Typography>
									<img src={item.image} className={classes.pix}/>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</div>
		</div>
	);
}

export default Feature;
