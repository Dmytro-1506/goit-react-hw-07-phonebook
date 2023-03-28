import './ContactForm.css'
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, fetchContacts } from 'store/contacts/api';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items)
  
  const onSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      name: event.target.name.value,
      number: event.target.number.value
    }
    const isExist = () => {
      return contacts.find(contact => contact.name === newContact.name)
    }
    if (isExist()) {
      return alert(`${newContact.name} is already in contacts`)
    }
    dispatch(addContact(newContact));
    event.target.reset()
  };

  return <form className='form' onSubmit={(event) => { onSubmit(event) }}>
    <p className='form-title'>Name</p>
    <input
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
    />
    <p className='form-title'>Number</p>
    <input
      type="tel"
      name="number"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
    />
    <button className='form-btn' type='submit' >Add contact</button>
  </form>
}