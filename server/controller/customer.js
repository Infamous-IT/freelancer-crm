import * as customerService from "../service/customer.js"

export const getAll = async (req, res, next) => {
    try {
        const customers = await customerService.getAllCustomers();
        res.json(customers);
    } catch (error) {
        next(error);
    }
}

export const getById = async (req, res, next) => {
    const { id } = req.params;

    try {
        const customer = await customerService.getCustomerById(id);
        if (!customer) {
            return res.status(404).json({ error: 'Customer not found!' });
        }
        res.json(customer);
    } catch (error) {
        next(error);
    }
}

export const createCustomer = async (req, res, next) => {
    const customerData = req.body;

    try {
        const createdCustomer = await customerService.createCustomer(customerData);
        res.status(200).json(createdCustomer);
    } catch (error) {
        next(error);
    }
}

export const updateCustomer = async (req, res, next) => {
    const { id } = req.params;
    const customerData = req.body;

    try {
        const updatedCustomer = await customerService.updateCustomer(id, customerData);
        res.status(200).json(updatedCustomer);
    } catch (error) {
        next(error);
    }
}

export const removeCustomer = async (req, res, next) => {
    const { id } = req.params;

    try {
        await customerService.removeCustomer(id);
        res.json({ message: 'Customer removed successfully' });
    } catch (error) {
        next(error);
    }
}