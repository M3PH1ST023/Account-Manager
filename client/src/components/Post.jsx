import React, { useState, useEffect } from "react";
import axios from "axios";

function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${date}-${month}-${year}`;
}

const Post = () => {
    const [balance, setBalance] = useState(0);
    useEffect(() => {
        axios
            .get("http://127.0.0.1:5000/api/v1/balance")
            .then((resp) => {
                setBalance(resp.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    const [date, setDate] = useState(getDate());
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState(0);
    const [person, setPerson] = useState("");
    const [personLabel, setPersonLabel] = useState("From");

    const handleAmount = (e) => {
        setAmount(e.target.value);
    };
    const handleTypeIncome = () => {
        setType(0);
        setPersonLabel("From");
    };
    const handleTypeExpense = () => {
        setType(1);
        setPersonLabel("To");
    };
    const handlePerson = (e) => {
        setPerson(e.target.value);
    };
    const handleSubmit = (e) => {
        const postData = {
            date: date.toString(),
            amount: parseInt(amount),
            type: parseInt(type),
            person: person,
        };
        axios
            .post("http://127.0.0.1:5000/api/v1/post", postData)
            .then((resp) => {
                console.log("date posted: ", resp.data);
                window.location.reload(true);
            })
            .catch((error) => {
                console.log("Error:" + error);
            });
    };

    return (
        <div className="get-form">
            <h2>Date : {getDate()} </h2>
            <div className="inputs">
                <h2>Amount</h2>
                <input type="number" id="amt" onChange={handleAmount} />
            </div>
            <div className="inputs">
                <h2>{personLabel}</h2>
                <input type="text" id="person" onChange={handlePerson} />
            </div>
            <div className="inputs radio">
                <div className="radio">
                    <input
                        type="radio"
                        name="type"
                        id="income"
                        onClick={handleTypeIncome}
                    />
                    <h3>Income</h3>
                </div>
                <div className="radio">
                    <input
                        type="radio"
                        name="type"
                        id="expense"
                        onClick={handleTypeExpense}
                    />
                    <h3>Expense</h3>
                </div>
            </div>
            <div className="inputs">
                <input type="submit" onClick={handleSubmit} />
            </div>
            <div className="balance">
                <p>Balance : </p>
                {balance.balance}
            </div>
        </div>
    );
};

export default Post;
