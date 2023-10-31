import JustValidate from 'just-validate';

function createFormValidation(form) {
    const validator = new JustValidate(form, undefined, []);

    validator.addField('[name="user-name"]', [
        {
            rule: 'required',
            errorMessage: 'This field is required',
        },
        {
            rule: 'minLength',
            value: 2,
            errorMessage: 'The name must have at least 2 letters',
        },
    ]).addField('[name="email"]', [
        {
            rule: 'required',
            value: /[a-z, A-Z, 0-9]/gi,
            errorMessage: 'This field is required',
        },
        {
            rule: 'email',
            errorMessage: 'Email has invalid format',
        },
    ]);
}
export default createFormValidation;
