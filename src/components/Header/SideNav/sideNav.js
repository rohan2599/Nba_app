import React from 'react';
import SideNav from 'react-simple-sidenav';

import SideNavItems from './sideNav_items';

const SideNavigation=(props)=>{


	return(

		<div>
			<SideNav
				navStyle={{
					background:'#242424',
					maxWidth:'220px'
			}}
				showNav={props.showNav}
				onHideNav={props.onHideNav}

			>
			<SideNavItems/>
			</SideNav>
		</div>


		)
}


export default SideNavigation;