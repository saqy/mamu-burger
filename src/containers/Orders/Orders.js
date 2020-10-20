import React, { Component } from 'react';
import Order from '../../components/Order/Order';
// import classes from './Orders.module.css'
import axios from '../../axios-order'
class Orders extends Component  {
    state = {
        orders: [],
        loading: true
    }
    componentDidMount() {
        axios.get('/orders.json')
        .then(res => {
            console.log('res.data'+ res.data);
            const fetchedOrders = [];
            for (let key in res.data){
                fetchedOrders.push({
                    ...res.data[key],
                    id: key
                });
            }
            this.setState({loading: false, orders: fetchedOrders})
        })
        .catch(err => {
            this.setState({loading: false})

        });
    }
    render () {
        return (
            <div>
                {/* <Order /> */}
                {this.state.orders.map(order=> (
                    <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price} />
                ))}
                
            </div>
        );
    }

}
export default Orders;
