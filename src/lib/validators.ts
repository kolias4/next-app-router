import * as Yup from "yup";

const required_field : string = "Required field";

export const LoginSchema = Yup.object().shape({
    username: Yup.string().required(required_field),
    password: Yup.string().required(required_field)

  });
