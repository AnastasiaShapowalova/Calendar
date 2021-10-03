import React, { useState } from "react";
import styled from "styled-components";
import moment from "moment";

// обертка для всего календаря
const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 1px;
    background-color: ${props => props.isHeader ? '#202020' : 'gray'};
    ${props => props.isHeader && 'border-bottom: 1px solid gray'}
`;

// обертка для ячейки
const CellWrapper = styled.div`
    min-width: 140px;
    min-height: ${props => props.isHeader ? 24 : 80}px;
    background-color: ${props => props.isWeekend ? '#303030' : '#202020'};
    color: ${props => props.isSelectedMonth ? '#DDDDDD' : '#555759'};
`;

// обертка для строки
const RowInCell = styled.div`
    display: flex;
    justify-content: 
    ${props => props.justifyContent ? props.justifyContent : 'flex-start'};
    // indent ???
    ${props => props.pr && `padding-right: ${props.pr * 8}px`}
`;

// расположение дат
const DayWrapper = styled.div`
    height: 33px;
    width: 33px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2px;
`;

// подсветка текущего дня
const CurrentDay = styled.div`
    height: 100%;
    width: 100%;
    background: #f00;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2px;
`;

const CalendarGrid = ({startDay, today}) => {
    // в календаре по дефолту показуются 6 недель
    const totalDays = 42;
    const day = startDay.clone().subtract(1, 'day');
    // заполняем масив
    const daysArray = [...Array(42)].map(() => day.add(1, 'day').clone());
    const isCurrentDay = (day) => moment().isSame(day, 'day');
    const isSelectedMonth = (day) => today.isSame(day, 'month');
    // console.log(daysArray)
    return (
        // fragment - рендерит чилдрены, пропсыж не добавляет розметку
        <>
            <GridWrapper isHeader>
                {[...Array(7)].map((_, i) => (
                    <CellWrapper isHeader isSelectedMonth>
                        <RowInCell justifyContent = {'flex-end'} pr={1}>
                            {moment().day(i + 1).format('ddd')}
                        </RowInCell>
                    </CellWrapper>
                ))}
            </GridWrapper>
            <GridWrapper>
                {
                daysArray.map((dayItem) => (
                    // передаєм чи вихідний чи будній
                    <CellWrapper
                        // key={dayItem.format('DDMMYYYY')}
                        isWeekend={dayItem.day() === 6 || dayItem.day() === 0} 
                        key = {dayItem.unix()}
                        isSelectedMonth = {isSelectedMonth(dayItem)}
                    >
                        <RowInCell
                            justifyContent = {'flex-end'}
                        >
                            <DayWrapper>
                                {!isCurrentDay(dayItem) && dayItem.format('D')}
                                {isCurrentDay(dayItem) && 
                                <CurrentDay>{dayItem.format('D')}</CurrentDay>}
                            </DayWrapper>
                        </RowInCell>
                    </CellWrapper>
                )) 
                }
            </GridWrapper>
        </>
    )
}

export default CalendarGrid;