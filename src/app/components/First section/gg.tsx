import  React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AddTask,{state} from '../Add task/Addtask';
import { useSnapshot } from 'valtio';


interface Task {
  date: string;
  icon: string;
  title: string;
  category: string;
  description?: string[] | undefined;
  author: string;
  isPinned?: boolean;
  isComplete?: boolean;
  time: string;
  startTime?: string;
  endTime?: string;
  images?: File[] | null;
}
const TodayPinned = () => {

  const snapshot = useSnapshot(state);

  // const [calenderDate, setCalenderDate] = useState<Date | undefined>();
  // const [showOption, setShowOption] = useState<boolean>(false);
  const [showForm, setShowform] = useState<boolean>(false);
  // const [viewAll, setViewAll] = useState<boolean>(false);

  // pinned items toggle 
  const handleTogglePinned = (id: number) => {
    state.pinnedId = id
    state.arrData = snapshot.arrData.map((task) =>
        task.id === id ? { ...task, pinned: !task.pinned } : task
    );
};


  const handleDelete = (id:number) => {
    console.log('ok');
    
   state.deleteid = id
   state.arrData = snapshot.filter((del)=>del.id !== state.deleteid)
   setTask(state.arrData)
  };

  const handlePin = (id:number) => {
    console.log('ok');
    
   state.pinnedid = id
   state.arrData = snapshot.map((pin)=>pin.id === id ?{...pin,isPinned:!pin.isPinned}:pin)
   setTask(state.arrData)
  };

  const handleEdit =(work : Task)=>{
    state.selectedData=work;
    state.formToggle = true
    // setform(!form)
  }
// covert time AM PM
const formatTimeTo12Hour = (time: string) => {
  const [hour, minute] = time.split(":").map(Number);
  const amPM = hour >= 12 ? "PM" : "AM";
  const formattedHour = (hour % 12) || 12;
  const formattedMinute = minute.toString().padStart(2, "0");
  return `${formattedHour}:${formattedMinute} ${amPM}`;
};
 
const pinnedData = snapshot.arrData.filter((task) => task.isPinned);

const [calender,setCalender] = useState(new Date());
console.log('vvvv',calender);

const handleCalender=(e: React.FormEvent)=>{
  setCalender(e)
}

  return (
    <div className=' min-h-[100dvh] w-full md:max-w-[550px] md:min-w-[400px]  order-2 md:order-1 gap-6 bg-slate-50 px-4 md:px-12 py-4 md:py-8 flex flex-col'>
    <span className="flex items-center gap-2 ">
        <div className="logobox w-12 h-12 bg-[#f7d57e] font-semibold text-4xl flex items-center justify-center text-white">+</div>
 <h1 className="font-bold text-2xl">TimeKeeper</h1>
 </span>
 <div className="flex items-center justify-between  pt-10 ">
 <p className="text-xl">Weekly Pinned </p>
 <button className="font-semibold  text-[#f5b760]">View all</button>
 </div>
 
 { pinnedData.map((work)=>(

<div className="b-green-500 min-w-[340px] flex gap-4 ">
<input type="checkbox" className="w-5 " />
<div className=" w-full h- gap-5  bg-[#f0f7fe]  p-5 flex  rounded-lg">
<p className="bg-white w-14 h-14 rounded-xl p-2 text-3xl">{work.icon}</p>

<div className="g-red-200 gap-4 flex flex-col ">
  <div className='flex'>
  <p className="font-semibold ">{work.title}</p>
  <span className={`material-symbols-outlined text-sm  ml-2 rounded-full ${work.isPinned?'':'hidden'}`}>📌</span>

  </div>
<p className="text-sm pt-2 text-[#4b4a4b]">{work.date}</p>
{/* <p className="text-sm pt-2 text-[#4b4a4b]">10 Mar2023 - 10:30 AM</p> */}

{/* <span className="flex-1"></span> */}
{ work.description&&(<p className="text-sm max-w-[200px] text-[#4b4a4b]">{work.description}</p>
) }
<span className="flex">
{
  work.images?.map((img , index)=>(
<img key={index} className="w-12 h-12 rounded-full ml-[-8px]" src={img} />


  ))
}
</span>
</div>
<span className="flex-1"></span>
<span>

<div className="flex gap-[] items-center ">
  <span className="material-symbols-outlined b ml-2 rounded-full  "  onClick={()=>handleEdit(work)} >Edit</span>

  <span className="material-symbols-outlined cursor-pointer b ml-2 rounded-full  " onClick={()=>handleDelete(work.id)}>Delete </span>

<span className={`material-symbols-outlined text-sm  ml-2 rounded-full `} onClick={()=>handlePin(work.id)}>📌</span>
</div>
  {work.time&& !work.startTime && !work.endTime && (
<p>{work.time}</p>
  )}
   {work.startTime && work.endTime && (
   <span>
   <p className=" pl-2 w-max">{work.startTime}</p>
   <p className="text-sm pl-2 ">{work.endTime}</p>
</span>
)}  
</span>
</div>
</div>               
        ))
}

 <div className="w-full p-4 drop-shadow-xl   bg-white rounded-lg flex items-center gap-10">
 <div  className="w-16 h-16 bg-[#f7d57e] rounded-xl font-semibold text-4xl flex items-center justify-center text-white">+</div>
<p className="font-semibold">Add new weekly pin</p>
</div>
<div>
      <Calendar onChange={(e)=>handleCalender(e)} value={calender} className="w-full g-slate-400 text-[#f7d57e] rounded-2xl border-none" />
    </div>
    </div>
  )
}

export default TodayPinned
// upicolra.119342593@hdfcbank
// 18002026161
{/* <p className="text-sm pt-2 text-[#4b4a4b]">10 Mar2023 - 10:30 AM</p> */}
{/* <p className=" text-sm bg-[#f5b760] rounded-lg w-max px-4 text-white font-semibold">Appoint</p> */}

