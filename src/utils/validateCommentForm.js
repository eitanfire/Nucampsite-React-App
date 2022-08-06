export const validateCommentForm = (values) => {
  console.log({values, values})
    const errors = {}

    if (!values.rating) {
        errors.rating = 'Required'
    }  if (values.author.length < 2) {
        errors.author = 'Must be at least 2 characters.';
    } else if (values.author.length > 15) {
        errors.author = 'Must be 15 characters or less';
    }
    return errors;
}

// you copy/pasted the contents of validateContactForm (presumably to use as a model for what you were doing here)
//  but then you forgot to delete it. So there's an unused function that shouldn't be there.

// export const validateContactForm = (values) => {
//     const errors = {}

//     if (!values.firstName) {
//         errors.firstName = 'Required'
//     } else if (values.firstName.length < 2) {
//         errors.firstName = 'Must be at least 2 characters.';
//     } else if (values.firstName.length > 15) {
//         errors.firstName = 'Must be 15 characters or less';
//     }

//     if (!values.lastName) {
//         errors.lastName = 'Required'
//     } else if (values.lastName.length < 2) {
//         errors.lastName = 'Must be at least 2 characters.';
//     } else if (values.lastName.length > 15) {
//         errors.lastName = 'Must be 15 characters or less';
//     }

//     const reg = /^\d+$/;
//     if (!reg.test(values.phoneNum)) {
//         errors.phoneNum = 'The phone number should contain only numbers.';
//     }

//     if (!values.email.includes('@')) {
//         errors.email = 'Email should contain a @';
//     }

//     return errors;
// }