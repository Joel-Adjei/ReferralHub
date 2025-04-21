import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Define validation schema
const CampaignSchema = Yup.object().shape({
    campaignName: Yup.string().required('Campaign name is required'),
    promoter: Yup.object().shape({
        rewardType: Yup.string().required('Reward type is required'),
        rewardValue: Yup.string().required('Reward value is required'),
        message: Yup.string().required('Promoter message is required'),
        followUpStrategy: Yup.object().shape({
            type: Yup.string().required('Follow-up strategy is required'),
            waitDays: Yup.number().when('type', {
                is: 'wait',
                then: Yup.number().required('Wait days is required').min(1, 'Must be at least 1 day'),
            }),
            actions: Yup.array().of(
                Yup.object().shape({
                    actionType: Yup.string().required('Action type is required'),
                    phoneNumber: Yup.string().when('actionType', {
                        is: 'sms',
                        then: Yup.string().required('Phone number is required'),
                    }),
                    message: Yup.string().required('Message is required'),
                })
            ),
        }),
    }),
    leads: Yup.object().shape({
        rewardType: Yup.string().required('Reward type is required'),
        rewardValue: Yup.string().required('Reward value is required'),
        message: Yup.string().required('Referred message is required'),
        formFields: Yup.object().shape({
            fullName: Yup.boolean(),
            emailAddress: Yup.boolean(),
            phoneNumber: Yup.boolean(),
            agree: Yup.boolean(),
        }),
        followUpStrategy: Yup.object().shape({
            type: Yup.string().required('Follow-up strategy is required'),
            waitDays: Yup.number().when('type', {
                is: 'wait',
                then: Yup.number().required('Wait days is required').min(1, 'Must be at least 1 day'),
            }),
            actions: Yup.array().of(
                Yup.object().shape({
                    actionType: Yup.string().required('Action type is required'),
                    phoneNumber: Yup.string().when('actionType', {
                        is: 'sms',
                        then: Yup.string().required('Phone number is required'),
                    }),
                    message: Yup.string().required('Message is required'),
                })
            ),
        }),
    }),
});

