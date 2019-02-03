import React from 'react';
import {Link} from 'react-router-dom';
import styles from './footer.css';
import {CURRENT_YEAR} from '../../config'

const footer = () =>{
	return(

		<div className={styles.footer}>
			<Link to='/' className={styles.image}>
				<img alt="nba logo" src="/images/nba_logo.png"/>
			</Link>
			<div className={styles.text}>
				@IIITV CRIC LEAGUE  {CURRENT_YEAR} All rights reserved.
			</div>
		</div>

		)
}


export default footer;