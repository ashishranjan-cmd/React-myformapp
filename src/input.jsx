
var myn = "world";

function Myinput(props) {
    function change(e){
        console.log(e.target.value);
        //let myn = e.target.value
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
export { Myinput };