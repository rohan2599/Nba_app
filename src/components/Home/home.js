import React from 'react';
import NewsSlider from '../Widgets/NewsSlider/slider';
import NewsList from '../Widgets/NewsList/newsList.js';


const Home=()=>{

		return (

		<div>
			<NewsSlider
			type = "featured"
			start = {0}
			end = {4}
			/>

			<NewsList
			type= "card"
			start = {4}
			amount = {4}
			loadMore = {true}
			/>
		</div>


			)
	


}


export default Home;