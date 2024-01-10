import z from 'zod';

export const userValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    email: z
      .string()
      .email({ message: 'Invalid email format' })
      .min(1, { message: 'Email is required' }),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters' })
      .min(1, { message: 'Password is required' })
      .refine((value) => /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(value), {
        message: 'Password must have at least one uppercase letter, one digit, and one special character.',
      }),
  }),
});
