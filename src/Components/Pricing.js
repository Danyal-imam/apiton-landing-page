import React from 'react';
import {
	Grid,
	Button,
	makeStyles,
	createStyles,
	Typography,
	Card,
	CardContent,
	CardHeader,
	CardActions,
	
	Container
} from '@material-ui/core';

const useStyles = makeStyles((theme) =>
	createStyles({
		'@global': {
			ul: {
				margin: 0,
				padding: 0,
                listStyle: 'none',
                paddingTop:'30px',
            
            },
           
        },
        
        desc: {
            lineHeight:'2.5',

        },
		cardPricing: {
			display: 'flex',
			justifyContent: 'center',
            alignItems: 'center',
            color:'#fd632f !important',
            paddingBottom:'20px',
            '&:hover':{
                color:'#fff'
            },
        },
        cardPricing2: {
			display: 'flex',
			justifyContent: 'center',
            alignItems: 'center',
            color:'#fff',
            paddingBottom:'20px'
        },
        cards: {
            margin: '10px',
            borderRadius:'10px',
            '&:hover':{
                color:'#fff',
                backgroundImage: 'linear-gradient( 65.4deg,  rgba(56,248,249,1) -9.1%, rgba(213,141,240,1) 48%, rgba(249,56,152,1) 111.1% )',
            },
        },
        middle:{
            margin: '10px',
            borderRadius:'10px',
            color:'#fff',
            backgroundImage: 'linear-gradient( 65.4deg,  rgba(56,248,249,1) -9.1%, rgba(213,141,240,1) 48%, rgba(249,56,152,1) 111.1% )',
        },
        priceSubHeading: {
            textAlign: 'center',
			color:'#fd632f',
			paddingTop:'60px',
        },
        priceHeading:{
            display:'flex',
            justifyContent:'center',
			alignItems:'center',
			textAlign: 'center',
			margin:'0 auto',
			paddingBottom:'30px',
			fontWeight:500,
			[theme.breakpoints.down('sm')]:{
				fontSize:'35px',
				fontWeight:400,
			}
		},
		btn:{
            boxShadow: '0 0 6px 0 rgba(157, 96, 212, 0.5)',
            border: 'solid 3px transparent',
			backgroundImage: 'linear-gradient(to right, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%)',
            backgroundOrigin: 'border-box',
            backgroundClip: 'content-box border-box',
            boxShadow: '2px 1000px 1px #fff inset',
            
            


        }
      
	})
);

const tiers = [
	{
		title: 'Basic pack',
		price: '59',
		description: [ 'Extra features', 'Lifetime free support', 'Upgrade option', 'Full access' ],
		buttonText: 'Choose Plane',
		buttonVariant: 'outlined'
	},
	{
		title: 'Standard',
		subheader: 'Most popular',
		price: '79',
		description: [ 'Extra features', 'Lifetime free support', 'Upgrade option', 'Full access' ],
		buttonText: 'Choose Plane',
		buttonVariant: 'contained'
	},
	{
		title: 'Ultimate Pack',
		price: '99',
		description: [ 'Extra features', 'Lifetime free support', 'Upgrade option', 'Full access' ],
		buttonText: 'Choose Plane',
		buttonVariant: 'outlined'
	}
];

function Pricing() {
	const classes = useStyles();

	return (
		<div>
			<Typography gutterBottom variant="subtitle1" className={classes.priceSubHeading}>
				Pricing Tables
			</Typography>
			<Typography gutterBottom variant="h2" className={classes.priceHeading}>
				Choose Pricing Plans Which<br /> Suits Your Needs
			</Typography>
			<Container maxWidth="lg" component="main">
				<Grid container alignItems="center">
					{tiers.map((tier) => (
						// Enterprise card is full width at sm breakpoint

						<Grid item key={tier.title} xs={12} sm={tier.title === 'Ultimate Pack' ? 12 : 6} md={4}>
							<Card className={tier.title !== 'Standard'?classes.cards :classes.middle} elevation={1}>
								<CardHeader
									title={tier.title}
									subheader={tier.subheader}
									titleTypographyProps={{ align: 'center' }}
									subheaderTypographyProps={{ align: 'center',}}
								/>
								<CardContent>
									<div className={tier.title !== 'Standard'?classes.cardPricing :classes.cardPricing2}>
										<Typography component="h2" variant="h3" >
											${tier.price}
										</Typography>
										<Typography variant="h6" >
											/mo
										</Typography>
									</div>
									<hr style={{ width: '100%' }} />
									<ul>
										{tier.description.map((desc) => (
											<Typography component="li" variant="subtitle1" align="center" key={desc} className={classes.desc}>
												{desc}
											</Typography>
										))}
									</ul>
								</CardContent>
								<CardActions>
									<Button fullWidth  color="primary" className={classes.btn}>
										{tier.buttonText}
									</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</div>
	);
}

export default Pricing;
