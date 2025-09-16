const joi = require("joi");

const ValidateUser = (req, res, next) => {
  const Schema = joi.object({
    FullName: joi
      .string()
      .min(3)
      .max(30)
      .required()
      .pattern(/^[a-zA-Z ]+$/)
      .messages({
        "string.pattern.base": "Full Name can only contain letters and spaces",
      }),

    UserName: joi
      .string()
      .min(3)
      .max(30)
      .required()
      .pattern(/^[a-zA-Z0-9_]+$/)
      .messages({
        "string.pattern.base": "Username can only contain letters, numbers, and underscores",
      }),

    Email: joi.string().min(3).max(30).required().email().messages({
      "string.email": "Please enter a valid email address",
    }),

    Password: joi
      .string()
      .pattern(
        new RegExp(
          "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
        )
      )
      .required()
      .messages({
        "string.pattern.base":
          "Password must be at least 8 characters long and include an uppercase letter, lowercase letter, number, and special character",
      }),

    ConfirmPassword: joi
      .any()
      .valid(joi.ref("Password"))
      .required()
      .messages({ "any.only": "Passwords must match" }),

    IsChecked: joi.boolean().valid(true).required().messages({
      "any.only": "You must accept the terms and conditions",
    }),
  });

  const { error } = Schema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};

module.exports = ValidateUser;
