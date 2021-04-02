import React, { Component, useState, useReducer } from 'react';
import { Field, reduxForm, formValueSelector,getFormError, hasSubmitFailed, initialize, change } from 'redux-form';
import { useDispatch, useSelector } from "react-redux";
import { formValidator, required, maxLength80, minValue4, onlyString } from '../validation';

const BgImage = require("../assets/images/map.png");


const InputWrapper = ({ input, type, AddonPrefix, placeholder, maxlength, errormessage, readonly = false, className = false, meta: { touched, error, warning }, ...props }) => {
    
    const LableValidate = (name) => name.replace(/([A-Z])/g, ' $1').trim();
    return (
        <div className="wrap-input100 validate-input">
          <span className="label-input100">{LableValidate(input.name)}</span>
          <input {...input}
            type={type}
            maxLength={(maxlength) ? maxlength : ''}
            className="input100"
            disabled={readonly}
            placeholder={placeholder}
          />
          {touched &&
            ((error && <span style={{ color: 'red' }}>{error}</span>) ||
              (warning && <span>{warning}</span>))}
        </div>
      );
};

function HomeComponent(props) {

    const selector = useSelector((state) => state.form);
    console.log('HomeComponent props', props);
    console.log('selector', selector);


    const submitContactUs = async (values) => {
        console.log(values);
    }

    return (
        <div className="container-contact100">
            <div className="contact100-map" id="background_map" style={{
                background: `linear-gradient(to right, #02010282, #000000c7), url(${BgImage}) no-repeat top center`
            }}></div>

            <div className="wrap-contact100">
                {/* style="background-image: url(images/bg-01.jpg);" */}
                <div className="contact100-form-title" >
                    <span className="contact100-form-title-1">
                        Contact Us
				    </span>

                    <span className="contact100-form-title-2">
                        Feel free to drop us a line below!
				    </span>
                </div>

                <form className="contact100-form validate-form" onSubmit={props.handleSubmit(submitContactUs)}>
                    <Field name="FullName" component={InputWrapper} type="text" placeholder="Enter full name" validate={[required, maxLength80, minValue4, onlyString]} />
                    <Field name="Email" component={InputWrapper} type="email" placeholder="Enter email addess" validate={[required]} />

                    <div className="wrap-input100 validate-input" data-validate="Message is required">
                        <span className="label-input100">Message:</span>
                        <textarea className="input100" name="message" placeholder="Your Comment..."></textarea>
                        <span className="focus-input100"></span>
                    </div>

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
        </div>
    );
}



const createContactForm = reduxForm({ form: '_contactForm' });

const ContactForm = createContactForm(HomeComponent)

export default ContactForm;