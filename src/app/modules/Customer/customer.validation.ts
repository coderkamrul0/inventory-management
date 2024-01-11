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
const updateCustomerValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is Required.' }).optional(),
    mobile: z.string({ required_error: 'Mobile is Required.' }).optional(),
    email: z.string({ required_error: 'Email is Required.' }).optional(),
    address: z.string({ required_error: 'Address is Required.' }).optional(),
  }),
});

export const customerValidationSchema = {
  createCustomerValidationSchema,
  updateCustomerValidationSchema,
};
