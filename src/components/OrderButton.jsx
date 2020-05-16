import React from 'react';

class OrderButton extends React.Component {


	handleChangedSearchText = (event) => {
		event.preventDefault();
		const returnClickedButton = this.props.onclick;
		returnClickedButton(this.props.name);
	}


    render = () => {

        const name = this.props.name;
        const description = this.props.description;
        const selected = this.props.selected || false;


        let classesButton = "filters__item";
        if ( selected ) {
            classesButton += " is-selected";
        }


        return (
            <button 
            key={name}
            className={classesButton}
            onClick={this.handleChangedSearchText}>
                {description} <i className="fas fa-sort-down" />
            </button>            
        );
    }

}

export default OrderButton;
