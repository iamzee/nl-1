import axios from 'axios';

export const fetchStories = async () => {
	try {
		const { data } = await axios({
			method: 'GET',
			url: 'https://cors-anywhere.herokuapp.com/https://ace.qtstage.io/api/v1/collections/entertainment',
		});
		let stories = data.items.map(item => ({
			id: item.story.id,
			headline: item.story.headline,
			tags: item.story.tags.map(tag => tag.name),
			url: item.story.url,
			author: item.story['author-name'],
			date: item.story['updated-at'],
			image: Math.floor(Math.random() * 2) + 1,
		}));
		return stories;
	} catch (e) {
		console.log(e.response);
	}
};
