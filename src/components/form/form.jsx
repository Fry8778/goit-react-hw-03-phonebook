import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import styles from './form.module.css';


class Form extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const { handleSubmit, contacts } = this.props;
    const id = nanoid();
    const obj = {
      id,
      name,
      number,
    };

    const check = contacts.find(el => el.name.toLowerCase() === name.toLowerCase());
    if (!check) {
      handleSubmit(obj);
      this.reset();
    } else {
      alert(`Error ${name} is already in contacts`);
    }
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmitForm} className={styles.form}>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={styles.label}>
          Number
          <input
            className={styles.input}
            type="tel"
            value={this.state.number}
            onChange={this.handleChange}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">add contact</button>
      </form>
    );
  }
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

export default Form;
