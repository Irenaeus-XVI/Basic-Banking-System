import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Customers() {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomerId, setSelectedCustomerId] = useState(null); // State to store selected customer's _id
  const [balanceToSend, setBalanceToSend] = useState(0); // State to store balance to send

  useEffect(() => {
    // Make a GET request to fetch data from the API
    axios
      .get('http://localhost:4000/customers')
      .then((response) => {
        // Update the state with the fetched data
        console.log(response.data);
        setCustomers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to run the effect only once (componentDidMount)

  const sendMoney = async (id, balance) => {
    try {
      // Implement your logic to send money here, for example, make an API request
      const response = await axios.patch('http://localhost:4000/customers', {
        id: id,
        balance: balance,
      });

      // Assuming the response contains updated customer data, update the state
      if (response.data) {
        // Find the index of the updated customer in the customers array
        const updatedCustomerIndex = customers.findIndex((customer) => customer._id === id);

        if (updatedCustomerIndex !== -1) {
          // Create a copy of the customers array
          const updatedCustomers = [...customers];

          // Update the balance of the customer in the copy
          updatedCustomers[updatedCustomerIndex].balance = response.data.updatedBalance.balance;

          // Update the state with the new customer data
          setCustomers(updatedCustomers);

          // Close the modal
        }
      }
    } catch (error) {
      console.error('Error sending money:', error);
    }
  };


  const transferHistory = async (receiver, balance) => {
    const response = await axios.post('http://localhost:4000/transfers', {
      sender: "650623aa275623807468b915",
      receiver: receiver,
      balance: balance
    });

  }


  return (
    <>
      <div>
        <h1 className='text-center my-3 text-primary'>Customers</h1>
        <div className="container">
          <div className="row">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">balance</th>
                  <th scope="col">Transaction</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer, index) => (
                  <tr key={customer._id}>
                    <td>{index + 1}</td>
                    <td>{customer.name}</td>
                    <td>{customer.email}</td>
                    <td>{customer.balance}</td>
                    <td>
                      <button
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        className='btn btn-primary'
                        onClick={() => {
                          setSelectedCustomerId(customer._id);
                        }}
                      >
                        Send Money
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <label htmlFor="">Amount:</label>
              <input
                type="number"
                className='form-control'
                value={balanceToSend}
                onChange={(e) => {
                  setBalanceToSend(parseInt(e.target.value));
                }}
              />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal" // Close the modal when clicked
                onClick={() => {
                  sendMoney(selectedCustomerId, balanceToSend);
                  transferHistory(selectedCustomerId, balanceToSend)
                }}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
