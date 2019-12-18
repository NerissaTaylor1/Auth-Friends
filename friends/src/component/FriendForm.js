import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';
const initialFriend = {
    id: new Date(),
    name: "",
    age: '',
    email: '',
};
const FriendForm = props => {
    const [friend, setFriend] = useState(initialFriend);


    const handleChange = e => {

        setFriend({
            ...friend,
            [e.target.name]: e.target.value

        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("http://localhost:5000/api/friends", friend)
            .then(res => {
                console.log(friend)
                if (friend) {
                    setFriend({ friends: res.data, friend })
                }
            })
            .catch(error => {
                console.log(error)
            })
    }
    // const updateFriends = (id, updateFriend) => {
    //     axiosWithAuth().put(`http://localhost:5000/api/friends/${id}`, updateFriend)
    //         .then(res => console.log(res))

    // }
    // const deleteFriend = id => {
    //     axiosWithAuth().delete(`http://localhost:5000/api/friends/${id}`)
    //         .then(res => {
    //             console.log(res);
    //             console.log(res.data);
    //         })
    // }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder="name"
                    type="text"
                    name="name"
                    value={friend.name}
                    onChange={handleChange} />
                <input
                    placeholder="age"
                    type="number"
                    name="age"
                    value={friend.age}
                    onChange={handleChange} />
                <input
                    placeholder="email"
                    type="text"
                    name="email"
                    value={friend.email}
                    onChange={handleChange} />
                <button type="submit">Add Friend</button>
            </form>

        </div >
    )
}

export default FriendForm;