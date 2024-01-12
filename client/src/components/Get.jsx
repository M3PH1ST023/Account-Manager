import React, { useState, useEffect } from "react";
import axios from "axios";

const Get = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get("http://127.0.0.1:5000/api/v1/get")
            .then((resp) => {
                setData(resp.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    return (
        <div className="post">
            <h2>History</h2>
            <table>
                <tr>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Person Name</th>
                    <th>Type</th>
                </tr>
                {data.map((item, index) => (
                    <tr>
                        <td key={index}>{item.date}</td>
                        <td key={index}>{item.amount}</td>
                        <td key={index}>{item.person}</td>
                        {item.type == 0 ? (
                            <td key={index}>Income</td>
                        ) : (
                            <td key={index}>Expense</td>
                        )}
                    </tr>
                ))}
            </table>
        </div>
    );
};

export default Get;
