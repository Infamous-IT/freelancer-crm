import express from "express";
import {createCustomer, getAllCustomers, getCustomerById, removeCustomer, updateCustomer} from "../service/customer.js";


const router = express.Router();


router.get("/", async (req, res, next) => {
    try {
        return getAllCustomers();
    }catch (error){
        next(error);
    }
} )

router.delete("/:id", async (req, res, next) => {
    try {
        return  getCustomerById(req.params.id);
    }catch (error){
        next(error);
    }
})

router.patch("/:id", async (req, res, next) => {
    try {
        return removeCustomer(req.params.id)
    }catch (error){
        next(error);
    }
})

router.post("/", async (req, res, next) => {
    try {
        const newCustomer = {...req.body}
        await createCustomer(newCustomer)
    }catch (error){
        next(error);
    }
})

router.patch("/:id", async (req, res, next) => {
    try {
        return updateCustomer(req.params.id, {...req.body})
    }catch (error){
        next(error);
    }
})

export default router;