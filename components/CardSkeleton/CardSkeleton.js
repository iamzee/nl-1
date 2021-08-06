import React from 'react';

import Grid from '@material-ui/core/Grid';
import Skeleton from '@material-ui/core/Skeleton';

const CardSkeleton = () => {
	return (
		<Grid container spacing={2}>
			<Grid item sm={4}>
				<Skeleton variant="rectangular" width={210} height={118} />
			</Grid>
			<Grid item sm={4}>
				<Skeleton variant="rectangular" width={210} height={118} />
			</Grid>
			<Grid item sm={4}>
				<Skeleton variant="rectangular" width={210} height={118} />
			</Grid>
		</Grid>
	);
};

export default CardSkeleton;
