import * as customerRepository from "../repository/customer.js";

export const getAllCustomers = () => {
    return customerRepository.getAll();
}

export const getCustomerById = (id) => {
    return customerRepository.getById(id)
}

export const createCustomer = (data) => {
    return customerRepository.createCustomer({...data})
}

export const updateCustomer = (id, data) => {
    const updatedCustomer =  customerRepository.updateCustomer(id, {...data});

    if (!updatedCustomer){
        throw new Error("Customer not found!")
    }

    return updatedCustomer
}

export const removeCustomer = (id) => {
    return customerRepository.removeCustomer(id);
}