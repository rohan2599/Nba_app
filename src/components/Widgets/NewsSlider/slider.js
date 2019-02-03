import React , {Component} from 'react';
import axios from 'axios';
import SliderTemplates from './slider_templates.js';
import {URL} from '../../../config.js';

class NewsSlider extends Component{

	state = {
		news:[]
	}

	componentWillMount(){

		axios.get(`${URL}/articles?_start=${this.props.start}&_end=${this.props.end}`)
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
			<SliderTemplates data={this.state.news} type={this.props.type}/>
			</div>

			)
	}
}


export default NewsSlider;