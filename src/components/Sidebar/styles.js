import styled from 'styled-components';

export const SidebarContainer = styled.div`
  flex: 0.3;
  color: white;
  background-color: black;
  margin-top: 59px;
  border-top: 1px solid lightgray;
  max-width: 271px;
  overflow-y: ${({channels}) => channels > 3 ? 'scroll' : 'hidden'};
  overflow-x: hidden;
  /* padding-right: 15px; */


::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 ::-webkit-scrollbar-thumb {
  background: gray; 
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: darkgray; 
}

  & > *{
      margin-left: 32px;
  }

  & > hr {
      margin: 0px;
      border: none;
      border-top: 1px solid lightgray;
    }
`;

export const SidebarHeader = styled.div`
    display : flex;
    align-items: center;
    column-gap: 15px;
    margin-top: 12px;
    margin-bottom : 12px;
    padding: 5px 0;

    & > div:nth-child(1){
        
        & > h4{
            font-size: 16px;
            margin-bottom: 5px;
        }

        & > small{
            margin-left: 10px;

            & > span{
                margin-right: 2px;
                display: inline-block;
                width: 8px;
                height: 8px;
                background-color: green;
                border-radius: 50%;
            }
            
            &:hover{
                cursor: pointer;
                text-decoration: underline;
            }
        }
    }

    & > div:nth-child(2){
       background-color: white;
       color: black;
       width : 35px;
       height : 35px;
       border-radius: 50%;
       display:grid;
       place-items: center;
       cursor: pointer;

       &:hover{
           opacity: 0.8;
       }
    }
`;

export const SidebarItems = styled.div`
    display: flex;
    flex-direction: column;

    & > section {
        position: relative;
    }

    & > section > div{
        display: flex;
        align-items:center;
        padding: 14px 0;
        column-gap: 10px;
        margin-left: -33px;

        & > .MuiSvgIcon-root{
            margin-left: 30px;
        }

        &:hover{
            background-color: lightgray;
            color: black;
            font-weight: bold;
            cursor: pointer;
        }

    }

    & > section > .MuiSvgIcon-root{
            position: absolute;
            top: 20px;
            right: 15px;
            width: 16px !important;
            height: 16px !important;
            color: white;

    }

    & > section > .MuiSvgIcon-root:hover{
            color: red;
            cursor: pointer;
    }

    & > div{
        display: flex;
        align-items:center;
        padding: 14px 0;
        column-gap: 10px;
        margin-left: -33px;
        position: relative;

        &:hover{
            background-color: lightgray;
            color: black;
            font-weight: bold;
            cursor: pointer;
        }

        & > *:nth-child(3){
            position: absolute;
            right: 15px;
            width: 15px !important;
            height: 15px !important;

            &:hover{
                color: blue;
            }
        }

        & > .MuiSvgIcon-root{
            margin-left: 32px;
            font-size: 22px !important;
        }

    }

    & > div:nth-child(6){
        border-top: 1px solid lightgray;
        border-bottom: 1px solid lightgray;
        padding: 17px 0;
    }

`;

export const ChannelItem = styled.div`
   /* background-color : ${({current}) => current ? "#f1f5f8" : 'black'};
   color : ${({current}) => current ? 'black' : 'white'}; */
   border-right : ${({current}) => current ? '5px solid green' : 'none'};

`;















