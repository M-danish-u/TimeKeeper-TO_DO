import pro from "../../../../src/Assets/pro.png";
import ReactAudioPlayer from 'react-audio-player';
import Login from "../Login";
import { useState } from "react";

const Profile = () => {

  const [loginForm,setLoginForm]=useState(false)
  return (
    <div className=' min-h-[100dvh] w-full md:max-w-[350px] md:min-w-[400px] order-3 md:order-3  gap-6 px-4 md:px-12  md:py-8  flex flex-col'>
    <div className="flex w-full pt-8 pb-10  justify-between">
    <span className="flex flex-col  gap-2 ">
 <h1 className="font-bold text-2xl">Mark Collins</h1>
 <p className="font-semibold  text-[#f5b760]">My settings</p>
 </span>
 <div onClick={()=>setLoginForm(!loginForm)}>
 <img className="logobox w-16 h-16 relative rounded-full" src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=2000" />
 </div>
 </div>
 <div className={`${loginForm? 'opacity-100':'opacity-0'} duration-500 absolute z-10 top-32 right-0 `}>
           <Login />
          </div>
 <div className=" h-48 gap-6 g-green-300  bg-[#f9fbfd] flex-col  p-4 flex rounded-lg">
    <div className="flex justify-end">
 <span className="material-symbols-outlined text-slate-400 rounded-full p-[2px] ">menu</span>
 </div>
    <span className="flex gap-8 items-center">
<img className="w-16 h-16 rounded-xl" src="https://pbs.twimg.com/profile_images/1485050791488483328/UNJ05AV8_400x400.jpg" alt=""></img>
<span >
    <p className="text-xl font-semibold">Godzilla</p>
    <p>Eminem</p>
</span>
</span>
{/* <span className="flex-1"></span> */}
<ReactAudioPlayer
  src="my_audio_file.ogg"
  autoPlay
  controls
  className="w-full "
  
/>


 </div>
 <div className="w-full p-4  bg-[#f9fbfd] gap- g-red-200 rounded-lg flex flex-col   ">
 <div className="flex justify-end">
 <span className="material-symbols-outlined text-slate-400 rounded-full p-[2px] ">menu</span>
 </div>
 <p className="text-4xl">8:48 AM</p>
<div className="flex items-center gap-4" >
{/* <span className="flex-1"></span> */}

<p className="bg-white rounded-xl w-14 h-14 p-2 text-3xl">🌤️</p>

<p className=" text-sm text-[#4b4a4b]">Now is always sunny</p>
</div>
 </div>
 <div className="w-full p-4  gap-4  bg-[#f9fbfd] rounded-lg flex flex-col  ">
<h1 className=" text-3xl">Unsleash the freelance super power</h1>
<p className=" text-sm text-[#4b4a4b] max-w-[200px]">Unlimited task,premium features and much more</p>
<span className="flex items-center justify-between">
    <img src={pro} className="w-28 h-36"></img>
    <div   className="w-12 h-12 bg-[#f7d57e] rounded-xl font-semibold text-4xl flex items-center justify-center mt-8 text-white">
    <span className="material-symbols-outlined text-blue-950">arrow_forward</span>

    </div>

</span>
</div>

    </div>
  )
}

export default Profile