import { useEffect, useState } from "react";

function AddVideo({addProp, editableState, update}) {

    function initialState(){
        return {
            views: '10K',
            time: '10 Days Ago',
            verified: false,
            channel: '',
            title: ''
        }
    }

    const [read, setRead] = useState(initialState());

    function handleChange(event){
        event.stopPropagation();
        setRead({...read, [event.target.name]:event.target.value})
    }

    function handleSubmit(event){
        event.stopPropagation();
        event.preventDefault();
        editableState ? update(read) : addProp(read);
        setRead(initialState());

    }

    useEffect(() => {
        if(editableState){
            setRead(editableState)
        }
    }, [editableState])
    

    return(
        <form className="mb-4">
            <input value={read.channel} type="text" name="channel" onChange={handleChange} placeholder="Channel Name"/>
            <input value={read.title} type="text" name="title" onChange={handleChange} placeholder="Video Title"/>
            <input type="submit" value={editableState ? 'Save Edit' : 'Add'} onClick={handleSubmit}/>
        </form>
    )
}

export default AddVideo;
