import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
class PostList extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	render() {
		return <div>PostList</div>;
	}
}

//const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
	fetchPosts: fetchPosts
};

export default connect(null, mapDispatchToProps)(PostList);
