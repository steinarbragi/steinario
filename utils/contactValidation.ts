import * as Yup from 'yup';

const contactValidation = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email address is required')
    .max(100, 'Too Long!'),
  firstName: Yup.string()
    .required('First name is required')
    .max(200, 'First name is too long.'),
  lastName: Yup.string().max(100, 'Last name is too long.'),
  phone: Yup.string()
    .min(7, 'Phone number should be at least 7 characters')
    .max(50, 'Phone is too long'),
  message: Yup.string()
    .min(3, 'Message should be at least 3 characters')
    .max(5000, 'Message is too long'),
});

export default contactValidation;
