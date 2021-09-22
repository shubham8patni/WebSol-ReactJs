import React from 'react'

export default function Darkmode(props) {

    return (
        <div>
            <div class="row bg-dark text-white my-1 " style={{width: '100.75vw',}}>
                <div class={`col-9 my-1 text-right ${props.palette}`}>
                    Choose Color : 
                    <input className="btn mx-1 " onClick={props.red} style={{backgroundColor:"#440808", width:"25px", height: "25px", borderRadius: "50%",}} />
                    <input className="btn mx-1" onClick={props.green} style={{backgroundColor:"#215936", width:"25px", height: "25px", borderRadius: "50%",}} />
                    <input className="btn mx-1" onClick={props.purple} style={{backgroundColor:"#4D005B", width:"25px", height: "25px", borderRadius: "50%",}} />    
                    
                </div>
                <div class="col-2 my-1 text-right">
                    {props.mode} :
                </div>
                <div class="col-1 my-1">
                    
                    <label class="switch">
                    <input type="checkbox" onClick={props.handleDark} ></input>
                    <span class="slider round"></span>
                    </label>
                </div>
            </div>
            
        </div>
    )
}
