import React from "react";
import styled from "styled-components";

const DivWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #1e1f21;
    color: #DCDDDD;
    padding: 16px;
`;
const TextWrapper = styled.span`
    font-size: 32px;
`;
// наслідування 
const TitleWrapper = styled(TextWrapper)`
    font-weight: bold;
`;
const ButtonWrapper = styled.button`
    border: unset;
    background-color: #565759;
    height: 20px;
    margin-right: 2px;
    border-radius: 4px;
    color: #E6E6E6;
    outline: unset;
    cursor: pointer;
`;
const ButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
`;
const TodayWrapper = styled(ButtonWrapper)`
    padding-right: 16px;
    padding-left: 16px;
    font-weight: bold;
`;
const Monitor = ({today, prevHandler, todayHandler, nextHandler}) => {
    return (
        <DivWrapper>
            <div>
                <TitleWrapper>{today.format('MMMM')}</TitleWrapper>
                <TextWrapper> {today.format('YYYY')}</TextWrapper>
            </div>
            <ButtonsWrapper>
                <ButtonWrapper onClick={prevHandler}> &lt; </ButtonWrapper>
                <TodayWrapper onClick={todayHandler}>Today</TodayWrapper>
                <ButtonWrapper onClick={nextHandler}> &gt; </ButtonWrapper>
            </ButtonsWrapper>
        </DivWrapper>
    )
}

export default Monitor