import { Component } from 'react';
import Form from './form/form';
import FormPhonebook from './formPhonebook/formPhonebook';
import Filter from './filter/filter';
import styles from './form/form.module.css';


export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  handleSubmit = obj => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...obj }],
    }));
  };

  handleChange = e => {
    this.setState({ filter: e.target.value });
  };

  handleDeleteContacts = id => {
    this.setState({ contacts: this.state.contacts.filter(el => el.id !== id) });
  };

  filterPhonebookContacts = () => {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({contacts: parsedContacts})
    }
  };

  componentDidUpdate(prevProp, prevState) {    
    if(this.state.contacts !== prevState.contacts) { 

      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));

    }
  }; 

  render() {
    return (
      <div className={styles.box}>
        <div className={styles.boxPhone}>
          <h1 className={styles.titlePhone}>Phonebook</h1>
          <Form
            contacts={this.state.contacts}
            handleSubmit={this.handleSubmit}
          />
        </div>
        <div className={styles.contacts}>
          <h2 className={styles.titleContact}>Contacts</h2>
          <h2 className={styles.titleFind}>find contacts by name</h2>
          <Filter handleChange={this.handleChange} 
          filter={this.state.filter}
          />
          <FormPhonebook
            contacts={this.filterPhonebookContacts()}
            handleDeleteContacts={this.handleDeleteContacts}

          />
        </div>
      </div>
    
    );
  }
}