const CreateCampaignForm = () => {
    // Initialize state for action forms
    const [promoterActions, setPromoterActions] = useState([]);
    const [leadsActions, setLeadsActions] = useState([]);

    // Initial form values
    const initialValues = {
        campaignName: '',
        promoter: {
            rewardType: 'Points',
            rewardValue: '',
            message: '',
            followUpStrategy: {
                type: 'sms',
                waitDays: 5,
                actions: [],
            },
        },
        leads: {
            rewardType: 'Discount',
            rewardValue: '',
            message: '',
            formFields: {
                fullName: true,
                emailAddress: true,
                phoneNumber: false,
                agree: true,
            },
            followUpStrategy: {
                type: 'sms',
                waitDays: 5,
                actions: [],
            },
        },
    };

    const handleAddAction = (section, setFieldValue, values) => {
        if (section === 'promoter') {
            const newActions = [...promoterActions, { id: Date.now(), actionType: 'email', phoneNumber: '', message: '' }];
            setPromoterActions(newActions);
            setFieldValue('promoter.followUpStrategy.actions', newActions);
        } else {
            const newActions = [...leadsActions, { id: Date.now(), actionType: 'email', phoneNumber: '', message: '' }];
            setLeadsActions(newActions);
            setFieldValue('leads.followUpStrategy.actions', newActions);
        }
    };

    const handleSubmit = (values) => {
        console.log('Form values:', values);
        // Here you would typically handle the form submission
    };

    return (
        <div className="max-w-2xl mx-auto bg-gray-50 p-6">
            <h1 className="text-xl font-bold text-gray-800">Create New Campaign</h1>
            <p className="text-sm text-gray-500 mb-6">Create a new referral campaign in just few steps.</p>

            <Formik
                initialValues={initialValues}
                validationSchema={CampaignSchema}
                onSubmit={handleSubmit}
            >
                {({ values, errors, touched, setFieldValue }) => (
                    <Form className="space-y-6">
                        {/* Campaign Name Section */}
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <label className="block text-gray-700 font-medium mb-2">Campaign Name</label>
                            <Field
                                name="campaignName"
                                type="text"
                                placeholder="e.g., Summer Referral Special"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <ErrorMessage name="campaignName" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        {/* Promoter Settings Section */}
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <h2 className="text-lg font-medium text-gray-800 mb-4">Promoter Settings</h2>

                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-gray-700 text-sm mb-1">
                                        Reward Type<span className="text-red-500">*</span>
                                    </label>
                                    <div className="bg-blue-50 p-3 rounded-md text-center">
                                        <div className="text-blue-700">Points</div>
                                        <div className="text-xs text-gray-500">($1 is equivalent to 10 points)</div>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm mb-1">
                                        Reward Value<span className="text-red-500">*</span>
                                    </label>
                                    <Field
                                        name="promoter.rewardValue"
                                        type="text"
                                        placeholder="e.g., 200 points"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <ErrorMessage name="promoter.rewardValue" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm mb-1">
                                    Promoter Message<span className="text-red-500">*</span>
                                </label>
                                <Field
                                    as="textarea"
                                    name="promoter.message"
                                    rows="3"
                                    placeholder='e.g., "Hey! Share this with your friends and get $20 for each successful signup!"'
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <ErrorMessage name="promoter.message" component="div" className="text-red-500 text-sm mt-1" />
                            </div>

                            {/* Follow-Up Strategy */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm mb-2">
                                    Follow-Up Strategy<span className="text-red-500">*</span>
                                </label>
                                <div className="bg-blue-50 p-4 rounded-md">
                                    <div className="flex items-center space-x-2 mb-3">
                                        <div className="h-5 w-5 bg-green-100 rounded-sm flex items-center justify-center">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 13L9 17L19 7" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                        <span className="text-sm font-medium">SMS</span>
                                    </div>

                                    <div className="flex items-center space-x-2 mb-4">
                                        <div className="h-5 w-5 bg-blue-100 rounded-full flex items-center justify-center text-xs text-blue-600">
                                            <span>?</span>
                                        </div>
                                        <span className="text-sm font-medium">Wait 5 days</span>
                                    </div>

                                    <div className="space-y-3">
                                        <div>
                                            <label className="block text-gray-700 text-sm mb-1">Action Type</label>
                                            <div className="flex space-x-4 mb-3">
                                                <label className="inline-flex items-center">
                                                    <Field
                                                        type="radio"
                                                        name="promoter.followUpStrategy.actions[0].actionType"
                                                        value="email"
                                                        className="form-radio h-4 w-4 text-blue-600"
                                                    />
                                                    <span className="ml-2 text-sm">Email</span>
                                                </label>
                                                <label className="inline-flex items-center">
                                                    <Field
                                                        type="radio"
                                                        name="promoter.followUpStrategy.actions[0].actionType"
                                                        value="sms"
                                                        className="form-radio h-4 w-4 text-blue-600"
                                                    />
                                                    <span className="ml-2 text-sm">SMS</span>
                                                </label>
                                                <label className="inline-flex items-center">
                                                    <Field
                                                        type="radio"
                                                        name="promoter.followUpStrategy.actions[0].actionType"
                                                        value="wait"
                                                        className="form-radio h-4 w-4 text-blue-600"
                                                    />
                                                    <span className="ml-2 text-sm">Wait Duration</span>
                                                </label>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-gray-700 text-sm mb-1">Phone Number</label>
                                            <div className="relative">
                                                <Field
                                                    as="select"
                                                    name="promoter.followUpStrategy.actions[0].phoneNumber"
                                                    className="w-full appearance-none px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                >
                                                    <option value="">Select</option>
                                                    <option value="primary">Primary Phone</option>
                                                    <option value="secondary">Secondary Phone</option>
                                                </Field>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-gray-700 text-sm mb-1">Follow-Up Message</label>
                                            <Field
                                                as="textarea"
                                                name="promoter.followUpStrategy.actions[0].message"
                                                rows="3"
                                                placeholder="Enter message..."
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>

                                        <button
                                            type="button"
                                            onClick={() => handleAddAction('promoter', setFieldValue, values)}
                                            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md flex items-center justify-center"
                                        >
                                            <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                            </svg>
                                            Add Action
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Leads Settings Section */}
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <h2 className="text-lg font-medium text-gray-800 mb-4">Leads Settings</h2>

                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-gray-700 text-sm mb-1">
                                        Reward Type<span className="text-red-500">*</span>
                                    </label>
                                    <div className="bg-blue-50 p-3 rounded-md text-center">
                                        <div className="text-blue-700">Discount</div>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm mb-1">
                                        Reward Value<span className="text-red-500">*</span>
                                    </label>
                                    <Field
                                        name="leads.rewardValue"
                                        type="text"
                                        placeholder="e.g., 20%"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <ErrorMessage name="leads.rewardValue" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm mb-1">
                                    Referred Message<span className="text-red-500">*</span>
                                </label>
                                <Field
                                    as="textarea"
                                    name="leads.message"
                                    rows="3"
                                    placeholder="e.g., You\'ve been invited! Sign up now and get 15% off your first order!"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <ErrorMessage name="leads.message" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        <div className="mb-4">
                            <div className="flex items-center justify-between mb-1">
                                <label className="block text-gray-700 text-sm">Form Fields</label>
                                <button type="button" className="text-gray-500 hover:text-gray-700">
                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </button>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <label className="inline-flex items-center">
                                    <Field
                                        type="checkbox"
                                        name="leads.formFields.fullName"
                                        className="form-checkbox h-4 w-4 text-blue-600"
                                    />
                                    <span className="ml-2 text-sm">Full Name</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <Field
                                        type="checkbox"
                                        name="leads.formFields.emailAddress"
                                        className="form-checkbox h-4 w-4 text-blue-600"
                                    />
                                    <span className="ml-2 text-sm">Email Address</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <Field
                                        type="checkbox"
                                        name="leads.formFields.phoneNumber"
                                        className="form-checkbox h-4 w-4 text-blue-600"
                                    />
                                    <span className="ml-2 text-sm">Phone Number</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <Field
                                        type="checkbox"
                                        name="leads.formFields.agree"
                                        className="form-checkbox h-4 w-4 text-blue-600"
                                    />
                                    <span className="ml-2 text-sm">Agree</span>
                                </label>
                            </div>
                        </div>

                        {/* Follow-Up Strategy for Leads */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm mb-2">
                                Follow-Up Strategy<span className="text-red-500">*</span>
                            </label>
                            <div className="bg-blue-50 p-4 rounded-md">
                                <div className="flex items-center space-x-2 mb-3">
                                    <div className="h-5 w-5 bg-green-100 rounded-sm flex items-center justify-center">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 13L9 17L19 7" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <span className="text-sm font-medium">SMS</span>
                                </div>

                                <div className="flex items-center space-x-2 mb-4">
                                    <div className="h-5 w-5 bg-blue-100 rounded-full flex items-center justify-center text-xs text-blue-600">
                                        <span>?</span>
                                    </div>
                                    <span className="text-sm font-medium">Wait 5 days</span>
                                </div>

                                <div className="space-y-3">
                                    <div>
                                        <label className="block text-gray-700 text-sm mb-1">Action Type</label>
                                        <div className="flex space-x-4 mb-3">
                                            <label className="inline-flex items-center">
                                                <Field
                                                    type="radio"
                                                    name="leads.followUpStrategy.actions[0].actionType"
                                                    value="email"
                                                    className="form-radio h-4 w-4 text-blue-600"
                                                />
                                                <span className="ml-2 text-sm">Email</span>
                                            </label>
                                            <label className="inline-flex items-center">
                                                <Field
                                                    type="radio"
                                                    name="leads.followUpStrategy.actions[0].actionType"
                                                    value="sms"
                                                    className="form-radio h-4 w-4 text-blue-600"
                                                />
                                                <span className="ml-2 text-sm">SMS</span>
                                            </label>
                                            <label className="inline-flex items-center">
                                                <Field
                                                    type="radio"
                                                    name="leads.followUpStrategy.actions[0].actionType"
                                                    value="wait"
                                                    className="form-radio h-4 w-4 text-blue-600"
                                                />
                                                <span className="ml-2 text-sm">Wait Duration</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 text-sm mb-1">Phone Number</label>
                                        <div className="relative">
                                            <Field
                                                as="select"
                                                name="leads.followUpStrategy.actions[0].phoneNumber"
                                                className="w-full appearance-none px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            >
                                                <option value="">Select</option>
                                                <option value="primary">Primary Phone</option>
                                                <option value="secondary">Secondary Phone</option>
                                            </Field>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 text-sm mb-1">Follow-Up Message</label>
                                        <Field
                                            as="textarea"
                                            name="leads.followUpStrategy.actions[0].message"
                                            rows="3"
                                            placeholder="Enter message..."
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => handleAddAction('leads', setFieldValue, values)}
                                        className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md flex items-center justify-center"
                                    >
                                        <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                        </svg>
                                        Add Action
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Launch Button */}
                    <button
                    type="submit"
                    className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md transition duration-200"
                    >
                    Launch
                    </button>
                    </Form>
                    )}
            </Formik>
        </div>
    );
};

export default CreateCampaignForm;