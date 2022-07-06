import React from 'react'
import Webcam from "react-webcam";
import { useRef, useState, useCallback } from "react";
import Image from 'next/image';
import styles from '../styles/Screenshot.module.css'

const videoConstraints = {
  width: 720,
  height: 360,
  facingMode: "user"
};

const Screenshot = () => {
  const [CaptureEnable, setCaptureEnable] = useState<boolean>(false);
  const webcamRef = React.useRef<Webcam>(null);
  const [url,setUrl] = useState<string | null>(null);
  
  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current?.getScreenshot();
      if (imageSrc){
        setUrl(imageSrc)
      }
    },
    [webcamRef]
  );
  return (
    <>
      {CaptureEnable || (
        <button 
          onClick={() => setCaptureEnable(true)}
          className={styles.button}
        >start</button>
      )}
      {CaptureEnable && (
      <>
        <div>
          <button 
            onClick={() => setCaptureEnable(false)}
            className={styles.button}
          >
          終了</button>
        </div>
        <Webcam
          audio={false}
          // height={720}
          // width={360}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          // videoConstraints={videoConstraints}
          className={styles.webcam}
        />
        <button 
          onClick={capture}
          className={styles.button}
        >
          キャプチャーする
        </button>
      </>
      )}
      {url && (
        <>
          <div>
            <button
              onClick={() => {
                setUrl(null);
              }}
            >
              削除
            </button>
          </div>
          <div>
            <Image 
              src={url} 
              alt="Screenshot"  
              width="100px"
              height="100px"
            />
          </div>
        </>
      )}
    </>
  )
}

export default Screenshot