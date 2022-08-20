import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";


export default function Login() {

    let [Email, setEmail] = useState("");
    let [password, setPassword] = useState("");



    const users = useSelector(state => state.signupreducer.users);

    function onChangeData(evt) {

        switch (evt.target.name) {


            case "email":
                setEmail(evt.target.value);
                break;


            case "password":
                setPassword(evt.target.value);
                break;

        }

    }

    function handesubmit(e) {
        e.preventDefault();
        let targetUser = users.find((user) => {

                        return user.data.Email == Email && user.data.password == password;

                    })

                    if (targetUser) {
                        alert("User Is Found");

                    } else {
                        alert("User Is Not Found");
                    }
            setEmail("");
            setPassword("");



        }





    return (
            <div>
                <form>



                    <input type="text" name="email" onChange={onChangeData} placeholder="Email" value={Email} /><br />

                    <input type="text" name="password" onChange={onChangeData} placeholder="Password" value={password} /><br />

                    <input type="submit" value="Submit" onClick={handesubmit} />

                </form>
            </div>
        )
    }
