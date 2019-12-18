import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
    state = {
        friends: []
    };
    componentDidMount() {
        this.getData();
    }
    getData = () => {
        axiosWithAuth()
            .get("/data")
            .then(res => {
                this.setState({
                    friends: res.data
                })
            })
    }
    return(
        <div>

        </div >
    )
}
export default FriendsList;