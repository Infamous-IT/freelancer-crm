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

export const register = async (req, res, next) => {
    try {
        const {password } = req.body;
        await userService.registerUser(password, req.body);
        res.status(200).send('User has been created!')
    } catch (e) {
        next(e);
    }
}

export const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const { token, details } = await userService.loginUser(username, password);

        res.cookie('access_token', token, {
            httpOnly: true,
        }).status(200).json({ details });
    } catch (e) {
        next(e);
    }
};

export const logout = async (req, res, next) => {
    try {
        const userId = req.user.id;
        await userService.logout(userId);
        res.clearCookie('access_token');
        res.status(200).json({message: "User has been logged out!"});
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