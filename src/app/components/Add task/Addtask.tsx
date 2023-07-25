import React, { useEffect, useRef, useState } from "react";
import { proxy, useSnapshot } from "valtio";

interface Task {
  date: string;
  icon: string;
  id:string;
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

const AddTask: React.FC = () => {
  const snapshot = useSnapshot(state);

  const [date, setDate] = useState<string>("");
  const [id,setId]=useState <string>('')
  const [icon, setIcon] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [description, setDescription] = useState<string[]>([]);
  const [author, setAuthor] = useState<string>("");
  const [isPinned, setIsPinned] = useState<boolean>(false);
  const [isComplete, setIsComplete] = useState<boolean>(false);
  // const [tasks, setTasks] = useState<Task[]>([])
  const [time, setTime] = useState<string>("");
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
  const [images, setImages] = useState<File[] | null>([]);
  const refFile = React.useRef<HTMLInputElement>();
  const addTask = (e: React.FormEvent) => {
    e.preventDefault();



    const newTask: Task = {
      date,
      id,
      icon,
      title,
      time,
      startTime,
      endTime,
      category,
      description,
      author,
      isPinned,
      isComplete,
      images,
    };
    state.arrData.push(newTask);

    // setTasks( [...tasks, newTask])

    setDate("");
    setId('');
    setIcon("");
    setCategory("");
    setTitle("");
    setAuthor("");
    setDescription([]);
    setIsComplete(false);
    setIsPinned(false);
    setTime("");
    setStartTime("");
    setEndTime("");
    setImages([])
  };
 

 


    // Editing Form Page 
    useEffect(() => {
      if (snapshot.selectedData) {
          setId(snapshot.selectedData.id);
          setIcon(snapshot.selectedData.icon);
          setTitle(snapshot.selectedData.title);
          setTime(snapshot.selectedData.time);
          setStartTime(snapshot.selectedData.startTime);
          setEndTime(snapshot.selectedData.endTime);
          setDate(new Date(snapshot.selectedData.date).toISOString().split('T')[0]);
          setDescription([snapshot.selectedData.description]);
          setIsPinned(snapshot.selectedData.isPinned);
          // setColor(snapshot.selectedData.color);
          // setPersonal(snapshot.selectedData.personal);
      }
  }, [snapshot.selectedData]);

  // Editing Form Save 
  const handleSave = () => {
      if (!snapshot.selectedData) return;

      const updatedTodos = snapshot.arrData.map((datas) =>
          datas.id === snapshot.selectedData!.id
              ? {
                  ...snapshot.selectedData,
                  id,
                  icon,
                  title,
                  date: Date.parse(date),
                  time,
                  startTime,
                  endTime,
                  description,
                  isPinned,
                  // personal,
                  // color,
              }
              : datas
      ) as Task[];

      state.arrData = updatedTodos;
      state.selectedData = null;
      state.formToggle = false;

      setId('');
      setIcon('');
      setTitle('');
      setTime('');
      setStartTime('');
      setEndTime('');
      setDate(date);
      setDescription([]);
      setIsPinned(false);
      // setColor('');
      // setPersonal(false);
  };

  // Editing Form Cancel
  const handlecancel = () => {
      state.formToggle = false;
      state.selectedData = null;
      setId('');
      setIcon('');
      setTitle('');
      setTime('');
      setStartTime('');
      setEndTime('');
      setDate(date);
      setDescription([]);
      setIsPinned(false);
      // setColor('');
      // setPersonal(false);
  };

  return (
    <div className="bg-[#f2f2f8] p-4 rounded-lg shadow-lg">
      <form onSubmit={addTask}>
        <table className="w-full">
          <tbody>
            <tr>
              <td className="py-2">Date:</td>
              <td>
                <input
                  className=""
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td className="py-2">Id:</td>
              <td>
                <input
                  placeholder="Id"
                  className="p-1 px-3 rounded ring-1 ring-black"
                  type="text"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td className="py-2">Icon:</td>
              <td>
                <input
                  placeholder="Icon"
                  className="p-1 px-3 rounded ring-1 ring-black"
                  type="text"
                  value={icon}
                  onChange={(e) => setIcon(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td className="py-2">Title:</td>
              <td>
                <input
                  placeholder="Enter Title"
                  className="p-1 px-3 rounded ring-1 ring-black"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </td>
            </tr>

            <tr>
              <td className="py-2">Time:</td>
              <td>
                <input
                  placeholder="Time..."
                  className="p-1 px-3 rounded ring-1 ring-black"
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </td>
            </tr>

            <tr>
              <td className="py-2">Start Time:</td>
              <td>
                <input
                  placeholder=" start Time"
                  className="p-1 px-3 rounded ring-1 ring-black"
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                />
              </td>
            </tr>

            <tr>
              <td className="py-2">End Time:</td>
              <td>
                <input
                  placeholder=" End Time"
                  className="p-1 px-3 rounded ring-1 ring-black"
                  type="time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td className="py-2">Category:</td>
              <td>
                <input
                  placeholder="Enter Category"
                  className="p-1 px-3 rounded ring-1 ring-black"
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td className="py-2">Description:</td>
              <td>
                <input
                  placeholder="Enter Description"
                  className="p-1 px-3 rounded ring-1 ring-black"
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td className="py-2">Author:</td>
              <td>
                <input
                  placeholder="Enter Author"
                  className="p-1 px-3 rounded ring-1 ring-black"
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td className="py-2">Is Pinned:</td>
              <td>
                <input
                  className=""
                  type="checkbox"
                  checked={isPinned}
                  onChange={(e) => setIsPinned(e.target.checked)}
                />
              </td>
            </tr>
            <tr>
              <td className="py-2">Is Complete:</td>
              <td>
                <input
                  className=""
                  type="checkbox"
                  checked={isComplete}
                  onChange={(e) => setIsComplete(e.target.checked)}
                />
              </td>
            </tr>
            <tr>
              <td className="py-2">Image:</td>
              <td>
                <input
                  type="file"
                  ref={refFile}
                  onChange={(e) => {
                    const selectedFiles = e.target.files;
                    if (selectedFiles) {
                      const fileList = Array.from(selectedFiles);
                      setImages(fileList);
                    } else {
                      setImages([]);
                    }
                  }}
                  multiple
                  className="w-full px-2 py-1 rounded border border-gray-300"
                />
              </td>
            </tr>
           
          </tbody>
        </table>
        {snapshot.selectedData ? (
                    <span className="flex gap-5">
                        <button className="bg-[#f5bd6c] text-white px-4 py-2 mt-4 rounded hover:bg-[#f0a742]" onClick={handleSave}>
                            Save
                        </button>
                        <button className="bg-[#f5bd6c] text-white px-4 py-2 mt-4 rounded hover:bg-[#f0a742]" onClick={handlecancel}>
                            Cancel
                        </button>
                    </span>) : <button
                        type="submit"
                        className="bg-[#f5bd6c] text-white px-4 py-2 mt-4 rounded hover:bg-[#f0a742]"
                    >
                    Add Task
                </button>}
      </form>
    </div>
  );
};

export default AddTask;
export const state = proxy<{ arrData: Task[],deleteid:null | number,pinnedid:null | number,selectedData: Task | null,formToggle: boolean | null  }>({ arrData: [],deleteid: null,pinnedid:null, selectedData:null, formToggle:false});
