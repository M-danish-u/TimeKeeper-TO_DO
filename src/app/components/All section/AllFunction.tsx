// import AddTask from "../Add task/Addtask"
import { useEffect, useState } from "react"
import {  subscribe, useSnapshot } from "valtio";
import AddTask ,{state} from "../Add task/Addtask";

interface Task {
  date: string;
  id:string;
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

const AllFunction = () => {
  const [selectDate,setSelectDate] = useState(new Date())
 

  useEffect(()=>{
    state.arrData = snapshot.filter((del)=>del.id !== state.deleteid)


  },[state.deleteid,state.pinnedid])

  const handleChange =(view:number)=>{
    const changeDate =new Date(selectDate);
    changeDate.setDate(changeDate.getDate() + view);
    setSelectDate(changeDate)

  }
  


  const handleDelete = (id:number) => {
    console.log('ok');
    
   state.deleteid = id
   state.arrData = snapshot.filter((del)=>del.id !== state.deleteid)
   setTask(state.arrData)
  };

  const handlePin = (id:number) => {
    console.log('ok');
   state.pinnedid = id
   state.arrData = snapshot.map((pin)=>pin.id === id?{...pin,isPinned:!pin.isPinned}:pin)
   setTask(state.arrData)
  };

  const handleEdit =(work : Task)=>{
    state.selectedData=work;
    state.formToggle = true
    // setform(!form)
  }
  useEffect(() => {
    const toggleEditbtn = subscribe(state, () => {
        if (state.formToggle) {
            setform(state.formToggle);
        } else {
            setform(false);
        }
    });
    return () => toggleEditbtn();
}, [state.formToggle]);


const snapshot=useSnapshot(state.arrData)
const [ftask,setTask]=useState<Task []>([])

  const [form,setform]=useState(false)

  console.log('mmm',snapshot);

  useEffect(()=>{
    const updateTask= snapshot.filter((e)=>e.id).sort((a,b)=>
    {
      if (a.isPinned&& !b.isPinned) {
        return-1
      }
      if (!a.isPinned&& b.isPinned) {
        return 1
      }
      return 0
    })
    setTask(updateTask)
  },[snapshot,state.arrData,state.deleteid])

  return (
    <div className="w-full  g-slate-400 flex flex-col gap-4 px-4 md:px-16 order-1 md:order-2  md:py-8  g-red-400">

        <div className="g-yellow-300 pt-3 pb-9 g-red-300 min-w-full relative " >
            <span className="flex  b-green-400">
        <h1 className="text-4xl leading-10 " >Today' schedule</h1>
        <span className="flex-1 "></span>
        <div className="logobox w-16 h-16 bg-[#f7d57e]  text-white text-3xl flex items-center  justify-center font-semibold " onClick={()=>setform(!form)}>+</div>


        </span>
        <span className="flex  gap-3 items-center">
        <h1 className="text-4xl text-[#f7d57e]">{selectDate.toLocaleDateString(undefined,{
          weekday:"long",
          day:"numeric"
        })}</h1>
        <span className="material-symbols-outlined bg-slate-100 ml-8 rounded-full p-[2px]" onClick={()=>handleChange(-1)}>arrow_circle_left</span>

        <span className="material-symbols-outlined bg-slate-100 rounded-full p-[2px]" onClick={()=>handleChange(+1)}>arrow_circle_right</span>
        </span>
        </div>

        <div className="relative" >
        <div className={`${form? 'opacity-100':'hidden'} duration-500 absolute z-10 top-0 right-0 `}>
           <AddTask />
          </div>
        { ftask.map((work)=>(

<div className="b-green-500 min-w-[340px] flex gap-4 ">
<input type="checkbox" className="w-5 " />
<div className={` w-full  h- gap-5  bg-  p-5 flex  rounded-lg ${work.isPinned ? 'bg-[#f7d57e]':'bg-[#f9fbfd]' }`}>
<p className="bg-white w-14 h-14 rounded-xl p-2 text-3xl">{work.icon}</p>

<div className="g-red-200 gap-4 flex flex-col ">
  <div className="flex ">
<p className="font-semibold ">{work.title}</p>
<span className={`material-symbols-outlined text-sm  ml-2 rounded-full ${work.isPinned?'':'hidden'}`}>📌</span>
</div>
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
<span className="">
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


</div>

     
       

    </div>
  )
}

export default AllFunction


{/* <div className="b-green-500 min-w-[340px] flex gap-4 ">
<input type="checkbox" className="w-5 " />
  <div className="w-full p-5 drop-shadow-xl bg-[#f5b760]   gap-3 g-red-200 rounded-lg flex items-center  ">
<p className="bg-white rounded-xl p-2 text-3xl">⏰</p>

<p className="font-semibold">Woke up buddy </p>
<span className="flex-1"></span>
<p className="">7:00 AM</p>
</div>
</div> */}