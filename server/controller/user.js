import * as userService from '../service/user.js';

export const getAll = async (req, res, next) => {
    try {
        const users = await userService.getAll();
        res.json(users);
    } catch (e) {
        next(e);
    }
}

export const getById = async (req, res, next) => {
    const { id } = req.params;

    try {
        const user = await userService.getById(id);
        if (!user) {
            return res.status(404).json({ error: 'User was not found!' });
        }
        res.json(user);
    } catch (e) {
        next(e);
    }
}

export const createUser = async (req, res, next) => {
    const userData = req.body;

    try {
        const createdUser = await userService.createUser(userData);
        res.status(200).json(createdUser);
    } catch (e) {
        next(e);
    }
}

export const updateUser = async (req, res, next) => {
    const { id } = req.params;
    const userData = req.body;

    try {
        const updatedUser = await userService.updateUser(id, userData);
        res.status(200).json(updatedUser);
    } catch (e) {
        next(e);
    }
}

export const removeUser = async (req, res, next) => {
    const { id } = req.params;

    try {
        await userService.removeUser(id);
        res.json({ message: 'User removed successfully' });
    } catch (e) {
        next(e);
    }
}