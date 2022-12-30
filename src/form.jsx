import { Myinput } from "./input";
import Myname from "./myname";

function Myform(){
    return (
        <div>
    <Myname />
    <form>
      <Myinput 
        mytype="text"
        myname="name"
        myplaceholder="Enter Your Name"
        />
      <br />
      <Myinput 
        mytype="email"
        myname="mail"
        myplaceholder="Enter Your Email ID"
        />
      <br />
      <Myinput 
        mytype="password"
        myname="pass"
        myplaceholder="Password"
        />
      <br />
      <Myinput 
        mytype="submit"
        myname="submit"
        />
      <br />
    </form>
    </div>
    )
}

export default Myform;