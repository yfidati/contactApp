import { cleanup } from '@testing-library/react';
import { clear } from '@testing-library/user-event/dist/clear';
import React from 'react'



class AddContact extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            name: "",
            phone:"",
        }
    }
      submitForm = (event) =>{
        event.preventDefault();
        const contact ={
            name: this.state.name,
            phone: this.state.phone,
        }
        this.props.addContact(contact);
        this.setState({name: "", phone: ""})
      }
  render (){
    return(
        <div className='row my-5'>
            <div className="col-md-6 mx-auto card bg-white">
                <form onSubmit={(event) => this.submitForm(event)} 
                   method='post' className='p-2'>
                    <div className="form-group">
                        <input type="text" name='name'
                         className='form-control'
                         value={this.state.name}
                         onChange={(event) => this.setState({name : event.target.value})}
                         autoComplete='off'
                         placeholder='Nom et Prenom'
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" name='phone'
                        className='form-control'
                        value={this.state.phone}
                        onChange={(event) => this.setState({phone : event.target.value})}
                         placeholder='Telephone'
                         autoComplete='off'
                        />
                    </div>
                    <div className="form-group">
                        <input className='btn btn-primary'
                        type="submit" 
                         value='Valider'
                        />
                    </div>
                </form>
            </div>

        </div>
       )
  }
};
 

 
 export default AddContact;