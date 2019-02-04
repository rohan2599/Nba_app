import React ,{Component} from 'react';
import {CSSTransition , TransitionGroup} from 'react-transition-group';
import {Link} from 'react-router-dom';
import axios from 'axios';
import styles from './newsList.css';

import {URL} from '../../../config.js';
import Button from '../Buttons/button.js';



class NewsList extends Component{

		state ={
			items : [],
			start : this.props.start,
			amount : this.props.amount,
			end : this.props.start + this.props.amount

		}


			componentWillMount(){
			this.request(this.state.start,this.state.end)
		}


		request = (start,end)=>{
			axios.get(`${URL}/articles?_start=${this.state.start}&_end=${this.state.end}`).
			then( result=>{
				this.setState({
					items:[...this.state.items,...result.data]
				})
			})
		}

		loadMore = ()=>{
			let end = this.state.end + this.state.amount;
			this.request(this.state.end,end);
		}

	
		renderNews =(type) =>{
			let template = null
				switch(type){
					case('card'):
						template = this.state.items.map((item,i)=>(

							<CSSTransition
								classNames = {{
									enter : styles.newsListWrapper,
									enterActive : styles.newsListWrapper_Active
								}}
								timeout = {500}
								key = {i}

							>
							<div>
							<div className ={styles.newsItems}>
							<Link to ={`articles/${item.id}`}>
							<h2>{item.title}</h2>
							</Link>
							</div>
							</div>
							</CSSTransition>

							))
						break;
					default:
						template = null;
						 
				}


				return template;

		}


	render(){
		console.log(this.state.items);
		return (

			<div style={{marginTop:"22px"}}>
			<TransitionGroup
			component = "div"
			className = "List"
			>
			{this.renderNews(this.props.type)}
			</TransitionGroup>
			<Button
				type = "loadmore"
				loadMore ={()=>{this.loadMore()}}
				cta = "Load More News"
			/>
	
		
			</div>


			)
	}
}



export default NewsList;