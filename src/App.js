import "./App.css";
import DB from "./Data/Data";
import AddVideo from "./Components/AddVideo";
import { useState, useReducer } from "react";
import VideoList from "./Components/VideoList";

function App() {
  console.log('Rendering App');

  // const [video, setVideo] = useState(DB)

  const [ editVideo, SetEditVideo] = useState(null)

  function videoReducer(video, action){
    switch(action.type){
      case 'ADD':
        return [...video, {...action.payload, id: video.length}]
      case 'DELETE':
        return video.filter((video)=>action.payload !== video.id);
      case 'UPDATE':
        console.log(action.payload.id)
        const index = video.findIndex(video=>video.id === action.payload.id)
        let newVid = [...video]
        newVid.splice(index,1,action.payload.id)
        SetEditVideo(null);
        return newVid;
      default:
        return video;
    }
  }
  const [video, dispatch] = useReducer(videoReducer, DB)

  function edit(id){
    SetEditVideo(video.find(video=>video.id === id));
  }

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <AddVideo dispatch={dispatch} editableState={editVideo}></AddVideo>
            <VideoList dispatch={dispatch} videoState={video} editProp={edit}></VideoList>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
