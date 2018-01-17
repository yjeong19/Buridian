export function isEmpty(str) {
    return (!str || 0 === str.length);
}

export function validateEmail(email) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (filter.test(email)) return true;

    return false;
}

export function validatePassword(password) {
    if (password.length > 6) return true;

    return false;
}

export function confirmPassword(c_password, password) {
    if (c_password === password) return true;

    return false;
}

export function validate(form) {
    let error = {};
    let success = true;

    var keys = Object.keys(form);
    var length = keys.length;

    keys.slice(0, length).map(field => {
        if (field !== "error"){
            var { type, value } = form[field];
            if (isEmpty(value)){
                error[field] = 'Your ' + field + ' is required';
                success = false;
            }else{
                error[field] = '';

                switch (type){
                    case "email" :
                        success = validateEmail(value);
                        error[field] = !success ? 'Enter a valid email address' : '';
                        break;

                    case "password" :
                        success = validatePassword(value);
                        error[field] = !success ? 'Password must be at least 6 characters' : '';
                        break;

                    case "confirm_password" :
                        success = confirmPassword(value, form["password"]['value']);
                        error[field] = !success ? 'Password does not match.' : '';
                        break;

                    default:
                        break;
                }
            }
        }
    });

    return {success, error};
}
