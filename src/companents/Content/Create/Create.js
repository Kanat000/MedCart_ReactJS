import createStyle from './style/create.module.css'
import {UploadButton} from 'react-uploader'
import {Uploader} from 'uploader'


function Create() {
    // Initialize once (at the start of your app).
    const uploader = Uploader({
        apiKey: "free" // Get production API keys from Upload.io
    });

// Configuration options: https://upload.io/uploader#customize
    const options = {multi: true};
    return (
        <div className={createStyle.container}>
            <div></div>
            <div className={createStyle.formContainer}>
                <form className={createStyle.form} method='post'>
                    <label className={createStyle.label} htmlFor='patient'>Choose a patient:</label>
                    <input type='text' className={createStyle.sampleInput} id='patient'/>
                    <label className={createStyle.label}>Upload a file:</label>
                    <UploadButton uploader={uploader}
                                  options={options}
                                  onComplete={files => alert(files.map(x => x.fileUrl).join("\n"))}>
                        {({onClick}) =>
                            <button onClick={onClick} className={createStyle.uploadFile}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                     className="bi bi-file-earmark-plus" viewBox="0 0 16 16">
                                    <path
                                        d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z"/>
                                    <path
                                        d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
                                </svg>
                                <br/>
                                <br/>
                                Upload a file...
                            </button>
                        }
                    </UploadButton>
                    <label className={createStyle.label} htmlFor='record_title'>Write a title of the medical
                        record:</label>
                    <input type='text' className={createStyle.sampleInput} id='record_title'/>
                    <label className={createStyle.label} htmlFor='record_description'>Write a specification of the
                        medical record:</label>
                    <textarea className={createStyle.textarea} id='record_description'></textarea>

                    <label className={createStyle.label} htmlFor='isSecret'>Can the patient see this card?</label>

                    <select className={createStyle.select} id='isSecret'>
                        <option selected='selected'>Yes, of course, it's not a secret</option>
                        <option>No, it's secret</option>
                    </select>
                    <button className={createStyle.createBtn}>Create</button>
                </form>
            </div>
            <div></div>
        </div>
    )
}

export default Create;