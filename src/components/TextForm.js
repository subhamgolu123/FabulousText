import React, { useState } from 'react'
// import Count_character from './Count_character';

export default function TextForm(props) {

    const [btntext, setBtnText] = useState("Upper->Lower");

    const handleUpclick=()=>{
        //console.log("Upper case was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoclick=()=>{
        //console.log("Upper case was clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleExtraSpaces = ()=>{
        let words = text.split(' ');
        let joinedWords = '';
        // console.log(words);
        words.forEach((elem)=>{
            if(elem[0] !== undefined){
                joinedWords += elem + " ";
                console.log(joinedWords);
            }
        })
        setText(joinedWords);
    }

    const handleToggleCaseClick = () => {
        let words = text.split(" ");
        let newText = words
          .map((word) => {
            let newWord = "";
            for (let i = 0; i < word.length; i++) {
              let char = word.charAt(i);
              if (char >= "A" && char <= "Z") {
                char = char.toLowerCase(); 
                setBtnText("Upper->Lower");
              }
              else if (char >= "a" && char <= "z") {
                char = char.toUpperCase(); 
                setBtnText("Lower->Upper");
              }
              newWord += char;
            }
    
            return newWord;
          })
          .join(" ");
    
        setText(newText);
    };
    
    const handleSentenceCaseClick = () => {
        // let lowerCase = text.toLowerCase();
        // let regex = /([^.!?]+[!?.\d\s]+)/g;
        // let sentences = lowerCase.match(regex);
        // let newText = sentences
        //   .map((sentence) => {
        //     return (sentence.charAt(0) >= "a" && sentence.charAt(0) <= "z"
        //       ? sentence.charAt(0).toUpperCase() + sentence.slice(1)
        //       : sentence);
        //   })
        //   .join("");
    
        // setText(newText);
        let newText = text.charAt(0).toUpperCase() + text.slice(1);
                setText(newText);
    };

    const handleCapitalizeWordClick = () => {
        let lowercase = text.toLowerCase();
        let words = lowercase.split(" ");
        let newWords = words.map((word) => {
          return word.charAt(0).toUpperCase() + word.slice(1);
        });
        let newText = newWords.join(" ");
        setText(newText);
    };

    const reversed = () => {
        let splitWord = text.split("");
    
        let reverseWord = splitWord.reverse("");
        let joinedWords = reverseWord.join("");
        let newText = joinedWords
    
        setText(newText);
    };

    const titleCase = ()=>{
        const arr = text.split(" ");
        for(var i=0;i<arr.length;i++){
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        const newText = arr.join(" ");
        setText(newText);
    };

    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value)
    }

    const[text, setText]=useState('Enter Text Here');
    // text = "new text"; // wrong way to change the state
    // setText('new text'); // correct way to change the state
  return (
    <>
        <div className='container' style={{backgroundColor: props.mode==='light'?'white':'black'}}>
            <h1 style={{color:props.mode==='light'?'black':'white'}}>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey', color:props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={handleUpclick}>Convert to UpperCase</button>
            <button className='btn btn-primary mx-2' onClick={handleLoclick}>Convert to LowerCase</button>
            {/* <Count_character/> */}
            <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove Extra Space</button>
            <button className='btn btn-primary mx-2' onClick={handleToggleCaseClick}>{btntext}</button>
            <button className='btn btn-primary mx-2' onClick={handleSentenceCaseClick}>Sentence Case</button>
            <button className='btn btn-primary mx-2' onClick={handleCapitalizeWordClick}>Capitalize Word</button>
            <button className='btn btn-primary mx-2 my-2' onClick={reversed}>Reverse Text</button>
            <button className='btn btn-primary mx-2 my-2' onClick={titleCase}>Title Case</button>

        </div>
        <div className="container" style={{backgroundColor: props.mode==='light'?'white':'black', color:props.mode==='light'?'black':'white'}}>
            <h2>your Text Summary</h2>
            <p>{text.split(" ").length-1} Words and {text.length} Characters</p>
            <p>{0.008*text.split(" ").length} Minutes to read the Text</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter some text to Preview here"}</p>
        </div>
    </>
  )
}
