import * as React from 'react';

// interface
interface UserMessage {
    name: string;
    message: string;
}

const Message = (props: UserMessage ): any => {
    return (
        <p>{props.name}, This is a {props.message}</p>
    );
}

export default Message;