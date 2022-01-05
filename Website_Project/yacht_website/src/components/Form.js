import React, { Component } from "react";
import './Form.css'


class Form extends Component {

    constructor(props){
        super(props);
        this.state={orders:[]}
    }

    refreshList()
    {
        fetch(`${process.env.REACT_APP_API+'Orders'}`)
        .then(response => response.json())
        .then(data=>{
            this.setState({orders:data});
        });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    render() {
        const {orders} = this.state;
        return(
            <div className="form">
                <h1>Formularz rezerwacji</h1>
                <table>
                    <thead>
                        <tr>
                            <td>Order_ID</td>
                            <td>Customer_ID</td>
                            <td>Yacht_ID</td>
                            <td>Pickup_date</td>
                            <td>Dropoff_date</td>
                            <td>Total_price</td>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map=(ord =>
                            <tr key={ord.orderId}>
                                <td>{ord.orderId}</td>
                                <td>{ord.customerId}</td>
                                <td>{ord.yachtId}</td>
                                <td>{ord.pickupDate}</td>
                                <td>{ord.dropoffDate}</td>
                                <td>{ord.totalPrice}</td>

                            </tr>)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Form;