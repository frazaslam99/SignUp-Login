import React, { useState,useEffect } from 'react'
// import {withRouter} from "react-router-dom"
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { adduser } from "../../actions/index";

function Signup() {


  
    let [Name, setName] = useState("");
    let [Email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    const [Opname, setopname] = useState("");
    const [Radioname, setradioname] = useState("");
    


    const dispatch = useDispatch();
    




    function onChangeData(evt) {

        switch (evt.target.name) {

            case "name":
                setName(evt.target.value);
                break;

            case "email":
                setEmail(evt.target.value);
                break;


            case "password":
                setPassword(evt.target.value);
                break;


            case "subject":
                setopname(evt.target.value);
                break;

            case "dept":
                setradioname(evt.target.value);
                break;
     
        }


    }


    function handesubmit(e){
        e.preventDefault();
        dispatch(adduser({
            id: new Date().getTime().toString(),
            Name,
            Email,
            password,
            Opname,
            Radioname
        }))
        
        setName("");
        setEmail("");
        setPassword("");
        setradioname("");
        setopname("");
    
    }





    return (
        <div>
            <form>
                <input type="text" name="name" onChange={onChangeData} placeholder="Name" value={Name}/><br/>


                <input type="text" name="email" onChange={onChangeData} placeholder="Email" value={Email}/><br/>

                <input type="text" name="password" onChange={onChangeData} placeholder="Password" value={password} /><br/>






                <label for="cars">Choose a Subject:</label><br/>

                <select name="subject" id="cars" form="carform" value={Opname} onChange={onChangeData}>
                    <option>Please select</option>
                    <option value="Math">Math</option>
                    <option value="Eng">Eng</option>
                    <option value="Urdu">Urdu</option>
                    <option value="PS">PS</option>
                </select><br/>

                <input type="radio" id="html" name="dept" value="CS" onChange={onChangeData} />
                <label for="html">CS</label><br/>
                <input type="radio" id="css" name="dept" value="SE" onChange={onChangeData} />
                <label for="css">SE</label><br/>
                <input type="radio" id="it" name="dept" value="IT" onChange={onChangeData} />
                <label for="javascript">IT</label>


                <input type="submit" value="Submit" onClick={handesubmit}/>

            </form>
        </div>
    )
}
export default (Signup);