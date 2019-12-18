import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Loader from "react-loader-spinner";
import FriendForm from "./FriendForm";

class FriendsList extends React.Component {
    state = {
        friends: []
    };
    intervalID;
    componentDidMount() {
        this.getData();

    }
    // componentWillUnmount() {
    //     /*
    // //       stop getData() from continuing to run even
    // //       after unmounting this component
    // //     */
    //     clearTimeout(this.intervalID);
    // }


    getData = () => {
        axiosWithAuth()
            .get("http://localhost:5000/api/friends")
            .then(res => {
                console.log(res.data)
                this.setState({
                    friends: res.data
                })
                // this.intervalID = setTimeout(this.getData.bind(this), 4000);

            })
            .catch(err => console.log(err));
    }
    addFriend = (friend) => {

        console.log(friend)
        this.setState(friend => [...this.state.friends, friend])
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
                    <FriendForm friends={this.state.friends} addFriend={this.addFriend} />

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