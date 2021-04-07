import React, { Component, useState, useReducer, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { Field, reduxForm } from 'redux-form';
import { required, maxLength222, maxLength22, minValue4, onlyString, email } from '../validation';

import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';

import ReactTooltip from 'react-tooltip';
import axios from "axios";

const BaseURLBypass = 'http://localhost:3001/';

const BgImage = require("../assets/images/map.png");
const HeaderImage = require("../assets/images/bg-01.jpg");


const InputWrapper = ({ input, type, AddonPrefix, placeholder, readonly = false, className = false, meta: { touched, error, warning }, ...props }) => {

    const LabelValidate = (name) => name.replace(/([A-Z])/g, ' $1').trim();
    return (
        <div className="wrap-input100 validate-input">
            <span className="label-input100">{LabelValidate(input.name)}</span>
            <input {...input}
                type={type}
                className="input100"
                disabled={readonly}
                placeholder={placeholder}
            />
            {touched &&
                ((error && <span style={{ color: 'red', fontSize: '12px' }}>{error}</span>) ||
                    (warning && <span>{warning}</span>))}
        </div>
    );
};

const TextAreaWrapper = ({ input, type, AddonPrefix, placeholder, readonly = false, className = false, meta: { touched, error, warning }, ...props }) => {

    const LabelValidate = (name) => name.replace(/([A-Z])/g, ' $1').trim();
    return (
        <div className="wrap-input100 validate-input">
            <span className="label-input100">{LabelValidate(input.name)}</span>
            <textarea {...input}
                type={type}
                className="input100"
                disabled={readonly}
                placeholder={placeholder}
            />
            {touched &&
                ((error && <span style={{ color: 'red', fontSize: '12px' }}>{error}</span>) ||
                    (warning && <span>{warning}</span>))}
        </div>
    );
};

function HomeComponent(props) {

    const selector = useSelector((state) => state.form);
    const [availableCount, SetAvailableCount] = useState(0);

    useEffect(() => {
        getAllLeadsData();
    }, [])

    const submitContactUs = async (values) => {
        console.log(values);
        if(!!values) {
            const request = {
                fullname: values.FullName,
                email: values.Email,
                message: values.Message
            };
            
            axios.post('api/leads/addContactUs', request)
            .then(function (response) {
                // handle success
                const { data } = response;
                console.log(response);
                if(data && data.success) {
                    getAllLeadsData();
                    showNotification('success', 'Success!', 'Thanks for contacting us.');
                }
            })
            .catch(function (error) {
                showNotification('error', 'Error!', 'Something went wrong!, Please try again later.');
            });
        } else {
            showNotification('warning', 'Warning!', 'Please check the values!');
        }
    }

    const showNotification = (type, title, message) => {
        switch (type) {
            case 'info':
                NotificationManager.info(message);
                break;
            case 'success':
                console.log('showNotification', type)
                NotificationManager.success(message, title);
                break;
            case 'warning':
                NotificationManager.warning(message, title, 3000);
                break;
            case 'error':
                NotificationManager.error(message, title, 5000);
                break;
        }
    };

    const getAllLeadsData = () => {
        axios.get('api/admin/getAllLeads')
            .then(function (response) {
                // handle success
                console.log(response);
                if(response && response.data) {
                    SetAvailableCount(1);
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                SetAvailableCount(0);
            });
    }

    const downloadAllCSV = () => {
        console.log('Download All CSV');
        const downloadURL = "api/admin/downloadAllLeads";
        window.open(downloadURL, 'blank');
        // showNotification('success', 'Warning message', 'Close after 3000ms');
    };

    return (
        <div className="container-contact100">
            <div className="contact100-map" id="background_map" style={{
                background: `linear-gradient(to right, #02010282, #000000c7), url(${BgImage}) no-repeat top center`
            }}></div>

            <div className="wrap-contact100">
                <div className="contact100-form-title" style={{
                    backgroundImage: `url(${HeaderImage})`
                }}>
                    <div
                        className="download-button"
                        onClick={downloadAllCSV}
                        data-tip="download all Contact Us List as CSV" >
                        <i className="fa fa-download" aria-hidden="true"></i>
                        <div className="leadsCount">{availableCount}</div>
                    </div>
                    <span className="contact100-form-title-1">
                        Contact Us
                    </span>

                    <span className="contact100-form-title-2">
                        Feel free to drop us a line below!
                    </span>
                </div>

                <form className="contact100-form validate-form" onSubmit={props.handleSubmit(submitContactUs)}>
                    <Field name="FullName" component={InputWrapper} type="text" placeholder="Enter full name" validate={[required, minValue4, onlyString, maxLength22]} />
                    <Field name="Email" component={InputWrapper} type="email" placeholder="Enter email address" validate={[required, email]} />
                    <Field name="Message" component={TextAreaWrapper} placeholder="Your Comment..." validate={[required, maxLength222]} />

                    <div className="container-contact100-form-btn">
                        <button className="contact100-form-btn">
                            <span>
                                Submit
                                <i className="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
                            </span>
                        </button>
                    </div>
                </form>
            </div>

            <NotificationContainer />
            <ReactTooltip />
        </div>
    );
}



const createContactForm = reduxForm({ form: '_contactForm' });

const ContactForm = createContactForm(HomeComponent)

export default ContactForm;