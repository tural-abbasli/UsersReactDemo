import React, {Component} from 'react';

class UsersTable extends Component {
    render() {
        return(
            <table className="ui selectable inverted table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th className="right aligned">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.data.map(user => {
                            return(
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td className="right aligned">{user.email}</td>
                                </tr>            
                            );
                        })
                    }
                </tbody>
            </table>   
        )
    }
}

export default UsersTable;