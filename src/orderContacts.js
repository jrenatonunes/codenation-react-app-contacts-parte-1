const orderContacts =  (contacts, orderBy = 'name') => {
    

    switch (orderBy) {

        case 'country':
            return contacts.sort((contact, anotherContact) => 
            (contact.country < anotherContact.country ? -1 : contact.country > anotherContact.country ? 1 : 0));

        case 'company':
            return contacts.sort((contact, anotherContact) => 
            (contact.company < anotherContact.company ? -1 : contact.company > anotherContact.company ? 1 : 0));

        case 'department':
            return contacts.sort((contact, anotherContact) => 
            (contact.department < anotherContact.department ? -1 : contact.department > anotherContact.department ? 1 : 0));

        case 'admissionDate':
            return contacts.sort((contact, anotherContact) => 
            (contact.admissionDate < anotherContact.admissionDate ? -1 : contact.admissionDate > anotherContact.admissionDate ? 1 : 0));

        default: 
            return contacts.sort((contact, anotherContact) => 
            (contact.name < anotherContact.name ? -1 : contact.name > anotherContact.name ? 1 : 0));
            
    }

}


export default orderContacts;
