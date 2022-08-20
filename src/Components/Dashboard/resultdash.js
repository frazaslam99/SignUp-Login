import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

export default function Resultdash() {
    const styleth = {
        padding: "20px"
    }



    const users = useSelector(state => state.signupreducer.users);

    const [searchdata, setsearchdata] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const [category, setCategory] = useState("");
    const [allusers, setAllusers] = useState(users);



    useEffect(() => {
        if (category === "ALL") {
            setAllusers(users);
        }

        if (category === "CS") {
            const filteredProducts = users.filter(
                (item) => item.data.Radioname === "CS"
            );

            setAllusers(filteredProducts);
        }

        if (category === "IT") {
            const filteredProducts = users.filter(
                (item) => item.data.Radioname === "IT"
            );

            setAllusers(filteredProducts);
        }

        if (category === "SE") {
            const filteredProducts = users.filter(
                (item) => item.data.Radioname === "SE"
            );

            setAllusers(filteredProducts);
        }
    }, [category]);






    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = users.filter((value) => {
            return value.data.Name.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setsearchdata([]);
        }
        else {
            setsearchdata(newFilter);
        }
    };




    return (
        <div>

            <input
                type="text"
                placeholder="Plese Search"
                value={wordEntered}
                onChange={handleFilter}
            />
            <button

                onClick={() => setCategory("ALL")}
            >
                All
            </button>
            <button

                onClick={() => setCategory("IT")}
            >

                IT
            </button>

            <button

                onClick={() => setCategory("CS")}
            >

                CS
            </button>

            <button

                onClick={() => setCategory("SE")}
            >

                SE
            </button>



            <table>

                <th style={styleth}>Name</th>
                <th style={styleth}>Email</th>
                <th style={styleth}>Password</th>
                <th style={styleth}>Subject</th>
                <th style={styleth}>Dept</th>


                
                {searchdata.length > 0 ? searchdata.map((user, key) => {
                    return (

                        <tbody key={user.id}>
                            <td>{user.data.Name}</td>
                            <td>{user.data.Email}</td>
                            <td>{user.data.password}</td>
                            <td>{user.data.Opname}</td>
                            <td>{user.data.Radioname}</td>






                        </tbody>

                    );
                }
                )

                    : allusers.map((user) => {
                        return (
                            <tbody key={user.data.id}>
                                <td>{user.data.Name}</td>
                                <td>{user.data.Email}</td>
                                <td>{user.data.password}</td>
                                <td>{user.data.Opname}</td>
                                <td>{user.data.Radioname}</td>
                                <Link to={"/Signup/" +user.data.id }>Signup</Link>


                            </tbody>
                        );
                    })

                }
{/* 
{users.map((user) => {
                        return (
                <tbody key={user.data.id}>
                    <td>{user.data.Name}</td>
                    <td>{user.data.Email}</td>
                    <td>{user.data.password}</td>
                    <td>{user.data.Opname}</td>
                    <td>{user.data.Radioname}</td>
                    <Link to={"/Signup/" + user.data.id}>Signup</Link>


                </tbody>
                );
                    })

                } */}


            </table>

        </div>
    )
}
