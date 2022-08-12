import { useState } from "react"
import NotesDataService from "../Services/Notes"

export const AddNotes = () => {

    const [data , setData] = useState({
        title : "" ,
        notes : ""
    })

    const HandleChange = (e) => {

        const {id,value} = e.target;
        setData({...data , [id] : value})
    }

    const HandleSubmit = () => {
        
        NotesDataService.create(data)
    }

    return(

        <>

        <input type="text" id="title" placeholder="enter a title" onChange={HandleChange}/>
        <input type="text" id="notes" placeholder="enter notes" onChange={HandleChange}/>
        <button onClick={HandleSubmit}>ADD</button>

        </>
    )
}