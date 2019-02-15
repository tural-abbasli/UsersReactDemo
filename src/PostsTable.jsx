import React, {Component} from 'react';

class PostsTable extends Component {
    render() {
        return(
            <table className="ui selectable inverted table">
                <thead>
                    <tr>
                        <th>Post Title</th>
                        <th>Posts</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.data.map(post => {
                            return(
                                <tr key={post.id}>
                                    <td>{post.title}</td>
                                    <td>{post.body}</td>
                                </tr>            
                            );
                        })
                    }
                </tbody>
            </table>   
        )
    }
}

export default PostsTable;