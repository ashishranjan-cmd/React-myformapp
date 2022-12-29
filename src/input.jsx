function Myinput(props) {
    function change(e){
        console.log(e.target.value)
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