import { body } from 'express-validator';

export const validateLogin = [
    body('email').isEmail().withMessage('Must be a valid email'),
    body('password').isLength({ min: 8, max: 30 }).withMessage('Must be between 8 and 30 characters long')
];

export const validateRegister = [
    body('displayName').isLength({ min: 2, max: 50 }).withMessage('Must be between 2 and 50 characters long'),
    body('email').isEmail().withMessage('Must be a valid email'),
    body('password')
        .isLength({ min: 8, max: 30 }).withMessage('Must be between 8 and 30 characters long')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/)
        .withMessage('Must contain at least one uppercase letter, one lowercase letter, one number, and one special character')
];