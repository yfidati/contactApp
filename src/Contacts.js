import React from 'react';
import ContactItem from './ContactItem';
import AddContact from './AddContact';

class Contacts extends React.Component  {

constructor (props){
  super(props);
  this.state = {
    contact : [
      {
        "name": "tifo",
         phone: 626565232,
      },
      {
        "name": "fidati",
        phone: 626565232,
      },
      {
        "name": "lebyed",
        phone: 626565232,
      },
    ]
  }
}
addContact = (contact) =>  {
  let updatedContacts = this.state.contact;
  updatedContacts.push(contact);
  this.setState({contact : updatedContacts})
} ;

deleteContact = (name) =>  {
  let oldContacts = this.state.contact;
  let updatedContacts = oldContacts.filter((contact) => contact.name !== name) ;
  this.setState({contact : updatedContacts});
} ;


render (){
  return <div className="container">
  <AddContact 
  addContact={this.addContact}/>
  <div className="row my-5">
    <div className="col-md-6 mx-auto">
      <div className="card bg">
        <table className='table'>
          <thead>
            <tr>
              <th>Nom & Prenom </th>
              <th>Telephone </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contact.map((contact, index) => (
              <ContactItem  
              deleteContact={this.deleteContact} 
              key={index} 
              contact={contact}
              />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
};
}
 



export default Contacts;
