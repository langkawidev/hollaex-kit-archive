import React, { Component } from 'react';
import classnames from 'classnames';
import { Scrollbars } from 'react-custom-scrollbars';
import  { cloneDeep } from 'lodash';
import { ChatMessage } from './';
import { Loader } from '../';
import { isLoggedIn } from '../../utils/token';

class ChatMessageList extends Component {
	state = {
		containerHeight: 0
	};

	componentDidUpdate(prevProps) {
		const lastMsg = cloneDeep(this.props.messages).pop();
		if(lastMsg && ((this.scrollbarsRef.getValues().top > 0.95) || (this.props.username === lastMsg.username)) ) {
			this.scrollbarsRef.scrollToBottom();
		}
	}

	componentWillReceiveProps(nextProps){
		const { chatIsClosed } = nextProps;
		if(this.props.chatIsClosed !== chatIsClosed) {
			this.scrollbarsRef.scrollToBottom();
		}
	}
	scrollToBottom = () => {
		if (
			this.scrollbarsRef.container.clientHeight < this.state.containerHeight
		) {
			this.setState({
				containerHeight: this.scrollbarsRef.container.clientHeight
			});
			this.scrollbarsRef.scrollToBottom();
		}
	};

	scrollUpdate = (values) => {
		this.scrollToBottom();
	};

	setScrollbarsRef = (el) => {
		if (el) {
			this.scrollbarsRef = el;
		}
	};

	componentDidMount() {
		this.setState({
			containerHeight: this.scrollbarsRef.container.clientHeight
		});

	}

	render() {
		const {
			messages,
			userType,
			chatInitialized,
			userInitialized,
			usernameInitalized,
			removeMessage
		} = this.props;

		return (
			<Scrollbars
				ref={this.setScrollbarsRef}
				className={classnames(
					'd-flex',
					'flex-row',
					'flex-column',
					'chat-message-list'
				)}
				renderThumbVertical={({ style, ...props }) => (
					<div
						{...props}
						style={{
							...style,
							backgroundColor: '#333333',
							opacity: '1'
						}}
					/>
				)}
				renderView={(props) => <div {...props} className="view" />}
				onUpdate={this.scrollUpdate}
			>
				{(chatInitialized && usernameInitalized) ||
				(!usernameInitalized && userInitialized) ||
				(chatInitialized && !isLoggedIn()) ? (
					messages.map(({ id, username, to, messageType, message, timestamp }, index) => (
						<ChatMessage
							key={index}
							id={id}
							username={username}
							ownMessage={username === this.props.username}
							to={to}
							userType={userType}
							messageType={messageType}
							messageContent={message}
							removeMessage={removeMessage}
							timestamp={timestamp}
						/>
					))
				) : (
					<Loader />
				)}
			</Scrollbars>
		);
	}
}

export default ChatMessageList;
