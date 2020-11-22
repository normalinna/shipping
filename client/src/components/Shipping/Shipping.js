import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {required, email, minValue10, minValue3, maxLength20, maxLength99, maxLength10, phoneNumber} from '../../common/validators';
import {renderField} from '../../common/renderField';

import './Shipping.css';

let Shipping = (props) => {
    const { submitting, handleSubmit } = props;

    return(
            <div className="card">
                <form onSubmit={handleSubmit(props.submitForm)}>
                    <label>Name*</label>
                    <Field
                        name="name"
                        component={renderField}
                        type="text"
                        validate={[required, minValue3, maxLength20]}
                    />

                    <label>Adress*</label>
                    <Field
                        name="adress"
                        component={renderField}
                        type="text"
                        validate={[required, minValue10, maxLength99]}
                    />

                    <label>Phone</label>
                    <Field
                        name="phone"
                        c component={renderField}
                        type="number"
                        validate={[required, phoneNumber]}
                    />

                    <label>E-mail address</label>
                    <Field
                        name="email"
                        component={renderField}
                        type="email"
                        validate={[required, email]}
                    />

                    <label>Password</label>
                    <Field
                        name="password"
                        component={renderField}
                        type="password"
                        validate={[required, minValue3, maxLength10]}
                    />

                    <label>Shipping options</label>
                    <Field name="select" component="select">
                        {props.selectValue.map((value) => (
                            <option key={value} value={value}>{value}</option>
                        ))}
                    });
                    </Field>

                    <button type="submit" disabled={submitting}>Pay</button>
                </form>
            </div>
    )
}

export default reduxForm({
    form: 'selectingFormValues'
})(Shipping);