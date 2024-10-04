
import { z } from 'zod';

export const SignupFormSchema = z.object({
    name: z
        .string()
        .min(2, { message: 'Name must be at least 2 characters long.' })
        .trim(),
    email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
    password: z
        .string()
        .min(8, { message: 'Be at least 8 characters long' })
        .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
        .regex(/[0-9]/, { message: 'Contain at least one number.' })
        .regex(/[^a-zA-Z0-9]/, {
            message: 'Contain at least one special character.',
        })
        .trim(),
});

export const LoginFormSchema = z.object({
    email: z.string().email({ message: 'Please enter a valid email.' }),
    password: z.string().min(8, { message: 'Password field must be at least 8 characters long' }).trim(),
});

export const CashPurchasesSchema = z.object({
    name: z.string().min(1,{ message: 'One row is missing item name' }),
    uuid: z.string().uuid({ message: 'Invalid UUID for item' }),
    quantity: z.number().int().positive({ message: 'Quantity must be a positive integer.' }),
    rate: z.number().positive({ message: 'rate must be a positive integer.' }),
});

export const ItemMultiCreate = z.object({
    name: z.string().min(1,{ message: 'One row is missing item name' }),
    quantity: z.number().int().positive({ message: 'Quantity must be a positive integer.' }),
    rate: z.number().positive({ message: 'rate must be a positive integer.' }),
});


