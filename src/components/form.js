import React, {useState} from 'react'


export default function Form() {
     const [userName, setUserName] = useState('');
     const handleChange = () => ();

  return (
    <div>
       
           <form>
             <input value={userName} onChange={handleChange}/>
           </form> 
    </div>

    

  )
}