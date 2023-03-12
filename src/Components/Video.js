

let Video = ({time, channel, views, title, verified, id, children, deletePro, edit}) =>{
    console.log('Rendering Video')

    return(
    <>
        <div className="video-wrapper text-white d-inline-block me-4 position-relative">
            <h6 className="position-absolute top-0 end-0 border rounded-circle bg-white p-1" role='button' onClick={()=>deletePro(id)}>❌</h6>
            <button className="position-absolute rounded-pill border-0" onClick={()=>edit(id)}>🖋</button>
            <img src={`https://picsum.photos/id/${id}/200/100`} alt="Thumbnail" className="rounded mb-1 border"/>
            <h4 className="mb-0">{title}</h4>
            <h5 className="mb-0">{channel}{verified && '☑'}</h5>
            <h6 className="mb-0">{views} • {time}</h6>
            {children}
        </div>
    </>
    )
}

export default Video;
