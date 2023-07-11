export const authMiddleware = (req, res, next) => {
    req.user = {id: req.id};
    next();
}