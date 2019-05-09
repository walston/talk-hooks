import * as yup from "yup";
import { ApiUserObject } from "./store/types.d";

export function validate_api_object(obj: unknown): Promise<ApiUserObject> {
  return yup
    .object({
      login: yup.object({
        uuid: yup.string(),
        username: yup.string(),
        password: yup.string(),
        salt: yup.string(),
        md5: yup.string(),
        sha1: yup.string(),
        sha256: yup.string()
      }),
      name: yup.object({
        title: yup.string(),
        first: yup.string(),
        last: yup.string()
      }),
      id: yup.object({ name: yup.string(), value: yup.string() }),
      picture: yup.object({
        thumbnail: yup.string(),
        medium: yup.string(),
        large: yup.string()
      }),
      location: yup.object({
        street: yup.string(),
        city: yup.string(),
        state: yup.string(),
        postcode: yup.number()
      }),
      email: yup.string(),
      phone: yup.string(),
      dob: yup.object({ date: yup.string(), age: yup.number() })
    })
    .validate(obj);
}
