import React from 'react'
import { Card, CardContent, Grid, Typography } from '@mui/material'
import CountUp from 'react-countup'
import cx from 'classnames'

import styles from './CardComponent.module.css'

export const CardComponent = ({ className, cardTitle, value, lastUpdate, cardSubtitle }) => (
		<Grid item component={Card} xs={12} md={3} className={cx(styles.card, className)}> 
			<CardContent>
				<Typography color="textSecondary" gutterBottom>
					{cardTitle}
				</Typography>
				<Typography variant="h5" component="h2">
					<CountUp start={0} end={value} duration={2} separator="," />
				</Typography>
				<Typography color="textSecondary">
					{new Date(lastUpdate).toDateString()}
				</Typography>
				<Typography variant="body2" component="p">
					{cardSubtitle}
				</Typography>
			</CardContent>
      </Grid>
)

export default CardComponent;