import * as userRepository from '../repository/user.js';

export const getAll = async () => {
    return await userRepository.getAll();
}

export const getById = async (id) => {
    return await userRepository.getById(id);
}

export const createUser = async (data) => {
    return await userRepository.createUser({ ...data });
}

export const updateUser = async (id, data) => {
    const updatedUser = await userRepository.updateUser(id, data);

    if (!updatedUser) {
        throw new Error('User was not found!');
    }

    return updatedUser;
}

export const removeUser = async (id) => {
    return await userRepository.removeUser(id);
}