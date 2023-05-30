import cartStyle from './style/cart.module.css'

function MediaContent(props) {
    let pathName = (new URL(props.file)).pathname
    let doc_name = pathName.split('/')[5].split('%2F')[1]
    let doc_type = pathName.split('/')[5].split('.')[1]
    let imgDocTypes = ['jpg', 'jpeg', 'png', 'gif', 'svg', 'webp']
    if (imgDocTypes.includes(doc_type)) {
        return (
            <div className={cartStyle.media}>
                <img src={props.file} className={cartStyle.media_img} alt='media'/>
            </div>
        )
    } else if (doc_type === 'mp4') {
        return (
            <div className={cartStyle.media}>
                <video className={cartStyle.media_img} controls>
                    <source src={props.file} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
        )
    } else if (['mp3', 'wav', 'aac', 'webm'].includes(doc_type)) {
        return (
            <div className={cartStyle.media}>
                <audio controls src={props.file} style={{width: '100%'}}>
                    <a href={props.file}>
                        Download audio
                    </a>
                </audio>
            </div>
        )

    } else {
        return (
            <div className={cartStyle.file}>
                <div className={cartStyle.fileIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                         className="bi bi-file-earmark-post" viewBox="0 0 16 16">
                        {doc_type === 'pdf' ?
                            <path fill-rule="evenodd"
                                  d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"/>
                            : <path
                                d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm-1 4v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 11.293V7.5a.5.5 0 0 1 1 0z"/>
                        }
                    </svg>
                </div>
                <div className={cartStyle.fileName}>{doc_name}</div>
            </div>
        )
    }
}

export default MediaContent