 // import dispatcher from './chat-dispatcher';
 // import {EventEmitter} from 'events';

// let eE = new EventEmitter();

let ExampleStore = new EventEmitter();

 const yodaStoreChangeEvent = 'yoda-store-change-event';

 class YodaStore {

 	constructor() {
 		// super();
 		
 		dispatcher.register(this.handleAction.bind(this));

 		// this._newMessage = '';

 		// this._messageList = [];
 		// {id: 1, content: "yo hoho"}
 	}

 	// get newMessage() {
 	// 	return this._newMessage;
 	// }

 	// get messageList() {
 	// 	return this._messageList;
 	// }
	
 	handleAction(action) {

 		console.log(action.type);

 		switch(action.type) {

 			case 'change-new-message':
 				this._newMessage = action.payload.content;
 				// this.emitChange();
 				break;

 			case 'submit-new-message':
 				this._checkSubmitNewMessage();
 				// this.emitChange();
 				break;
 		}
 	}

 	_checkSubmitNewMessage() {
 		if(this._newMessage.length > 0){
			let words = this._newMessage;
			// let languageSelect = $('.language').find(':selected').val();
			// console.log(words);
			sessionStorage.setItem("memory", words);
			let deleteRecall = sessionStorage.getItem("memory");



      		$.ajax({
	    		type:'POST',
	    		url:'/yodas',
	    		data: JSON.stringify({sentence:words}),
	    		contentType: 'application/json',
	   				success:function(data){
	   					loadPadawan();
	   					loadYoda();
	    			}
			});

			this._newMessage = '';
		}
 	}


 	emitChange() {
 		this.emit(yodaStoreChangeEvent);
 	}

 	addEventListener(callback) {
 		this.on(yodaStoreChangeEvent, callback);
 	}

 	removeEventListener(callback) {
 		this.removeListener(yodaStoreChangeEvent, callback);
 	}
 }

let yodaStore = new YodaStore();



