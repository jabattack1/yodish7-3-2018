// let url = 'http://api.funtranslations.com/translate/yoda.json'
// let keyAPI = 'trnsl.1.1.20130922T110455Z.4a9208e68c61a760.f819c1db302ba637c2bea1befa4db9f784e9fbb8'

var box2 = createReactClass({

	render: function() {

		return (
			<div className="chat-container2">
				<div className="messages" id="beauty2Box2">
				</div>
			</div>
		);
	},

	componentDidMount: function() {
		// console.log('box2');
		$('#beautyBox2').focus();
	},

	componentDidUpdate: function() {
		// $('#beautyBox2').focus();
		document.getElementById("beauty2Box2").scrollTop = document.getElementById("beauty2Box2").scrollHeight;
		console.log(this.state.messageList);
	},
});