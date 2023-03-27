import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'store/contacts/api';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(fetchContacts());
    console.log(dispatch(fetchContacts()));
    dispatch(fetchContacts());
	}, []);

  return (
    <div
      style={{
        width: '800px',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: '#010101',
        margin: '40px auto',
      }}
    >
      <h1 className="title">Phonebook</h1>
      <ContactForm  />
      <h2 className="title">Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  )
}