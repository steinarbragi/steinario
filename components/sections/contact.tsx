/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Switch } from '@headlessui/react';
import contactValidation from '../../utils/contactValidation';
import emailjs from 'emailjs-com';
import BackgroundPattern from '../decoration/backgroundPattern';

const fieldClasses =
  'py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md';

const labelClasses = 'block text-sm font-medium text-gray-700';

type ValidatedFieldProps = {
  touched: boolean | undefined;
  errors: string | undefined;
  fieldName: string;
  label: string;
  fieldProps: any;
  textarea?: boolean;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const ValidatedField = ({
  touched,
  errors,
  fieldName,
  label,
  fieldProps,
  textarea = false,
}: ValidatedFieldProps) => {
  const TextOrInput = textarea ? 'textarea' : 'input';
  return (
    <div>
      <label
        htmlFor={fieldName}
        className={`${labelClasses} ${touched && errors && 'text-red-500'}`}
      >
        {label}
      </label>
      <div className="mt-1">
        <TextOrInput
          type="text"
          id="firstName"
          {...fieldProps}
          autoComplete="given-name"
          rows={textarea ? 4 : 1}
          className={`${fieldClasses} ${touched && errors && 'border-red-500'}`}
        />
        {touched && errors ? (
          <div className="text-red-500">{errors}</div>
        ) : null}
      </div>
    </div>
  );
};

function ContactForm() {
  const [agreed, setAgreed] = useState(false);
  const [success, setSuccess] = useState(false);
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
    onSubmit: (values, { setStatus, setSubmitting, resetForm }) => {
      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE || '',
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE || '',
          values,
          process.env.NEXT_PUBLIC_EMAILJS_ID
        )
        .then(
          (result) => {
            resetForm();
            setSuccess(true);
            console.log(result);
            setSubmitting(false);
          },
          (error) => {
            setStatus(error);
            console.log(error);
          }
        );
    },
  });
  if (success)
    return (
      <div className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Thank you.
        </h2>
        <p className="mt-4 text-lg leading-6 text-gray-500">
          {
            "The message was submitted successfully. I'll get back to you as soon as possible."
          }
        </p>
      </div>
    );
  return (
    <>
      <div className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Get in touch
        </h2>
      </div>
      <div className="mt-12">
        <form
          onSubmit={formik.handleSubmit}
          id="contact"
          className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
        >
          <ValidatedField
            touched={formik.touched.firstName}
            errors={formik.errors.firstName}
            fieldName={'firstName'}
            label="First name *"
            fieldProps={formik.getFieldProps('firstName')}
          />
          <ValidatedField
            touched={formik.touched.lastName}
            errors={formik.errors.lastName}
            fieldName={'lastName'}
            label="Last name"
            fieldProps={formik.getFieldProps('lastName')}
          />

          <div className="sm:col-span-1">
            <ValidatedField
              touched={formik.touched.company}
              errors={formik.errors.company}
              fieldName={'company'}
              label="Company"
              fieldProps={formik.getFieldProps('company')}
            />
          </div>
          <div className="sm:col-span-1">
            <ValidatedField
              touched={formik.touched.phone}
              errors={formik.errors.phone}
              fieldName={'phone'}
              label="Phone"
              fieldProps={formik.getFieldProps('phone')}
            />
          </div>
          <div className="sm:col-span-2">
            <ValidatedField
              touched={formik.touched.email}
              errors={formik.errors.email}
              fieldName={'email'}
              label="Email address *"
              fieldProps={formik.getFieldProps('email')}
            />
          </div>

          <div className="sm:col-span-2">
            <ValidatedField
              touched={formik.touched.message}
              errors={formik.errors.message}
              fieldName={'message'}
              label="Message *"
              textarea
              fieldProps={formik.getFieldProps('message')}
            />
          </div>
          <div className="sm:col-span-2">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Switch
                  checked={agreed}
                  onChange={setAgreed}
                  className={classNames(
                    agreed ? 'bg-indigo-600' : 'bg-gray-200',
                    'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  )}
                >
                  <span className="sr-only">Agree to policies</span>
                  <span
                    aria-hidden="true"
                    className={classNames(
                      agreed ? 'translate-x-5' : 'translate-x-0',
                      'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                    )}
                  />
                </Switch>
              </div>
              <div className="ml-3">
                <p className="text-gray-500 font-extralight text-base">
                  By selecting this, you agree to the{' '}
                  <a
                    className="text-gray-700 underline"
                    target="_blank"
                    href="https://www.freeprivacypolicy.com/live/0d59427f-a0fc-4616-ab82-35ad89d64e02"
                    rel="noreferrer"
                  >
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="w-full inline-flex items-center 
              justify-center px-6 py-3 border border-transparent rounded-md 
              shadow-sm text-base font-medium text-white bg-indigo-600 
              hover:bg-indigo-700 focus:outline-none focus:ring-2 
              focus:ring-offset-2 focus:ring-indigo-500"
            >
              {"Let's talk"}
            </button>
          </div>
          {!!formik.status && <div>{formik.status}</div>}
        </form>
      </div>
    </>
  );
}

export default function Contact() {
  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <BackgroundPattern />
        <ContactForm />
      </div>
    </div>
  );
}
