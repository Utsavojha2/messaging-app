import React from 'react'
import LabelImportantRoundedIcon from '@material-ui/icons/LabelImportantRounded';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import {selectChannel, getChannel} from '../../features/channelSlice';
import {useDispatch, useSelector} from 'react-redux';
import * as Styled from './styles';

const Channel = ({id, data, remove}) => {
    const currentChannelid = useSelector(getChannel);
    const dispatch = useDispatch();

    const onChannelClick = (e) => {
        dispatch(selectChannel({channelId : id}))
    }

    return (
        <section> 
            <Styled.ChannelItem current={currentChannelid === id ? true : false} onClick={onChannelClick}>
                <LabelImportantRoundedIcon />
                <p>{data.channelName}</p>
            </Styled.ChannelItem> 
            <CancelRoundedIcon className="channelCancel" onClick={() => remove(id)} />
        </section>
    )
}

export default Channel




