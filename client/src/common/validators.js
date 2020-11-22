export const required = value => value ? undefined : 'Required';

export const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const maxLength20 = maxLength(20);

export const maxLength10 = maxLength(10);

export const maxLength99 = maxLength(99);

export const minValue = min => value =>
    value && value.length < min ? `Must be at least ${min}` : undefined;

export const minValue3 = minValue(3);

export const minValue10 = minValue(10);

export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined;

export const phoneNumber = value =>
    value && ! /(\d?)(\d{3})(\d{3})(\d{2})(\d{2})/g.test(value)
        ? 'Invalid phone number, must be 10 digits'
        : undefined;