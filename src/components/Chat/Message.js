import { Avatar } from '@material-ui/core';
import React from 'react'
import * as Styled from './styles';
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime';

const Message = ({data : {message, timestamp, user, userImg}}) => {
    dayjs.extend(relativeTime)
    const validTimestamp = new Date(timestamp?.toDate()).toUTCString()

    return (
        <Styled.MessageContainer>
            <Avatar src={userImg} alt="" />
            <div>
                <h3>
                    {user}
                    <small>{timestamp && dayjs(validTimestamp).fromNow()}</small>
                </h3>
                <p>{message}</p>
            </div>
        </Styled.MessageContainer>
    )
}

export default Message
