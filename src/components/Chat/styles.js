import styled from 'styled-components';

export const ChatContainer = styled.div`
    flex: 1;
    color: #424242;
    background-color: #f1f5f8;
    overflow-y: scroll;
`;

export const ChatSection = styled.div`
    margin-top: 60px;
    display: flex;
    align-items: center;
    padding: 25px;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
    padding-right: 30px;
    padding-left: 45px;

    & > div{
        display:flex;
        align-items:center;
        margin-bottom: 3px;

        & > h4{
            display: flex;
            align-items:center;
            column-gap:6px;
            margin-right: 14px;
            margin-top: 3px;
            font-size: 18px;
            cursor: pointer;

            &:hover{
                opacity: 0.8;
            }

            & > .MuiSvgIcon-root{
                font-size: 20px !important;
            }
        }

        & > p{
            display: flex;
            align-items:center;
            column-gap: 5px;
        }
    }
`;

export const ChatMessages = styled.div`
   margin-bottom: 80px;
`;


export const ChatForm = styled.form`
    display: flex;
    justify-content:center;
    margin-left: 70px;
   
    > input {
        border-radius: 25px;
        width: 800px;
        height: 34px;
        text-indent: 2%;
        font-size: 16px;
        border: 2px solid lightgray;
        outline-width: 0px;
        position: fixed;
        bottom: 30px;

        &:disabled{
            background-color: white;
        }
    }

    > button{
        display: none;
    }
`;


export const MessageContainer = styled.div`
   display: flex;
   align-items: center;
   padding: 13px;
   margin-left: 20px;
   margin-top: 5px;

   & > div:nth-child(2){
       padding-left: 14px;

       & > h3{
           color: black;
           font-weight: 500;
           margin-bottom: 5px;
       }

        & > h3 > small{
            margin-left: 9px;
            font-size: 12px;
            color: gray;
        }
   }
`;















