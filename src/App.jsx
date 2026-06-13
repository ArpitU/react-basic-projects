import React, { useState } from 'react'
import unnamed from  './assets/unnamed.png'
const SubmitHandler = (e) => {
  e.preventDefault();

  setSavedNotes([...savedNotes, Note]);
  setNote("");
};


const heading =(e)=>{
  e.preventDefault();
  setHeading(e.target.value);
}
const note =(e)=>{
  e.preventDefault();

    if (note.trim() === "") return;

    setSavedNotes([...savedNotes, note]);
    setNote("");
  setNote(e.target.value);
}
const App = () => {const[Heading, setHeading] = useState("");
const[Note, setNote] = useState("");
const [savedNotes, setSavedNotes] = useState([]);
  return (
<div className='h-screen bg-black '>
      <form className= ' flex-row   p-10 justify-between text-white   border-be-white    ' >
        <input type="text"
         placeholder="Enter Heading"
         className='p-5 rounded-2xl w-90 border-2 outline-none'
       
         onChange={heading}
          />
          <br />
          <br />
        <textarea 
        placeholder="Enter Note"
         name ="" 
         class=""
         className='p-5 rounded-2xl h-48 w-90 text-white border-be-white outline-none border-2'
         
         onChange={note}
        >

         </textarea>
         <br />
         <br />
           <button onClick={SubmitHandler}
        type="submit"
        className='text-black  border-2 p-5 rounded-2xl text-center out-of-range: border-b-gray-700 justify-center bg-amber-100' >
          Add Note 
          </button> 
          <br/>
          
      </form>
      <div className='lg:w-1/2  bg-gray-900 p-10 absolute right-4.5 top-0.5 scroll-auto h-screen overflow-y-auto'>
      <h1 className= 'xl text-white text-4xl font-bold'>Your Notes</h1>
     
        <div className='flex flex-wrap gap-5 mt- h-full overflow-auto'>
      {savedNotes.map((item, index) => (
  <div
    key={index}
    className='h-52 w-40 rounded-2xl bg-white p-5 text-black overflow-auto'
  >
    {item}
  </div>
))}
        <div className= 'h-52 w-40 rounded-2xl bg-white p-5 text-black'></div>
        <div className= 'h-52 w-40 rounded-2xl bg-white p-5 text-black'></div>
        <div className= 'h-52 w-40 rounded-2xl bg-white p-5 text-black'></div>
        <div className= 'h-52 w-40 rounded-2xl bg-white p-5 text-black'></div>
        <div className= 'h-52 w-40 rounded-2xl bg-white p-5 text-black'></div>
        <div className= 'h-52 w-40 rounded-2xl bg-white p-5 text-black'></div>
      
      </div>
      </div>
      
</div>
   
  )    
}

export default App
