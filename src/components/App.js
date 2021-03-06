import moment, { weekdays } from 'moment';
import CalendarGrid from './CalendarGrid';
import Title from './Title';
import Monitor from './Monitor';
import styled from 'styled-components';
import { useState } from 'react';


const ShadowWrapper = styled.div`
  border-top: 1px solid #737374;
  border-right: 1px solid #464648;
  border-bottom: 1px solid #464648;
  border-left: 1px solid #464648;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 0 1px #1A1A1A, 0 8px 20px 6px #888;
`;

function App() {

  moment.updateLocale('en', {week:{dow: 1}});
  // const today = moment();
  const [today, setToday] = useState(moment())
  const startDay = today.clone().startOf('month').startOf('week');

  window.moment = moment;

  const prevHandler = () => {
    console.log('prev')
    setToday(prev => prev.clone().subtract(1, 'month'))
  };
  const todayHandler = () => {
    console.log('today')
    setToday(moment())
  };
  const nextHandler = () => {
    console.log('next')
    setToday(next => next.clone().add(1, 'month'))
  };

  return (
    <ShadowWrapper>
      <Title/>
      <Monitor 
      today={today}
      prevHandler={prevHandler}
      todayHandler={todayHandler}
      nextHandler={nextHandler}    
      />
      <CalendarGrid startDay={startDay} today={today}/>
    </ShadowWrapper>
  );
}

export default App;
