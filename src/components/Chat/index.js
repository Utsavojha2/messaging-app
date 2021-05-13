import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons';
import InsertCommentSharpIcon from '@material-ui/icons/InsertCommentSharp';
import React, {useState,useRef, useEffect} from 'react'
import * as Styled from './styles';
import {useSelector} from 'react-redux';
import {getChannel} from '../../features/channelSlice';
import db from '../../firebase';
import firebase from 'firebase';
import Message from './Message';

const Chat = ({channels, user}) => {
    const [channelMessages, setChannelMessages] = useState([]);
    const inputRef = useRef(null);
    
    const messagesEndRef = useRef(null)
    const channelid = useSelector(getChannel);
    const currentChannel = channels?.find(el => el.id === channelid);

    const sendAMessage = (e) => {
        e.preventDefault()
        if(inputRef.current.value){
            db.collection('channels').doc(channelid).collection('messages').add({
                message : inputRef.current.value,
                timestamp : firebase.firestore.FieldValue.serverTimestamp(),
                user : user.name,
                userImg : user.img
            })
       }

        inputRef.current.value = '';
    }

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        if(channelid){
            db.collection('channels').doc(channelid).collection('messages').orderBy("timestamp" , "asc").onSnapshot(snapshot => {
                setChannelMessages(snapshot.docs.map(doc => {
                return {
                    id : doc.id,
                    data: doc.data()
                }}))
            })
        }
    }, [channelid])


    useEffect(() => {
        scrollToBottom();
    }, [channelMessages, channelid])

    return (
        <Styled.ChatContainer>
             <Styled.ChatSection>
                 <div>
                    <h4>
                     <InsertCommentSharpIcon/>
                    <strong>{currentChannel ? currentChannel.data.channelName : 'Select Channel'} </strong>
                    </h4>
                    <StarBorderOutlined />
                 </div>
                 <div>
                     <p>
                         <InfoOutlined /> Details
                     </p>
                 </div>
             </Styled.ChatSection>
             <Styled.ChatMessages>
                {channelMessages.map(el => {
                    return <Message key={el.id} data={el.data} />
                })}
                 <div ref={messagesEndRef} />
             </Styled.ChatMessages>
             <Styled.ChatForm>
                 <input ref={inputRef} disabled={!currentChannel} type="text" placeholder={`${currentChannel ? `Message #${currentChannel.data.channelName}` : 'Select a Room to message'}`} />
                 <button onClick={sendAMessage} type="submit">Submit</button>
            </Styled.ChatForm>
        </Styled.ChatContainer>
    )
}

export default Chat;



