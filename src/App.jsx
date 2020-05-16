/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import React from 'react';
import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';
import filterContacts from './filterContacts';

import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      orderBy: 'name',
      contacts: [],
      contactsFiltered : []
    }
  }


  componentDidMount = () => {
    const urlApi = 'https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts';
    fetch(urlApi)
    .then((response) => response.json())
    .then((response) => this.setState( { contacts:  response, contactsFiltered: response } ));
  }


  onSearch = async (textToFilter)  => this.setState({contactsFiltered: filterContacts(this.state.contacts, textToFilter)});

  
  onOrderBy = async (orderButtonClicked)  => this.setState( { orderBy : orderButtonClicked });


  render = () => {

    return (
      <React.Fragment>

        <Topbar/>

        <Filters 
        orderby={this.state.orderBy} 
        returnSearchText={this.onSearch} 
        returnOrderBy={this.onOrderBy} />

        <Contacts 
        contacts={this.state.contactsFiltered} 
        orderBy={this.state.orderBy} />

      </React.Fragment>
    )
  }
}

export default App;
