import React, { useState, useEffect } from 'react';
import moment from 'moment';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Grid from '@material-ui/core/Grid';

import './storyCard.css';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';

const StoryCard = ({ story, favorites, handleMarkFavorite }) => {
	const getImage = imageId => {
		if (imageId === 1) {
			return image1;
		} else {
			return image2;
		}
	};

	return (
		<Grid item xs={12} sm={6} md={4}>
			<Card>
				<CardMedia sx={{ height: 140 }} image={getImage(story.image)} />
				<CardContent>
					<Typography gutterBottom variant="h6" component="div">
						<a
							className="story__card"
							target="_blank"
							href={story.url}
						>
							{story.headline}
						</a>
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{`${story.author}  ${moment(story.date).format(
							'Do MMM, YY'
						)}`}
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<IconButton onClick={handleMarkFavorite(story.id)}>
						{favorites.includes(story.id) ? (
							<FavoriteIcon sx={{ color: '#ec2227' }} />
						) : (
							<FavoriteIcon />
						)}
					</IconButton>
					<IconButton>
						<ShareIcon />
					</IconButton>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default StoryCard;
