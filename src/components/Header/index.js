import { Avatar } from '@material-ui/core';
import { AccessTimeOutlined, Search } from '@material-ui/icons';
import React from 'react'
import AssignmentIcon from '@material-ui/icons/Assignment';
import * as Styled from './styles';
import {auth} from '../../firebase'

const Header = ({img}) => {
    return (
        <Styled.HeaderContainer>
            <div>
                <Avatar onClick={() => auth.signOut()} src={img} alt="" title="Log Out"/>
                <AccessTimeOutlined />
            </div>
            
            <div>
                <Search />
                <input type="text" placeholder="Search" />
            </div>

            <div>
              <AssignmentIcon />
            </div>
        </Styled.HeaderContainer>
    )
}

export default Header;









