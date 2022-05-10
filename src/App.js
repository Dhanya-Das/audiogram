import './App.css';
import React from 'react';
import { Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import Audiogram from './Audiogram';


// const FileUploadComponent = () => {
//   const fileParams = ({ meta }) => {
//       return { url: 'https://httpbin.org/post' }
//   }
//   const onFileChange = ({ meta, file }, status) => { 
//       console.log(status, meta, file) 
//   }
//   const onSubmit = (files, allFiles) => {
//       allFiles.forEach(f => f.remove())
//   }
//   const getFilesFromEvent = e => {
//       return new Promise(resolve => {
//           getDroppedOrSelectedFiles(e).then(chosenFiles => {
//               resolve(chosenFiles.map(f => f.fileObject))
//           })
//       })
//   }
//   const selectFileInput = ({ accept, onFiles, files, getFilesFromEvent }) => {
//       const textMsg = files.length > 0 ? 'Upload Again' : 'Select Files'
//       return (
//           <label className="btn btn-danger mt-4">
//               {textMsg}
//               <input
//                   style={{ display: 'none' }}
//                   type="file"
//                   accept={accept}
//                   multiple
//                   onChange={e => {
//                       getFilesFromEvent(e).then(chosenFiles => {
//                           onFiles(chosenFiles)
//                       })
//                   }}
//               />
//           </label>
//       )
//   }
//   return (
//       <Dropzone
//           onSubmit={onSubmit}
//           onChangeStatus={onFileChange}
//           InputComponent={selectFileInput}
//           getUploadParams={fileParams}
//           getFilesFromEvent={getFilesFromEvent}
//           accept="image/*,audio/*,video/*"
//           maxFiles={5}
//           inputContent="Drop A File"
//           styles={{
//               dropzone: { width: 600, height: 400 },
//               dropzoneActive: { borderColor: 'green' },
//           }}            
//       />
//   );
// };

function App() {

  const handleSubmit= (e) => {
    e.preventDefault();
    // ???
  }
  
  return (
    <Audiogram/>
    // <div className="App">
    //   <div className='card-aud'>
    //       <h2 className='card-title-aud'>Create Your Audiogram</h2>
    //     <div className='card-body-aud'>
    //       <div className='file-upload-area'>
    //         <span className='upload-msg'>Your Audio File</span>
    //         {/* <Audiogram/> */}
    //         {/* <Form.Group controlId="formFileMultiple" className="mb-3">
    //           <Form.Control type="file" multiple />
    //         </Form.Group> */}
    //       </div>
    //     </div>
    //     <div className='card-section-area'>
    //       <div className='card design-card'>
    //         <div className='card-title title-name-aud'>Design</div>
    //         <div className='card-body'>
    //         <form onSubmit={e => {handleSubmit(e)}}>
    //             <Form.Group className="mb-3" controlId="formSpeakerName">
    //               <Form.Control type="text" placeholder="Speaker's Name" />
    //             </Form.Group>
    //             <br/>
    //             <label>Profile Pic</label>
    //             <br />
    //             <Form.Group controlId="formFileMultiple" className="mb-3">
    //               <Form.Control type="file" />
    //             </Form.Group>
    //             {/* <FileUploadComponent/> */}
    //             <br />
    //             <label>Background Image</label>
    //             <br />
    //             <Form.Group controlId="formFileMultiple" className="mb-3">
    //               <Form.Control type="file" />
    //             </Form.Group>
    //             <br/>
    //             <Form.Label htmlFor="exampleColorInput">Background Color</Form.Label>
    //               <Form.Control
    //                 type="color"
    //                 id="exampleColorInput"
    //                 defaultValue="#563d7c"
    //                 title="Choose your color"
    //               />
    //           </form>
    //         </div>
    //       </div>
    //       <div className='card audiogram-card'>
    //       <h2 className='card-title-aud'>Audiogram Preview</h2>
    //         <div className='card-body preview-area'>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
      
    // </div>
  );
}

export default App;
