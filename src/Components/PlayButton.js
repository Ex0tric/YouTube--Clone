import { useState } from "react";

function PlayButton({onPlay, onPause}) {
	console.log('Rendering PlayButton')
	
	let [status, setStatus] = useState(false);

  function handleClick(event) {
    event.stopPropagation();
		status ? onPause() : onPlay();
		setStatus(!status);
  }

  return (
    <h6 onClick={handleClick} role="button">
      {status ? '⏸' : '▶' }
    </h6>
  );
}

export default PlayButton;
