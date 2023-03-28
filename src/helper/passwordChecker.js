import passwordValidator from "password-validator";

var schema = new passwordValidator();

schema
  .is()
  .min(6) //min length 6
  .is()
  .max(100) // Maximum length 100
  .has()
  .uppercase() // Must have uppercase letters
  .has()
  .lowercase() // Must have lowercase letters
  .has()
  .digits(1) // Must have at least 2 digits
  .has()
  .symbols(1)
  .has()
  .not()
  .spaces();

export const passCheck = (pass) => {
  return schema.validate(pass);
};
