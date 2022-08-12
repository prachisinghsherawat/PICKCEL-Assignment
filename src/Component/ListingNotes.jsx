import { useState } from "react"
import { db } from "../firebase"
import { addDoc, collection, doc, getDocs } from "firebase/firestore"
import { useEffect } from "react"

export const ListingNotes = () => {

    const [titles , setTitles] = useState([])
    const titleCollection = collection(db , "titles")

    const [data , setData] = useState({
        title : "" ,
        notes : ""
    })

    useEffect(()=>{getData()},[])


    const HandleChange = (e) => {

        const {id,value} = e.target;
        setData({...data , [id] : value})
    }

    const HandleSubmit = async() => {

        await addDoc(titleCollection , data)
    }

    

    const getData = async() => {

        const data = await getDocs(titleCollection)
        setTitles(data.docs.map((el)=>(
            {...el.data() , id : doc.id}
        )))
        // console.log(data)
    }

    //console.log(titles)
    

    

    return(

        <>

        <input type="text" id="title" placeholder="enter a title" onChange={HandleChange}/>
        <input type="text" id="notes" placeholder="enter notes" onChange={HandleChange}/>
        <button onClick={HandleSubmit}>Create Title</button>

        {titles.map((el)=>(
            <div>
                <p> Title : {el.title}</p>
                <p> Notes : {el.notes}</p>
                
            </div>
        ))}
            
        </>
        
    )
}