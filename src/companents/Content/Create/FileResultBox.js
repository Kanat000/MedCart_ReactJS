import fileResultStyle from './style/fileResultStyle.module.css'
import FileVisualizer from "./FileVisualizer";


function FileResultBox(props) {
    let Files = props.fileNames.map((file) => {
        return <FileVisualizer fileName={file}/>
    })
    return (
        <div className={fileResultStyle.container}>
            <div className={fileResultStyle.uploadedText}>
                Uploaded
            </div>
            <div className={fileResultStyle.resultBlock}>
                {Files}
            </div>
        </div>
    )
}

export default FileResultBox;