import './ContactList.css'
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'store/phonebookSlice';

export const ContactList = () => {
    const dispatch = useDispatch()
    const phonebook = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.filter);

    console.log(phonebook);
    const findedContacts = phonebook.filter((element) => {
        return element.name.toLowerCase().includes(filter.toLowerCase())
    })

    return <div className='contacts'>
        <ul className="contact-list">
            <h2>Contacts</h2>
            {findedContacts.map(item => {
                return <li key={item.id} className='contact-item'>
                    <span>{item.name}:</span>
                    <span className='number'>{item.number}</span>
                        <button type="button" className='deleteBtn' name={item.name} onClick={()=>{dispatch(removeContact(item.id))}}>Delete contact</button>
                    </li>
            })}
        </ul>
    </div>
}