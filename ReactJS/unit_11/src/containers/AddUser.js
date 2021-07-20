import React from 'react';
import { useDispatch } from 'react-redux';
import { addNewUsers } from '../action';

const AddUser = () => {
    const dispatch = useDispatch();

    const formHandler = (event) => {
        event.preventDefault();
        console.log(event.target.elements);
        let data = event.target.elements;

        dispatch(addNewUsers(data.passport.value, data.name.value, data.age.value));
    };

    return (

        <div>
            <form onSubmit={formHandler}>
                <div>
                    <input name="passport" defaultValue="zalupaBoss" />
                </div>
                <div>
                    <input name="name" defaultValue="VladiVerb" />
                </div>
                <div>
                    <input name="age" defaultValue="29" />
                </div>
                <div>
                    <button type="submit">Add new User</button>
                </div>
            </form>
        </div>
    )
}

export default AddUser;
