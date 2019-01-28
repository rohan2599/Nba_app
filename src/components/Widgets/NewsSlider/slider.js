import React , {Component} from 'react';
import axios from 'axios';
import SliderTemplates from './slider_templates.js';


class NewsSlider extends Component{

	state = {
		news:[]
	}

	componentWillMount(){

		axios.get(`http://localhost:3000/articles?_start=0&_end=4`)
		.then((res)=>{
			this.setState({
				news:res.data
			})
		})

	}

	render(){
		// console.log(this.state.news);
		return (

			<div>
			<SliderTemplates data={this.state.news} type="featured"/>
			</div>

			)
	}
}


export default NewsSlider;