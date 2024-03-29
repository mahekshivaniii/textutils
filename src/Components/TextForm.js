import React , {useState} from 'react'



export default function TextForm(props) {
  const handleUpClick = () => {
  //  console.log("UpperCase Clicked" + text)
   let newText = text.toUpperCase()
   setText(newText)
  //  props.showAlert("helooo")
  }
  const handleOnChange = (event) => {
    // console.log("clicked")
    setText(event.target.value)
    

  }
  
  const handleLowerClick = () =>{
    let newText = text.toLowerCase()
    setText(newText)
  }
  const [text,setText]= useState('');
  
   const clearEvent = () => {
  setText('')
  }
  
  return (
    <>
  <div className="mb-3" style={{color : props.mode === 'dark'?'white':'black'}}>
    <label htmlFor="exampleFormControlTextarea1" className="form-label  fw-bold fst-italic fs-2 mb-4">
      {props.textAreaTitle}
    </label>
    <textarea style={{backgroundColor : props.mode === 'dark'?'grey':'white', color : props.mode === 'dark'?'white':'black'}}
    
      className="form-control"  placeholder='Enter the text please!' value={text}
      id="exampleFormControlTextarea1"  onChange={handleOnChange}
      rows={8}
    
    />
    <button disabled={text.length===0} className="btn btn-primary mx-4 my-3" onClick={handleUpClick}>Convert Text into UpperCase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleLowerClick}>Convert Text into LowerCase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-3" onClick={clearEvent}>Clear</button>
    {/* <button className="btn btn-primary mx-3" >Make text Bold</button> */}

  </div>
  <div className="container"style={{color : props.mode === 'dark'?'white':'black'}} >
       <h2>Your Text Summary</h2>
       <p >{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} and {text.length}</p>
       <p>{ 0.08 *text.split("").filter((element)=>{return element.length!==0}).length} minutes</p>
       <h3>Preview</h3>
       <p>{text.length>0?text:`Nothing to preview `}</p>
  </div>
  </>

  )
}

