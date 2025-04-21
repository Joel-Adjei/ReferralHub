import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BiChevronDown } from "react-icons/bi";
import { usePlatFormSetup} from "../../context/PlatFormSetupContext";
// import { ChevronDownIcon } from 'lucide-react';

const BusinessProfileForm = () => {
    const { toCustomerData } = usePlatFormSetup()

    // Initial form values
    const initialValues = {
        businessLogo: null,
        businessDescription: '',
        businessName: '',
        businessEmail: '',
        businessPhone: '',
        industry: '',
        services: '',
        products: '',
        companySize: '',
        city: '',
        state: '',
        zipCode: ''
    };

    // Validation schema using Yup
    const validationSchema = Yup.object({
        businessDescription: Yup.string().required('Business description is required'),
        businessName: Yup.string().required('Business name is required'),
        businessEmail: Yup.string().email('Invalid email format').required('Business email is required'),
        businessPhone: Yup.string().required('Business phone is required'),
        industry: Yup.string().required('Industry is required'),
        services: Yup.string().required('Services are required'),
        products: Yup.string().required('Products are required'),
        city: Yup.string().required('City is required'),
        state: Yup.string().required('State is required'),
        zipCode: Yup.string().required('Zip code is required')
    });

    // Form submission handler
    const handleSubmit = (values, { setSubmitting }) => {
        console.log('Form values:', values);
        setSubmitting(false);
        // Add your API call or further processing here
        toCustomerData();
    };

    // Sample options for dropdown fields
    const industryOptions = [
        'Technology', 'Healthcare', 'Finance', 'Education',
        'Retail', 'Manufacturing', 'Hospitality', 'Other'
    ];

    const companySizeOptions = [
        '1-10', '11-50', '51-200', '201-500', '501+'
    ];

    const cityOptions = [
        'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix',
        'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'Austin'
    ];

    const stateOptions = [
        'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
        'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
        'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
        'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
        'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
    ];

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg">
            <h1 className="text-2xl font-bold text-center mb-6">Build Your Business Identity</h1>
            <p className="text-gray-600 text-center mb-8">
                Help us tailor the referral experience by adding key details about your business
            </p>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting, setFieldValue, errors, touched }) => (
                    <Form className="space-y-6">
                        <div className="flex items-center">
                            <label htmlFor="businessLogo" className="w-1/3 font-medium">
                                Business Logo
                            </label>
                            <div className="w-2/3">
                                <button
                                    type="button"
                                    onClick={() => document.getElementById('logoInput').click()}
                                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50"
                                >
                                    Choose Image
                                </button>
                                <input
                                    id="logoInput"
                                    name="businessLogo"
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={(event) => {
                                        setFieldValue('businessLogo', event.currentTarget.files[0]);
                                    }}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="businessDescription" className="block font-medium mb-1">
                                Business Description
                            </label>
                            <Field
                                as="textarea"
                                id="businessDescription"
                                name="businessDescription"
                                placeholder="Enter business description..."
                                className={`w-full p-3 border ${
                                    errors.businessDescription && touched.businessDescription
                                        ? 'border-red-500'
                                        : 'border-gray-300'
                                } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                rows="4"
                            />
                            <ErrorMessage
                                name="businessDescription"
                                component="div"
                                className="text-red-500 text-sm mt-1"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="businessName" className="block font-medium mb-1">
                                    Business Name
                                </label>
                                <Field
                                    type="text"
                                    id="businessName"
                                    name="businessName"
                                    placeholder="Enter business name"
                                    className={`w-full p-3 border ${
                                        errors.businessName && touched.businessName ? 'border-red-500' : 'border-gray-300'
                                    } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                />
                                <ErrorMessage
                                    name="businessName"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            <div>
                                <label htmlFor="businessEmail" className="block font-medium mb-1">
                                    Business Email
                                </label>
                                <Field
                                    type="email"
                                    id="businessEmail"
                                    name="businessEmail"
                                    placeholder="e.g., robert.fox@myemail.com"
                                    className={`w-full p-3 border ${
                                        errors.businessEmail && touched.businessEmail ? 'border-red-500' : 'border-gray-300'
                                    } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                />
                                <ErrorMessage
                                    name="businessEmail"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            <div>
                                <label htmlFor="businessPhone" className="block font-medium mb-1">
                                    Business Phone No.
                                </label>
                                <Field
                                    type="text"
                                    id="businessPhone"
                                    name="businessPhone"
                                    placeholder="Enter phone no."
                                    className={`w-full p-3 border ${
                                        errors.businessPhone && touched.businessPhone ? 'border-red-500' : 'border-gray-300'
                                    } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                />
                                <ErrorMessage
                                    name="businessPhone"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            <div>
                                <label htmlFor="industry" className="block font-medium mb-1">
                                    Industry
                                </label>
                                <div className="relative">
                                    <Field
                                        as="select"
                                        id="industry"
                                        name="industry"
                                        className={`w-full p-3 border ${
                                            errors.industry && touched.industry ? 'border-red-500' : 'border-gray-300'
                                        } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none`}
                                    >
                                        <option value="">Select</option>
                                        {industryOptions.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </Field>
                                    <BiChevronDown className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                                </div>
                                <ErrorMessage
                                    name="industry"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            <div>
                                <label htmlFor="services" className="block font-medium mb-1">
                                    Services
                                </label>
                                <Field
                                    type="text"
                                    id="services"
                                    name="services"
                                    placeholder="Enter services.."
                                    className={`w-full p-3 border ${
                                        errors.services && touched.services ? 'border-red-500' : 'border-gray-300'
                                    } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                />
                                <ErrorMessage
                                    name="services"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            <div>
                                <label htmlFor="products" className="block font-medium mb-1">
                                    Products
                                </label>
                                <Field
                                    type="text"
                                    id="products"
                                    name="products"
                                    placeholder="Enter products..."
                                    className={`w-full p-3 border ${
                                        errors.products && touched.products ? 'border-red-500' : 'border-gray-300'
                                    } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                />
                                <ErrorMessage
                                    name="products"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            <div>
                                <label htmlFor="companySize" className="block font-medium mb-1">
                                    Company Size <span className="text-gray-400">(Optional)</span>
                                </label>
                                <div className="relative">
                                    <Field
                                        as="select"
                                        id="companySize"
                                        name="companySize"
                                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                                    >
                                        <option value="">Select</option>
                                        {companySizeOptions.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </Field>
                                    <BiChevronDown className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="city" className="block font-medium mb-1">
                                    City
                                </label>
                                <div className="relative">
                                    <Field
                                        as="select"
                                        id="city"
                                        name="city"
                                        className={`w-full p-3 border ${
                                            errors.city && touched.city ? 'border-red-500' : 'border-gray-300'
                                        } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none`}
                                    >
                                        <option value="">Select</option>
                                        {cityOptions.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </Field>
                                    <BiChevronDown className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                                </div>
                                <ErrorMessage
                                    name="city"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            <div>
                                <label htmlFor="state" className="block font-medium mb-1">
                                    State
                                </label>
                                <div className="relative">
                                    <Field
                                        as="select"
                                        id="state"
                                        name="state"
                                        className={`w-full p-3 border ${
                                            errors.state && touched.state ? 'border-red-500' : 'border-gray-300'
                                        } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none`}
                                    >
                                        <option value="">Select</option>
                                        {stateOptions.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </Field>
                                    <BiChevronDown className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                                </div>
                                <ErrorMessage
                                    name="state"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            <div>
                                <label htmlFor="zipCode" className="block font-medium mb-1">
                                    Zip Code
                                </label>
                                <Field
                                    type="text"
                                    id="zipCode"
                                    name="zipCode"
                                    placeholder="Enter zip code"
                                    className={`w-full p-3 border ${
                                        errors.zipCode && touched.zipCode ? 'border-red-500' : 'border-gray-300'
                                    } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                />
                                <ErrorMessage
                                    name="zipCode"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-md transition duration-200"
                            >
                                Next
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default BusinessProfileForm;
