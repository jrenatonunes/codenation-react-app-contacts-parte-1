/* eslint-disable no-unused-vars */
import React from 'react';
import OrderButton from './OrderButton';
import SearchButton from './SearchButton';

class Filters extends React.Component {


	handleChangedSearchText = (event) => {
		event.preventDefault();
		const returnSearchText = this.props.returnSearchText;
		returnSearchText(event.target.value);
	}

	handleClickedOrderButton = async (buttonClicked) => {
		const returnOrderByButton = this.props.returnOrderBy;
		returnOrderByButton(buttonClicked);
	}


	render = () => {

		const orderBy = this.props.orderby;

		const ordeByStatus = {
			'name': false,
			'country': false,
			'company': false,
			'department': false,
			'admissionDate': false
		}

		ordeByStatus[orderBy] = true;
		

		return (

			<div className="container" data-testid="filters">
			<section className="filters">

			  <div className="filters__search">

				<input type="text" 
				className="filters__search__input" 
				placeholder="Pesquisar" 
				onChange={event => this.handleChangedSearchText(event)}/>

				<SearchButton />
			  </div>

			  <OrderButton 
			  name="name" 
			  description="Nome" 
			  selected={ordeByStatus['name']} 
			  onclick={this.handleClickedOrderButton}/>

			  <OrderButton 
			  name="country" 
			  description="País" 
			  selected={ordeByStatus['country']} 
			  onclick={this.handleClickedOrderButton}/>

			  <OrderButton 
			  name="company" 
			  description="Empresa" 
			  selected={ordeByStatus['company']} 
			  onclick={this.handleClickedOrderButton}/>

			  <OrderButton 
			  name="department" 
			  description="Departamento" 
			  selected={ordeByStatus['department']} 
			  onclick={this.handleClickedOrderButton}/>
			  
			  <OrderButton 
			  name="admissionDate" 
			  description="Data de adminisssão" 
			  selected={ordeByStatus['admissionDate']} 
			  onclick={this.handleClickedOrderButton}/>
			  
			</section>
		  </div>
  

		);
	}
}

export default Filters;
