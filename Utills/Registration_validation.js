const joi = require("joi");

const ValidateUSer = (req, res, next) => {
  const Schema = joi.object({
    FullName: joi
      .string()
      .min(3)
      .max(30)
      .required()
      .pattern(new RegExp("^[a-zA-Z ]+$"))
      .messages({
        "string.pattern.base": "Full Name can only contain letters and spaces",
      }),
    UserName: joi
      .string()
      .min(3)
      .max(30)
      .required()
      .pattern(new RegExp("^[a-zA-Z0-9_]+$"))
      .messages({
        "string.pattern.base":
          "Username can only contain letters, numbers, and underscores",
      }),
    Email: joi.string().min(3).max(30).required().email().messages({
      "string.email": "Please enter a valid email address",
    }),
    Password: joi
      .string()
      .min(8)
      .max(30)
      .required()
      .pattern(
        new RegExp(
          new RegExp(
            "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
          )
        )
      )
      .messages({
        "string.pattern.base":
          "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character",
      }),
    ConfirmPassword: joi.ref("Password"),
    TermsAndConditions: joi.boolean().valid(true).required().messages({
      "any.only": "You must accept the terms and conditions",
    }),
  });

  const { error, value } = Schema.validate(req.body);

  if (error) {
    console.log(error.details[0].message);
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};

module.exports = ValidateUSer;
