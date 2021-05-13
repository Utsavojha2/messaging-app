import styled from 'styled-components';

export const HeaderContainer = styled.div`
   display : flex;
   align-items: center;
   justify-content: space-between;
   padding : 12px 2px;
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   background-color: black;
   color: white;
   z-index: 100;

    & > div:nth-child(1) {
        flex : 0.25;
        display : flex;
        align-items : center;
        margin-left: 25px;

        & > *:nth-child(1){ 
        width: 35px !important;
        height: 35px !important;
        
            &:hover{
                cursor: pointer;
                opacity: 0.8;
            }
        }  

        & > .MuiSvgIcon-root{
            margin-left: auto;
            margin-right: 30px;
        }
    }

    & > div:nth-child(2){ 
        flex: 0.45;
        opacity: 1;
        display: flex;
        column-gap: 10px;
        align-items: center;
        background-color: white;
        padding : 0 30px;
        border-radius: 6px;
        border : 2px solid lightblue;
        height: 27px;

        & > input{
            background: transparent;
            outline-width: 0px;
            border: none;
            flex: 1;
            font-size: 16px;
        }

        & > .MuiSvgIcon-root{
            color : black;
            font-size: 19px !important;
        }
    }

    & > div:nth-child(3){
        flex: 0.3;
        display: flex;
        align-items: flex-end;

        & > .MuiSvgIcon-root{
            cursor: pointer;
            margin-right: 30px;
            margin-left: auto;
        }
    }
`;











