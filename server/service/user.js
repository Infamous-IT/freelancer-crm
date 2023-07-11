import * as userRepository from '../repository/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const getAll = async () => {
    return await userRepository.getAll();
}

export const getById = async (id) => {
    return await userRepository.getById(id);
}

// export const createUser = async (data) => {
//     return await userRepository.createUser({ ...data });
// }

export const registerUser = async (password, data) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = {
        ...data,
        password: hash,
    };

    console.log(newUser);

    return await userRepository.createUser(newUser);
};


export const loginUser = async (username, password) => {
    const user = await userRepository.getByUsername(username);
    if (!user) {
        throw new Error('User was not found!');
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
        throw new Error('Wrong password or username');
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT);

    const { password: userPassword, ...otherDetails } = user._doc;
    return { token, details: otherDetails };
};

export const logout = async (id) => {
    return await userRepository.logout(id);
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