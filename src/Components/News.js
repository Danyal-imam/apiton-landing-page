import React from 'react';
import {
	Grid,
	Button,
	makeStyles,
	createStyles,
	Typography,
	Card,
	CardContent,
	Container,
	SvgIcon,
	IconButton
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import CommentIcon from '@material-ui/icons/Comment';

const useStyles = makeStyles((theme) =>
	createStyles({
		startSection:{
			backgroundColor:'#f6f6fb'
		},
		newsHeading:{
			fontWeight:500,
			[theme.breakpoints.down('sm')]:{
				fontSize:'35px',
				fontWeight:400,
			}
		},
		
		section1: {
			textAlign: 'center',
			padding:'50px 0px 40px',
		},
		card: {
			borderRadius: '5px',
			padding: '0px',
			margin: '8px',

			'&:hover': {
				backgroundImage:
					'linear-gradient(to top, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%)'
			}
		},
		pix: {
			border: '2px solid #eee',
			borderRadius: '50%'
		},
		cardHeading: {
			fontWeight: 600
		},
		cardGroup: {},
		cardDescription: {
			textAlign: 'center',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			margin: '0 auto',
			padding: '20px',
			fontWeight: 700
		},
		blogImage: {
			width: '100%',
			height: 'auto',
			transition: 'transform 1s, filter 2s ease-in-out',
			ilter: 'blur(2px)',
			transform: 'scale(1.2)',
			'&:hover': {
				filter: 'blur(0)',
				transform: 'scale(1)'
			}
		},

		comment: {
			paddingTop: '45px',
			display: 'flex',
			justifyContent: 'space-evenly',
			alignItems: 'center',
			opacity: '0.8'
		},
		icon: {
			fontSize: '16px',
			color: '#fd632f'
		}
	})
);

const news = [
	{
		date: '20 Fab',
		comment: '2 comments',
		details: 'Leverage agile frame works to provide a synopsis for',
		image: 'http://layerdrops.com/apitonhtml/assets/images/blog/blog-1-1.jpg'
	},
	{
		date: '20 Fab',
		comment: '2 comments',
		details: 'Launch New Mobile App Marketing Pitfalls To Avoid',
		image: 'http://layerdrops.com/apitonhtml/assets/images/blog/blog-1-2.jpg'
	},
	{
		date: '20 Fab',
		comment: '2 comments',
		details: 'Bring to the table win-win survival strategies domination.',
		image: 'http://layerdrops.com/apitonhtml/assets/images/blog/blog-1-3.jpg'
	}
];

function News() {
	const classes = useStyles();

	return (
		<div className={classes.startSection}>
			<div className={classes.section1}>
				
				<Typography gutterBottom variant="subtitle1" >
					Latest News & Articles
				</Typography>
				<Typography gutterBottom variant="h2" className={classes.newsHeading}>
					Checkout What’s Going<br /> on in Our Blog
				</Typography>

			</div>
			<div>
				<Container maxWidth="lg">
					<Grid container justify="center" className={classes.cardGroup}>
						{news.map((item) => (
							<Grid item xs={12} sm={12} md={4}>
								<Card className={classes.root} variant="outlined" className={classes.card}>
									<CardContent>
										<img src={item.image} className={classes.blogImage} />
										<div className={classes.comment}>
											<Typography Typography variant="body1">
												<AccessTimeIcon className={classes.icon} /> {item.date}
											</Typography>
											<Typography Typography variant="body1">
												<CommentIcon className={classes.icon} /> {item.comment}
											</Typography>
										</div>
										<Typography gutterBottom variant="h6" className={classes.cardDescription}>
											{item.details}
										</Typography>
									</CardContent>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
			</div>
		</div>
	);
}

export default News;
