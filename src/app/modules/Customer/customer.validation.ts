import z from 'zod';

const createCustomerValidationSchema = z.object({
  body: z.object({
    adminEmail: z.string({ required_error: 'Admin Email is Required.' }),
    name: z.string({ required_error: 'Name is Required.' }),
    mobile: z.string({ required_error: 'Mobile is Required.' }),
    email: z.string({ required_error: 'Email is Required.' }),
    address: z.string({ required_error: 'Address is Required.' }),
  }),
});

export const customerValidationSchema = {
  createCustomerValidationSchema,
};
