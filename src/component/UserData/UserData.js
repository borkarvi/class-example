import { useState } from "react";
import TestClass from "../TestClass/TestClass";

const UserData = (props) => {
    const { username } = props;
    
    const [fname , setfname] = useState('');

    const [lname , setlname] = useState('');


    return (
        <div>
            <p>test User Data fc username {username}</p>
            <TestClass username={username}  val={123}/>
        </div>
    )
};
export default UserData;