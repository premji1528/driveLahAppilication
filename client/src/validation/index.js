export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined

const minValue = (min) => (value) =>
  (value && value.length) < min ? `Value must be greater than ${min}` : undefined;

const maxLength = max => value =>
  value && value.length > max ? `Value must be less than ${max} character` : undefined;

export const onlyString = (value, allValues, props, name) => (/\d/.test(value)) ? getFormattedFieldName(name) + ' must be a String' : undefined;

export const minValue4 = minValue(4)
export const maxLength80 = maxLength(80)

export function getFormattedFieldName(field) {
  return field.replace(/([A-Z])/g, ' $1').trim();
}

export const required = (value, allValues, props, name) => {
  if (value) {
    return undefined;
  } else {
    let fieldname = getFormattedFieldName(name);
    return fieldname + " is required";
  }
}

export const formValidator = values => {
  const errors = {}
  console.log(values)
  if (!values.first_name) {
    errors.first_name = 'Enter Your First Name'
  }
  if (!values.last_name) {
    errors.last_name = 'Enter Your Last Name'
  }
  if (!values.email) {
    errors.email = 'Enter Your EMail'
  }
  if (!values.mobile_number) {
    errors.mobile_number = 'Enter Your Mobile Number'
  }
  if (!values.password) {
    errors.password = 'Enter Your Password'
  }

  return errors
}

