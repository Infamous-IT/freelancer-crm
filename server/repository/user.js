import Users from '../model/users.js';

export const getAll = () => {
    return Users.find();
}

export const getById = (id) => {
    return Users.findOne({_id: id});
}

export const createUser = (user) => {
    return Users.create(user);
}

export const updateUser = (id, user) => {
    return Users.findByIdAndUpdate(id, { $set: user }, { new: true });
}

export const removeUser = (id) => {
    return Users.findByIdAndDelete(id);
}