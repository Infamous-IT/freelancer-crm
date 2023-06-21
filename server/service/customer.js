import Customers from "../model/customers.js";

export const getAllCustomers = () => {
    return Customers.find();
}

export const getCustomerById = (id) => {
    return Customers.findOne({_id: id})
}

export const createCustomer = (customer) => {
    return Customers.create(customer)
}

export const updateCustomer = (id, customer) => {
    return Customers.findByIdAndUpdate(id, { $set: customer }, { new: true });
}

export const removeCustomer = (id) => {
    return Customers.findByIdAndDelete(id);
}