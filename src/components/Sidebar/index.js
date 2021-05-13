import React, {useState, useEffect} from 'react'
import CreateIcon from '@material-ui/icons/Create';
import * as Styled from './styles';
import BookmarksSharpIcon from '@material-ui/icons/BookmarksSharp';
import NotificationsActiveRoundedIcon from '@material-ui/icons/NotificationsActiveRounded';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import EventRoundedIcon from '@material-ui/icons/EventRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import ExpandLessRoundedIcon from '@material-ui/icons/ExpandLessRounded';
import db from '../../firebase';
import {auth} from '../../firebase';
import Channel from './Channel';

const Sidebar = ({channels, setChannels, user}) => {
    const [openChannels, setOpenChannels] = useState(true);

    const addChannel = () => {
        const channelName = prompt('Add a channel');
        if(channelName?.trim().length){
            db.collection('channels').add({
                channelName
            })
        }    
    }

    const removeChannel = (id) => {
        db.collection('channels').doc(id).delete();
        const ref = db.collection('channels').doc(id).collection('messages')
        ref.onSnapshot(snapshot => {
            snapshot.docs.map(document => ref.doc(document.id).delete())
        })
    }


    useEffect(() => {
        db.collection('channels').onSnapshot(snapshot => {
            setChannels(snapshot.docs.map(doc => ({
                id : doc.id,
                data: doc.data()
            })))
        })
    }, [])

    return (
        <Styled.SidebarContainer channels={channels.length}>
            <Styled.SidebarHeader>
                <div>
                  <h4>{user.email}</h4>
                  <small><span></span> {user.name}</small>
                </div>
                <div>
                  <CreateIcon />
                </div>
            </Styled.SidebarHeader>
            <hr />
            <Styled.SidebarItems>
                <div>
                    <NotificationsActiveRoundedIcon />
                    <p>Notifications</p>
                </div>
                <div>
                    <BookmarksSharpIcon />
                    <p>Bookmarks</p>
                </div>
                <div>
                    <EventRoundedIcon />
                    <p>Upcoming Events</p>
                </div>
                <div>
                    <GroupRoundedIcon />
                    <p>People & Users</p>
                </div>
                <div onClick={() => auth.signOut()}>
                    <SettingsRoundedIcon />
                    <p>Sign Out</p>
                </div>
                <div onClick={() => setOpenChannels(!openChannels)}>
                    {openChannels ? <ExpandMoreRoundedIcon/> : <ExpandLessRoundedIcon />}
                    <p>Channels</p>
                </div>
                {openChannels &&
                    <>
                        <div onClick={addChannel}>
                            <AddCircleOutlineRoundedIcon />
                            <p>Add Channel</p>
                        </div>
                        {channels.map(el => {
                            return <Channel key={el.id} {...el} remove={removeChannel} />
                        })}
                    </>
                }
            </Styled.SidebarItems>

        </Styled.SidebarContainer>
    )
}

export default Sidebar;

