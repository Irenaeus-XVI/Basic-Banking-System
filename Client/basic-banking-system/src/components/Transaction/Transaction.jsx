import axios from 'axios'
import React, { useEffect, useState } from 'react'



export default function Transaction() {



    const [transactions, setTransactions] = useState([])
    useEffect(() => {

        axios.get("http://localhost:4000/transfers").then((response) => {
            setTransactions(response.data)

        }).catch((err) => {
            console.log(err);
        })
    }, [])

    useEffect(() => {
        console.log(transactions);
    }, [transactions])
    return (
        <>
            <div>
                <h1 className='text-center my-4 text-primary'>Transaction History </h1>
                <div className="container">
                    <div className="row">

                        {transactions.length ? (<table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Sender</th>
                                    <th scope="col">Receiver</th>
                                    <th scope="col">Balance</th>
                                    <th scope="col">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactions.map((transaction, index) => (
                                    <tr key={transaction._id}>
                                        <td>{index + 1}</td>
                                        <td>{transaction.sender.name}</td>
                                        <td>{transaction.receiver.name}</td>
                                        <td>{transaction.balance}</td>
                                        <td>{transaction.createdAt}</td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>) : (<h1 className='text-center'>"No Transaction Until Now 😥"</h1>)}

                    </div>
                </div>
            </div>
        </>
    )
}
