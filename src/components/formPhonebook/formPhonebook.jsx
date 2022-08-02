import PropTypes from 'prop-types';
import styles from '../form/form.module.css';

const FormPhonebook = ({ contacts, handleDeleteContacts }) => {
  return (
    <ul className={styles.contact}>
      {contacts.map(el => (
          <li key={el.id} className={styles.contactList}>
            <p className={styles.conParagraph}>
              {el.name}: <span>{el.number}</span>
            </p>
            <button
              className={styles.btn}
              type="button"
              onClick={() => handleDeleteContacts(el.id)}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

FormPhonebook.propTypes = {
  contacts: PropTypes.array.isRequired,
  handleDeleteContacts: PropTypes.func.isRequired,
};

export default FormPhonebook;
