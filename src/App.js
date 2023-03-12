import "./App.css";
import DB from "./Data/Data";

import AddVideo from "./Components/AddVideo";
import { useState } from "react";
import VideoList from "./Components/VideoList";

function App() {
  console.log('Rendering App');

  const [video, setVideo] = useState(DB)
  const [ editVideo, SetEditVideo] = useState(null)

  function add(addedVideo){
    setVideo([...video, {...addedVideo, id: video.length}])
  }

  function deleteVideo(id){
    setVideo(video.filter((video)=>id !== video.id))
  }

  function edit(id){
    SetEditVideo(video.find(video=>video.id === id));
  }

  function update(vid){
    console.log(vid.id)
    const index = video.findIndex(video=>video.id === vid.id)
    let newVid = [...video]
    newVid.splice(index,1,vid)
    setVideo(newVid);
  }

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <AddVideo addProp={add} editableState={editVideo} update={update}></AddVideo>
            <VideoList deleteProp={deleteVideo} videoState={video} editProp={edit}></VideoList>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
