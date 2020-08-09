import React from 'react';
import {
	Grid,
	Button,
	makeStyles,
	createStyles,
	Typography,
	Container
} from '@material-ui/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const useStyles = makeStyles((theme) =>
	createStyles({
		featureHeading: {
			fontWeight: 500,
			padding: '30px 0 30px 0px',
			[theme.breakpoints.down('sm')]: {
				fontSize: '35px',
				fontWeight: 400
			}
		},
		subHeading: {
			[theme.breakpoints.down('sm')]: {
				textAlign: 'center'
			}
		},
		image: {
			maxWidth: '100%',
			height: 'auto',
			paddingBottom: '20px'
		},
		center: {
			display: 'flex',
			justifyContent: 'space-around',
			alignItems: 'center'
		},
		sectionStart: {
			padding: '90px 0px 90px 0px',
			backgroundColor: '#f6f6fb'
		},
		btn: {
			color: '#8751fd',
			fontWeight: '550',
			padding: '15px 40px 15px 40px',
			boxShadow: '0 0 6px 0 rgba(157, 96, 212, 0.5)',
			border: 'solid 3px transparent',
			backgroundImage:
				'linear-gradient(to right, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%)',
			backgroundOrigin: 'border-box',
			backgroundClip: 'content-box border-box',
			boxShadow: '2px 1000px 1px #fff inset',
			margin: '50px 0px 50px 0px'
		},

		description: {
			opacity: 0.7
		}
	})
);

function Features3() {
	const classes = useStyles();

	return (
		<div className={classes.sectionStart}>
			<Container maxWidth="lg">
				<Grid container justify="center">
					<Grid item xs={12} sm={6}>
						<Typography gutterBottom variant="subtitle1" className={classes.subHeading}>
							Best Application
						</Typography>
						<Typography gutterBottom variant="h2" className={classes.featureHeading}>
							Powerful Application <br />for Your Projects
						</Typography>

						<Typography gutterBottom variant="h5" className={classes.description}>
							Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
							pariatur.
						</Typography>

						<Button variant="outlined" size="large" className={classes.btn}>
							DISCOVER MORE{' '}
						</Button>
					</Grid>
					<Grid item xs={12} sm={6}>
						<img
							src="http://layerdrops.com/apitonhtml/assets/images/resources/cta-2-moc-1.png"
							className={classes.image}
							data-aos="zoom-in-left"
							alt='rating'
						/>
						<img
							src="http://layerdrops.com/apitonhtml/assets/images/resources/cta-2-moc-2.png"
							className={classes.image}
							alt='rating'

						/>
						<img
							src="http://layerdrops.com/apitonhtml/assets/images/resources/cta-2-moc-3.png"
							className={classes.image}
							data-aos="zoom-out-down"
							alt='rating'

						/>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}

export default Features3;
