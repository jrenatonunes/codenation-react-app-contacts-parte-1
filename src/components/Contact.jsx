import React from 'react';

class Contact extends React.Component {
  
  render = () => {

    const contact = this.props.data;

    return (

            <article className="contact" data-testid="contact">
              <span className="contact__avatar">
                <img src={contact.avatar} alt={contact.name}/>
              </span>
              <span className="contact__data">{contact.name}</span>
              <span className="contact__data">{contact.phone}</span>
              <span className="contact__data">{contact.country}</span>
              <span className="contact__data">{contact.admissionDate}</span>
              <span className="contact__data">{contact.company}</span>
              <span className="contact__data">{contact.department}</span>
            </article>
            
    );
  }
}

export default Contact;
