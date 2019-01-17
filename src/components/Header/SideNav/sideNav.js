import React from 'react';
import SideNav from 'react-simple-sidenav';



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
			<div style={{color:'white'}}>OPTIONS</div>
			</SideNav>
		</div>


		)
}


export default SideNavigation;