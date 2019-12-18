import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Loader from "react-loader-spinner";
import FriendForm from "./FriendForm";

class FriendsList extends React.Component {
    state = {
        friends: []
    };
    componentDidMount() {
        this.getData();
    }
    getData = () => {
        axiosWithAuth()
            .get("http://localhost:5000/api/friends")
            .then(res => {
                console.log(res.data)
                this.setState({
                    friends: res.data
                })
            })
            .catch(err => console.log(err));
    }


    render() {

        return (

            <div className="key spinner">
                <Loader
                    type="Puff"
                    color="#204963"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs
                />
                <p>Loading Data</p>

                <div>
                    <FriendForm friends={this.state.friends} />

                    {this.state.friends.map(friend => {
                        return (<div className="friend-list" key={friend.id}>
                            <p>{friend.name}</p>
                            <p>{friend.age}</p>
                            <p>{friend.email}</p>
                        </div>

                        )
                    })

                    }
                </div>
            </div>

        )
    }
}
export default FriendsList;