// import dispatcher from './chat-dispatcher';

var yodaActionsCreators = {

	changeNewMessage(newMessage) {

		var action = {
			type: 'change-new-message',
			payload: {
				content: newMessage
			}
		};

		dispatcher.dispatch(action);

	},

	submitNewMessage() {

		var action = {
			type: 'submit-new-message'
		};

		dispatcher.dispatch(action);
	}

};

// export default yodaActionsCreators;