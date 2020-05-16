const contactContainsText = (contact, text) => {
    return (
      contact.name.toLowerCase().includes(text) || 
      contact.company.toLowerCase().includes(text) || 
      contact.department.toLowerCase().includes(text) ||
      contact.country.toLowerCase().includes(text)  || 
      contact.admissionDate.toLowerCase().includes(text) || 
      contact.phone.toLowerCase().includes(text) 
      );
}



const filterContacts =  (contacts, text) => {
    return contacts.filter(contact => contactContainsText(contact, text.toLowerCase())
    );
}

export default filterContacts;
