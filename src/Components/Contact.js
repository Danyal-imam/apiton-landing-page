import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
	Grid,
	Button,
	makeStyles,
	createStyles,
	Typography,
	TextField,
	Container,
	MenuItem,
	TextareaAutosize
} from '@material-ui/core';
AOS.init();

const useStyles = makeStyles((theme) =>
	createStyles({
		center: {
			textAlign: 'center',
			padding: '50px 0px 40px'
		},
		contactHeading: {
			fontWeight: 500,
			[theme.breakpoints.down('sm')]: {
				fontSize: '35px',
				fontWeight: 400
			}
		},
		inputText: {
			marginBottom: '20px',
			width: '98%',
			backgroundColor: '#f6f6fb'
		},
		message: {
			maxWidth: '100%',
			width: '98%',
			backgroundColor: '#f6f6fb',
			padding: '20px',
			boxSizing: 'border-box'
		},
		image: {
			maxWidth: '100%',
			height: 'auto'
		},
		btn: {
			boxShadow: '0 0 6px 0 rgba(157, 96, 212, 0.5)',
			border: 'solid 3px transparent',
			backgroundImage:
				'linear-gradient(to right, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%)',
			backgroundOrigin: 'border-box',
			backgroundClip: 'content-box border-box',
			boxShadow: '2px 1000px 1px #fff inset',
			marginTop: '20px',
			marginBottom: '45px'
		}
	})
);

function Contact() {
	const classes = useStyles();
	const [ currency, setCurrency ] = useState('Free Trial');
	const handleChange = (event) => {
		setCurrency(event.target.value);
	};
	return (
		<div>
			<Container maxWidth="lg">
				<div className={classes.center}>
					<Typography gutterBottom variant="subtitle1">
						Contact Now
					</Typography>
					<Typography gutterBottom variant="h2" className={classes.contactHeading}>
						Have Question?<br /> Write a Message
					</Typography>
				</div>
				<Grid container >
					<Grid item xs={12} sm={12} md={6}>
						<form
							noValidate
							autoComplete="off"
							data-aos="zoom-in-right"
							data-aos-easing="ease-in-sine"
						>
							<Grid container>
								<Grid item xs={12} sm={12} md={6}>
									<TextField
										id="outlined-basic"
										label="Name"
										variant="outlined"
										className={classes.inputText}
									/>
								</Grid>
								<Grid item xs={12} sm={12} md={6}>
									<TextField
										id="outlined-basic"
										label="Email"
										variant="outlined"
										className={classes.inputText}
									/>
								</Grid>

								<Grid item xs={12} sm={12} md={6}>
									<TextField
										id="outlined-basic"
										label="Subject"
										variant="outlined"
										className={classes.inputText}
									/>
								</Grid>
								<Grid item xs={12} sm={12} md={6}>
									<TextField
										id="standard-select-currency"
										select
										value={currency}
										onChange={handleChange}
										variant="outlined"
										className={classes.inputText}
									>
										<MenuItem value="Free Trial">Free Trail</MenuItem>
										<MenuItem value="Disscussion For">Disscussion For</MenuItem>
										<MenuItem value="pricing Query">Pricing Query</MenuItem>
									</TextField>
								</Grid>
							</Grid>

							<TextareaAutosize
								aria-label="minimum height"
								rowsMin={10}
								placeholder="Write Message"
								className={classes.message}
							/>
							<br />
							<Button size="large" className={classes.btn}>
								DISCOVER MORE
							</Button>
						</form>
					</Grid>
					<Grid item xs={12} sm={12} md={6} data-aos="zoom-in-left"
							data-aos-easing="ease-in-sine">
						<img
							src="https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
							className={classes.image}
							alt='contact'
						/>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}

export default Contact;
