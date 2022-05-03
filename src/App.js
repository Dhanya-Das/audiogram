import './App.css';
import React from 'react';
import { Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {

  const handleSubmit= (e) => {
    e.preventDefault();
    // ???
  }
  
  return (
    <div className="App">
      <div className='card-aud'>
          <h2 className='card-title-aud'>Create Your Audiogram</h2>
        <div className='card-body-aud'>
          <div className='file-upload-area'>
            <span className='upload-msg'>Your Audio File</span>
            <Form.Group controlId="formFileMultiple" className="mb-3">
              <Form.Control type="file" multiple />
            </Form.Group>
          </div>
        </div>
        <div className='card-section-area'>
          <div className='card design-card'>
            <div className='card-title title-name-aud'>Design</div>
            <div className='card-body'>
            <form onSubmit={e => {handleSubmit(e)}}>
                <Form.Group className="mb-3" controlId="formSpeakerName">
                  <Form.Control type="text" placeholder="Speaker's Name" />
                </Form.Group>
                <br/>
                <label>Profile Pic</label>
                <br />
                <Form.Group controlId="formFileMultiple" className="mb-3">
                  <Form.Control type="file" multiple />
                </Form.Group>
                <br />
                <label>Background Image</label>
                <br />
                <Form.Group controlId="formFileMultiple" className="mb-3">
                  <Form.Control type="file" multiple />
                </Form.Group>
                <br/>
                <Form.Label htmlFor="exampleColorInput">Background Color</Form.Label>
                  <Form.Control
                    type="color"
                    id="exampleColorInput"
                    defaultValue="#563d7c"
                    title="Choose your color"
                  />
              </form>
            </div>
          </div>
          <div className='card audiogram-card'>
          <h2 className='card-title-aud'>Audiogram Preview</h2>
            <div className='card-body'>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
