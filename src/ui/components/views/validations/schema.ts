import ISchemaData from "./schema.types";

const emailSchema = {
  required: "email is required",
  pattern: {
    value: new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$"),
    message: "email is invalid",
  },
};

const passwordSchema = {
  required: "password is required",
  minLength: { value: 5, message: "min. of 5 characters required" },
};

const fieldSchema = (data: ISchemaData) => {
  return {
    required: `${data.title} is required`,
    minLength: { value: data.minvalue, message: `min. ${data.minvalue} characters required` },
    maxLength: { value: data.maxvalue, message: `max. ${data.minvalue} characters required` },
  }
};

// const isEmpty = (obj) => {
//   for (var key in obj) {
//     if (obj.hasOwnProperty(key)) return false;
//   }
//   return true;
// };

export {
  emailSchema,
  passwordSchema,
  fieldSchema,
  // isEmpty,
};
