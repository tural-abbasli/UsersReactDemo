import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import UsersTable from './UsersTable';
import Loading from './Loading';
import './index.css';
import PostsTable from './PostsTable';

class App extends Component {
  state = {
    users:[],
    load:false,
    error:null,
    posts:[]
  };
  componentDidMount(){
    Promise.all([Axios.get('https://jsonplaceholder.typicode.com/users'),
    Axios.get('https://jsonplaceholder.typicode.com/posts')])
      .then(([res1,res2]) => {
        this.setState({users:res1.data,load:true,posts:res2.data})
      })
      .catch(err => this.setState({error:err}));
  }

  render() {
    if(this.state.load && this.state.users)
      return (
        <div className="ui container">
          <UsersTable data={this.state.users}></UsersTable>
          <PostsTable data={this.state.posts}></PostsTable>
        </div>
      );
    
    if(this.state.error)
      return <div><h1>Ouuuooooops something went wrong :((</h1></div>;

    return<Loading message="Loading ... "/>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
