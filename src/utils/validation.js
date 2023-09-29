const checkFormValidation = (email, password) => {

    // console.log("fullname", fullName);
    // const isFullNameValid = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/.test(fullName);
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);


    // if(!isFullNameValid) return "Full name is not valid";
    if(!isEmailValid) return "Email address is not valid";
    if(!isPasswordValid) return "Password is not valid";

    return null;
}

export default checkFormValidation;