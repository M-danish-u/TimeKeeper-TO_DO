import './App.scss';
// import Addtask from './components/Add task/Addtask';
import AllFunction from './components/All section/AllFunction';
import TodayPinned from './components/First section/WeeklyPinned';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className='flex flex-col md:flex-row'>
      {/* <Addtask/> */}
      <TodayPinned/>
      <AllFunction/>
      <Profile/>
      </div>
  );
}

export default App;
