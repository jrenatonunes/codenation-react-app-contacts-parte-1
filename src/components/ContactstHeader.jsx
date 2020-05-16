import React from 'react';

class ContactsHeader extends React.Component {

    render = () => {
        return (
            <article className="contact">
                <span className="contact__avatar"/>
                <span className="contact__data">Nome</span>
                <span className="contact__data">Telefone</span>
                <span className="contact__data">País</span>
                <span className="contact__data">Data de adminissão</span>
                <span className="contact__data">Empresa</span>
                <span className="contact__data">Departamento</span>
            </article>            
        );
    }
}

export default ContactsHeader;