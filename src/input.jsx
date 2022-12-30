import { useState } from "react";

var myn;

function MyName(){
   // const [mynamex, setName] = useState("name")
    return (<p>Hi, {myn}</p>)
}

function Myinput(props) {
    const [mynamex, setName] = useState("name")

    function change(e){
        console.log(e.target.value);
        myn = e.target.value

        setName(myn)
    }

    return (
        <input 
            type={props.mytype}
            name={props.myname} 
            placeholder={props.myplaceholder}
            onChange={change}
         />
         )
}
export default myn;
export { Myinput, MyName };