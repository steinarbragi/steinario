/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useFormik } from 'formik';
import contactValidation from '../utils/contactValidation';

const fieldClasses =
  'py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md';

const labelClasses = 'block text-sm font-medium text-gray-700';

type ValidatedFieldProps = {
  touched: boolean | undefined;
  errors: string | undefined;
  fieldName: string;
  label: string;
  fieldProps: any;
};

const ValidatedField = ({
  touched,
  errors,
  fieldName,
  label,
  fieldProps,
}: ValidatedFieldProps) => (
  <div>
    <label
      htmlFor={fieldName}
      className={`${labelClasses} ${touched && errors && 'text-red-500'}`}
    >
      {label}
    </label>
    <div className="mt-1">
      <input
        type="text"
        id="firstName"
        {...fieldProps}
        autoComplete="given-name"
        className={`${fieldClasses} ${touched && errors && 'border-red-500'}`}
      />
      {touched && errors ? <div className="text-red-500">{errors}</div> : null}
    </div>
  </div>
);

function ContactForm() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      message: '',
    },
    validationSchema: contactValidation,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form
      id="contact"
      action="#"
      method="POST"
      className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
    >
      <ValidatedField
        touched={formik.touched.firstName}
        errors={formik.errors.firstName}
        fieldName={'firstName'}
        label="First name"
        fieldProps={formik.getFieldProps('firstName')}
      />
      <ValidatedField
        touched={formik.touched.lastName}
        errors={formik.errors.lastName}
        fieldName={'lastName'}
        label="Last name"
        fieldProps={formik.getFieldProps('lastName')}
      />

      <div className="sm:col-span-2">
        <ValidatedField
          touched={formik.touched.company}
          errors={formik.errors.company}
          fieldName={'company'}
          label="Company"
          fieldProps={formik.getFieldProps('company')}
        />
      </div>
      <div className="sm:col-span-2">
        <ValidatedField
          touched={formik.touched.email}
          errors={formik.errors.email}
          fieldName={'email'}
          label="Email"
          fieldProps={formik.getFieldProps('email')}
        />
      </div>
      <div className="sm:col-span-2">
        <ValidatedField
          touched={formik.touched.phone}
          errors={formik.errors.phone}
          fieldName={'phone'}
          label="Phone"
          fieldProps={formik.getFieldProps('phone')}
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className={labelClasses}>
          Message
        </label>
        <div className="mt-1">
          <textarea
            id="message"
            rows={4}
            className={fieldClasses}
            {...formik.getFieldProps('message')}
          />
          {formik.touched.message && formik.errors.message ? (
            <div className="text-red-500">{formik.errors.message}</div>
          ) : null}
        </div>
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {"Let's talk"}
        </button>
      </div>
    </form>
  );
}

export default function Contact() {
  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <svg
          className="absolute left-full transform translate-x-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={404}
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          />
        </svg>
        <svg
          className="absolute right-full bottom-0 transform -translate-x-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={404}
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          />
        </svg>
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Contact Me
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Drop me a line, tell me about your projects or ideas
          </p>
        </div>
        <div className="mt-12">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
