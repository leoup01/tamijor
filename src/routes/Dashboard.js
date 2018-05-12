import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import withAuthorization from '../components/withAuthorization';
import { db } from '../firebase';

class DashboardPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null,
    };
  }

  componentDidMount() {
    db.onceGetUsers().then(snapshot =>
      this.setState(() => ({ users: snapshot.val() }))
    );
  }

  render() {
    const { users } = this.state;    	
    return (
      <div>
        <Navigation />
        <hr/>
        <h1>Dashboard</h1>
        <p>The Dashboard Page is accessible by every signed in user.</p>
      	{ !!users && <UserList users={users} /> }
      </div>
    );
  }
}

const UserList = ({ users }) =>
  <div>
    <h2>List of Usernames of Users</h2>
    <p>(Saved on Sign Up in Firebase Database)</p>

    {Object.keys(users).map(key =>
      <div key={key}>{users[key].username}</div>
    )}
  </div>
  
const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(DashboardPage);