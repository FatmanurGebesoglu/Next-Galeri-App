import Title from "../components/Title"
import UploadForm from "../components/UploadForm"
import ImageGrid from "../components/imageGrid"
import Modal from '../components/Modal'
import { useState } from 'react'

export default function Home() {

  const [secilenResim,setSecilenResim]=useState(null);
  
  return (
    <div className='App'>
        <Title />
        <UploadForm/>
        <ImageGrid  setSecilenResim={setSecilenResim}/>
        {secilenResim &&<Modal secilenResim={secilenResim} setSecilenResim={setSecilenResim}/>}
    </div>
  )
}
