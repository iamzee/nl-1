import React, { useState, useEffect } from 'react';

import StoryCard from '../components/storyCard/StoryCard';
import { fetchStories } from '../apis/stories';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import CardSkeleton from '../components/CardSkeleton/CardSkeleton';

const StoryPage = () => {
	const [input, setInput] = useState('');
	const [stories, setStories] = useState(null);
	const [filteredStories, setFilteredStories] = useState(null);
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const stories = await fetchStories();
			setStories(stories);
			setFilteredStories(stories);
		};

		fetchData();
	}, []);

	useEffect(() => {
		if (stories) {
			setFilteredStories(
				stories.filter(s =>
					s.headline.toLowerCase().includes(input.toLowerCase())
				)
			);
		}
	}, [input]);

	useEffect(() => {
		const favorites = localStorage.getItem('nl-1');
		if (favorites) {
			setFavorites(JSON.parse(favorites));
		} else {
			setFavorites([]);
		}
	}, []);

	const handleMarkFavorite = storyId => () => {
		if (favorites.includes(storyId)) {
			let newFav = favorites.filter(f => f !== storyId);
			setFavorites(newFav);
			localStorage.setItem('nl-1', JSON.stringify(newFav));
		} else {
			let newFav = favorites.concat([storyId]);
			setFavorites(newFav);
			localStorage.setItem('nl-1', JSON.stringify(newFav));
		}
	};

	return (
		<Box sx={{ padding: '24px' }}>
			<Typography gutterBottom variant="h5">
				Stories
			</Typography>
			<TextField
				fullWidth
				margin="normal"
				size="small"
				placeholder="Search stories"
				value={input}
				onChange={e => setInput(e.target.value)}
			/>
			{filteredStories ? (
				<>
					{filteredStories.length == 0 ? (
						<Typography variant="body2">
							No results for query {input}
						</Typography>
					) : (
						<Grid container spacing={3}>
							{filteredStories.map(s => (
								<StoryCard
									key={s.id}
									story={s}
									favorites={favorites}
									handleMarkFavorite={handleMarkFavorite}
								/>
							))}
						</Grid>
					)}
				</>
			) : (
				<CardSkeleton />
			)}
		</Box>
	);
};

export default StoryPage;
