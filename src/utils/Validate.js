
export const checkValidData=(email,password)=>{
    const isEmailValid=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
    const isPasswordValid=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)
    //const isNameValid=/^([a-zA-z,/.-]+)\s([a-zA-z,/.-]+)$/.test(name);

    if(!isEmailValid) return "Email Id is not valid";
    if(!isPasswordValid) return "Password is not valid"

    return null;

}