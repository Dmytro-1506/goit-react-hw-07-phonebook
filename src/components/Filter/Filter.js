import { useDispatch } from "react-redux";
import { filterContacts } from "store/phonebookSlice";

export const Filter = () => {
    const dispatch = useDispatch();

    return <div>
        <p>Find contacts by name</p>
        <input className='find' name="findContacts" onChange={(e)=>{dispatch(filterContacts(e.target.value))}}></input></div>
}