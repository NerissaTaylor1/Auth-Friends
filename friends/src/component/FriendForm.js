import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendForm = (props) => {
    const [newFriend, setNewFriend] = useState("");

    const addFriend = friend => {
        const newFriend = {
            id: new Date(),
            name: "",
            age: '',
            email: '',
            isPosting: false

        }
        setNewFriend([...props.friends], friend)
    }


    const handleChange = e => {
        setNewFriend({
            [e.target.name]: e.target.value

        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post("/friends", newFriend)
        addFriend(addFriend)
        setNewFriend({ isPosting: true });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder="name"
                    type="text"
                    name="name"
                    value={newFriend.name}
                    onChange={handleChange} />
                <input
                    placeholder="age"
                    type="text"
                    name="age"
                    value={newFriend.age}
                    onChange={handleChange} />
                <input
                    placeholder="email"
                    type="email"
                    name="email"
                    value={newFriend.email}
                    onChange={handleChange} />
                <button type="submit">Add Friend</button>
            </form>

        </div>
    )
}
export default FriendForm;