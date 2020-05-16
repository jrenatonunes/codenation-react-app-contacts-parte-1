import React from 'react';

class SearchButton extends React.Component {

    render = () => {
        return (
            <button className="filters__search__icon">
                <i className="fa fa-search"/>
            </button>
        );
    }
}

export default SearchButton;
