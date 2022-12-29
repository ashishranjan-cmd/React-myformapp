function Myinput(props) {
    function change(){
        console.log("changed")
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
export default Myinput