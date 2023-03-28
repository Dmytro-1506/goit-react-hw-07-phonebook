import { useEffect, useState } from 'react';
import './ContactList.css'
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'store/contacts/api';

export const ContactList = () => {
    const [findedContacts, setFindedContacts] = useState([])
    const dispatch = useDispatch()
    const phonebook = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.filter);
    
    useEffect(() => {
        setFindedContacts(() => {
            return phonebook.filter((element) => {
                if (element) {
                    return element.name.toLowerCase().includes(filter.toLowerCase())
                }
            })
        })
    }, [phonebook, filter]);

    return <div className='contacts'>
        <ul className="contact-list">
            {findedContacts.map(item => {
                return <li key={item.id} className='contact-item'>
                    <span>{item.name}:</span>
                    <span className='number'>{item.number}</span>
                        <button type="button" className='deleteBtn' name={item.name} onClick={()=>{dispatch(deleteContact(item.id))}}>Delete contact</button>
                    </li>
            })}
        </ul>
    </div>
}