import React, { Component } from 'react';
// import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary"
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner'
import classes from './ContactData.module.css'
import axios from '../../../axios-order';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'your name'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'street'
                },
                value: ''
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP code'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Mail'
                },
                value: ''
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [{
                        value: 'fastest',
                        displayValue: 'Fastest'
                    },
                    {
                        value: 'cheapest',
                        displayValue: 'Cheapest'
                    }]
                },
                value: ''
            },
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        // console.log(this.props.ingredients);
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price
        }
        // alert('You Continue');
        axios.post('/orders.json',  order)
        .then(response => {
            this.setState({ 
                loading: false 
                // purchasing: false 
            })
            this.props.history.push('/');
        })
        .catch(error => {
            this.setState({ 
                loading: false
                // purchasing: false 
            })
        })
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        }
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        this.setState({orderForm: updatedOrderForm});
        // console.log(event.target.value)
    }

    render () {
        const formElementsArray=[];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }

        console.log("checkout contact data")
        let form =(
            <form>
                    {/* <Input elementType="....." elemetConfig= "..." value= "..." /> */}
                    {formElementsArray.map(formElement => (
                        <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType} 
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                        />
                    ))}
                    {/* <Input inputtype="input" type= "email" name= "email" placeholder="Your Email" />
                    <Input inputtype="input" type= "text" name= "street" placeholder="Street" />
                    <Input inputtype="input" type= "text" name= "postal" placeholder="Postal Code" /> */}
                    <Button btnType="Success" clicked={this.orderHandler} > ORDER </Button>

                </form>
        );
        if (this.state.loading) {
            form= <Spinner />
        }
        return (
            <div className={classes.ContactData} >
                <h4>Enter your Contact Data</h4> 
                {form}
            </div>
        )
    }
 
}

export default ContactData;