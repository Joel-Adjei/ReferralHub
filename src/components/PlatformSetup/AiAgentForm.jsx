import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

// Define validation schema
const AgentRulesSchema = Yup.object().shape({
    toneOfCommunication: Yup.string(),
    responseStyle: Yup.string(),
    autoOfferHelp: Yup.boolean().required(),
    userInitiatedOnly: Yup.boolean().required(),
});

const ToggleSwitch = ({ field, form, ...props }) => {
    return (
        <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
            <input
                type="checkbox"
                id={field.name}
                {...field}
                {...props}
                className="sr-only"
                checked={field.value}
            />
            <label
                htmlFor={field.name}
                className={`block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer ${
                    field.value ? 'bg-blue-500' : ''
                }`}
            >
        <span
            className={`block h-6 w-6 rounded-full bg-white shadow transform transition-transform duration-200 ease-in ${
                field.value ? 'translate-x-6' : ''
            }`}
        />
            </label>
        </div>
    );
};

const Select = ({ field, form, options, ...props }) => {
    return (
        <div className="relative">
            <select
                className="w-full px-4 py-2 border rounded-md appearance-none text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...field}
                {...props}
            >
                <option value="">Select</option>
                {options && options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </div>
        </div>
    );
};

const AIAgentForm = () => {
    const toneOptions = [
        { value: 'formal', label: 'Formal' },
        { value: 'casual', label: 'Casual' },
        { value: 'friendly', label: 'Friendly' },
        { value: 'professional', label: 'Professional' }
    ];

    const styleOptions = [
        { value: 'concise', label: 'Concise' },
        { value: 'detailed', label: 'Detailed' },
        { value: 'technical', label: 'Technical' },
        { value: 'simplified', label: 'Simplified' }
    ];

    const initialValues = {
        toneOfCommunication: '',
        responseStyle: '',
        autoOfferHelp: true,
        userInitiatedOnly: true,
    };

    const handleSubmit = (values) => {
        console.log('Form values:', values);
        // Here you would typically handle the form submission
        // For example, send the data to an API
    };

    return (
        <div className="max-w-md mx-auto p-6">
            <h1 className="text-2xl font-bold text-center mb-8">Set Up AI Agent Rules</h1>

            <Formik
                initialValues={initialValues}
                validationSchema={AgentRulesSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) => (
                    <Form className="space-y-6">
                        <div>
                            <label className="block text-gray-700 mb-2">Tone of Communication</label>
                            <Field
                                name="toneOfCommunication"
                                component={Select}
                                options={toneOptions}
                            />
                            {errors.toneOfCommunication && touched.toneOfCommunication && (
                                <div className="text-red-500 mt-1">{errors.toneOfCommunication}</div>
                            )}
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2">Response Style</label>
                            <Field
                                name="responseStyle"
                                component={Select}
                                options={styleOptions}
                            />
                            {errors.responseStyle && touched.responseStyle && (
                                <div className="text-red-500 mt-1">{errors.responseStyle}</div>
                            )}
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-medium text-gray-700">Auto-offer help</h3>
                                    <p className="text-sm text-gray-500">
                                        AI pops up suggestions automatically when user lands on a page.
                                    </p>
                                </div>
                                <Field name="autoOfferHelp" component={ToggleSwitch} />
                            </div>
                            {errors.autoOfferHelp && touched.autoOfferHelp && (
                                <div className="text-red-500 mt-1">{errors.autoOfferHelp}</div>
                            )}
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-medium text-gray-700">User-initiated only</h3>
                                    <p className="text-sm text-gray-500">
                                        AI only responds when clicked or messaged.
                                    </p>
                                </div>
                                <Field name="userInitiatedOnly" component={ToggleSwitch} />
                            </div>
                            {errors.userInitiatedOnly && touched.userInitiatedOnly && (
                                <div className="text-red-500 mt-1">{errors.userInitiatedOnly}</div>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md transition duration-200"
                        >
                            Next
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AIAgentForm;