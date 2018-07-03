
let box1 = createReactClass({

	getInitialState: function() {
		return {
			newMessage: ''
		}
	},

	render: function() {

		return (
			<div className="chat-container">
				<div className="messages" id="beauty2">
					
				</div>
				<div className="message-input">
					<input 
						type="text"
						placeholder="Type Here Young Padawan Learner.."
						value={this.state.newMessage}
						onChange={this._handleChange}
						onKeyPress={this._enterMessage}
						id="beauty" 
						ref={this._focus}
					/>
				</div>
				<div className="message-button">
					<button onClick={this._submitMessage}>Submit</button>
				</div>

			</div>
		);
	},

	_focus: function(e) {
		e.focus();
	},

	_handleChange(event) {
		// console.log('XXXXXX');
		this.setState({
			newMessage: event.target.value
		});
		yodaActionsCreators.changeNewMessage(event.target.value);
		// this.setprops({
		// 	newMessage: event.target.value
		// });
	},

	_submitMessage: function() {

		yodaActionsCreators.submitNewMessage();
			this.setState({
				newMessage: ''
			});

	},

	_enterMessage: function(event) {
		if(event.charCode === 13){
			this._submitMessage();
			this.setState({
				newMessage: ''
			});
		}
	},


	componentDidUpdate: function() {
		document.getElementById("beauty2").scrollTop = document.getElementById("beauty2").scrollHeight;
	},
});