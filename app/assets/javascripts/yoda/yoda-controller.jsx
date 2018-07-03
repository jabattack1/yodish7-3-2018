// import React from 'react'
// import chatStore from './chat-store';
// import ChatContainer from './chat-container.react';
// import ChatMetrics from './chat-metrics.react';


// var YodaController = createReactClass({

// 	getInitialState() {
// 		return this.getState();
// 	},

// 	getState() {
// 		return {
// 			newMessage: yodaStore.newMessage
// 		};
// 	},

// 	render() {
// 		// return <ChatContainer newMessage={this.state.newMessage} messageList={this.state.messageList} />;
// 		return (
// 			<div className='yodas-controller'>
// 				<YodaContainer {...this.state} />
// 			</div>
// 		);
// 	},

// 	componentDidMount() {
// 		yodaStore.addEventListener(this.handleChange);
// 	},

// 	handleChange() {
// 		this.setState(this.getState());
// 	},

// 	componentWillUnmount() {
// 		yodaStore.removeEventListener(this.handleChange);
// 	}

// })