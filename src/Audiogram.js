import React, { useState, useEffect, useRef } from 'react';
import { Form } from "react-bootstrap";
import { useReactToPrint } from "react-to-print";
import ReactAudioPlayer from 'react-audio-player';


var a;
var myInlineCss;

function Audiogram(){
    const ref = React.createRef();
    const [buttonName, setButtonName] = useState("Play");
    const [audio, setAudio] = useState();
    const [selectedFile, setSelectedFile] = useState()
    const [pfimage, setPfimg] = useState()
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current
    });

    const divRef = useRef(null);

    const [color, setColor] = useState('#ffffff');

    function onSetBackground(selectedColor) {
     if(imgData == null){
       divRef.current.style.background = selectedColor;
       setColor(selectedColor);
     }
      
    }
   

  useEffect(() => {
    if (a) {
      a.pause();
      a = null;
      setButtonName("Play");
    }
    if (audio) {
      a = new Audio(audio);
      a.onended = () => {
        setButtonName("Play");
      };
    }
    
  }, [audio]);

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
  
        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }
  

  const handleClick = () => {
    // if (buttonName === "Play") {
      a.play();
    //   setButtonName("Pause");
    // } else {
    //   a.pause();
    //   setButtonName("Play");
    // }
  };
  

  const addFile = (e) => {
    if (e.target.files[0]) {
      setAudio(URL.createObjectURL(e.target.files[0]));
    }
  };

  
  const [imgData, setImgData] = useState(null);
  const onChangePicture = e => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const onChangeprofilePicture = e => {
    if (e.target.files[0]) {
      
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setPfimg(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onPreviewclear = e => {
    setImgData(null)
  }

  if(imgData){
    myInlineCss = {
      backgroundImage: `url(${imgData})`,
      padding: '12px',
      backgroundColor: null
   }
 }else{
    myInlineCss = {
      backgroundColor: 'white',
      padding: '12px'
   }
 }

  return (
    <div className="App">
      <div className='card-aud'>
          <h2 className='card-title-aud'>Create Your Audiogram</h2>
        <div className='card-body-aud'>
          <div className='file-upload-area'>
            <span className='upload-msg'>Your Audio File</span>
            <input type="file" onChange={addFile} />
          </div>
        </div>
        <div className='card-section-area'>
          <div className='card design-card'>
            <div className='card-title title-name-aud'>Design</div>
            <div className='card-body'>
              <form>
                  <div className='profile-pic'>
                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Label>Profile Pic</Form.Label>
                      <Form.Control type="file" onChange={onChangeprofilePicture}/>
                    </Form.Group>
                  </div>

                  <div className='background-imag'>
                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Label>Background Image</Form.Label>
                      <Form.Control type="file" onChange={onChangePicture}/>
                    </Form.Group>
                    <div className='bg-img-preview'>
                      <button type="button" onClick={onPreviewclear} className="btn-close" aria-label="Close"></button>
                      <img className="playerProfilePic_home_tile" src={imgData} />
                    </div>
                  </div>

                  <div className='bg-color-picker'>
                    <Form.Label htmlFor="exampleColorInput">Background Color</Form.Label>
                    <div className='color-picker'>
                      <Form.Control
                        type="color"
                        id="exampleColorInput"
                        defaultValue={color}
                        onChange={(e) => onSetBackground(e.target.value)}
                      />
                      <span className='color-picker-val'>{color}</span>
                    </div>
                  </div>
              </form>
            </div>
          </div>
          <div className='card audiogram-card'>
          <h2 className='card-title-aud'>Audiogram Preview</h2>
            <div ref={componentRef}>
              <div className='card-body preview-area' style={myInlineCss} ref={divRef}>
                <div className='profile-avt-block'>
                  <img  className='profile-avatar' src={pfimage} /> 

                </div>
                <div className='audio-play'>
                <ReactAudioPlayer
                  src={audio}
                  controls
                />
                  {/* <button onClick={handleClick}>{buttonName}</button> */}
                </div>
              </div>
            </div>
            <div className='download-btn-area'>
              <button type="button"className="download-btn"onClick={handlePrint}>
                {" "}Download{" "}
              </button>
            </div>
          </div>
          <div>
          
          </div>
        </div>
      </div>
    </div>

  );
};
export default Audiogram;