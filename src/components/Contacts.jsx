/* eslint-disable no-unused-vars */
import React from 'react';
import ContactsHeader from './ContactstHeader';
import Contact from './Contact';

import orderContacts from '../orderContacts';


class Contacts extends React.Component {

	render = () =>  {

		const contacts = this.props.contacts;
		const orderBy = this.props.orderBy || 'name';

		const contactsOrdered = contacts && orderContacts(contacts, orderBy);

		return (
			<div className="container" data-testid="contacts">
				<section className="contacts">
					<ContactsHeader />
					{
						contactsOrdered &&
						contactsOrdered.map(contact =>  <Contact data={contact} key={contact.id} /> )
					}
				</section>
		  	</div>
		);
	}
}

export default Contacts;
