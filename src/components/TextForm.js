import React, {useState} from 'react'



export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        console.log("UpperCase was Clicked.");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text has been Converted to Upper Case", "Success", "success");
    }

    const handleLoClick = () => {
        console.log("LowerCase was Clicked.");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text has been Converted to Lower Case", "Success", "success");
    }
    
    const handleOnChange = (event) =>{
        console.log("Onchange Handled");
        setText(event.target.value);
    }

    const handleRemoveSpace  = (event) =>{
        let newText = text.replaceAll(" ", "");
        setText(newText);
        props.showAlert("Text space has been removed", "Success", "success");
    }

    const handleClear  = (event) =>{
        let newText = "";
        setText(newText);
        props.showAlert("Text removed", "Success", "dark");
    }

    /*const handleFirstUpper  = (event) =>{
        let newText = text.split(" ");
        for (let i = 0; i < newText.length; i++) {
            // You do not need to check if i is larger than newText length, as your for does that for you
            // Assign it back to the array
            newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].substring(1);     
        }
        // Directly return the joined string
        setText(newText);
    }*/

    return (
        <div>
            
                
                <h1>{props.heading}</h1>
                {/*<div class="form-group">
                    <label htmlFor="exampleFormControlInput1">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div class="form-group">
                    <label htmlFor="exampleFormControlSelect1">Example select</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </select>
                </div>
                <div class="form-group">
                    <label htmlFor="exampleFormControlSelect2">Example multiple select</label>
                    <select multiple class="form-control" id="exampleFormControlSelect2">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </select>
                </div>*/}
                <div class="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Example text area</label>
                    <textarea class="form-control" value={text} onChange={handleOnChange} placeholder="Enter Text Here" id="exampleFormControlTextarea1" rows="9"></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleRemoveSpace}>Remove Space</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
                
                
                <div className="my-4">
                    <h3>Your Text Summary</h3>
                    <p>Words in your text {text.split(" ").length}  ...  Characters in text {text.length}</p>
                    <p>Can be read in {0.5 * text.split(" ").length} seconds </p>
                </div>

                <div className="my-4">
                    <h2>Preview</h2>
                    <p>{text}</p>
                </div>
                
        </div>
    )
}
