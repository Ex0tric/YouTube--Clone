import PlayButton from "./PlayButton";
import Video from "./Video";

function VideoList({videoState, dispatch, editProp}){

    return(
      <>
        {
          videoState.map((Videos, keys) => (
          <Video
            key={keys}
            title={Videos.title}
            channel={Videos.channel}
            views={Videos.views}
            time={Videos.time}
            verified={Videos.verified}
            id={Videos.id}
            dispatch={dispatch}
            edit={editProp}

          >
            <PlayButton
              onPlay={() => console.log(`${Videos.title} is being Played`)}
              onPause={() => console.log(`${Videos.title} Paused`)}
            />
          </Video>))
        }
      </>
    )
}

export default VideoList;