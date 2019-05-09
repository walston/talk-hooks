import { validate_api_object } from "./validation";
import { ApiUserObject, UserObject } from "./store/types.d";
import { make_title_case, state_code } from "./util";

const API = "https://randomuser.me/api";
const OPTIONS = "nat=us&inc=name,id,picture,location,email,phone,dob,login";

export default function getAllUsers(): Promise<any> {
  return fetch(API + `?results=50&${OPTIONS}`)
    .then(response => response.json())
    .then(({ results }) => Promise.all(results.map(makeUserObject)));
}

export function getUser(id: string): Promise<any> {
  return fetch(API + `?results=1&seed=${id}&${OPTIONS}`)
    .then(response => response.json())
    .then(({ results }) => makeUserObject(results[0]));
}

async function makeUserObject(obj: unknown): Promise<UserObject> {
  const u: ApiUserObject = await validate_api_object(obj);
  return {
    id: u.login.sha1.slice(0, 9),
    name: make_title_case(`${u.name.first} ${u.name.last}`),
    picture: u.picture.large,
    email: u.email,
    dob: new Date(u.dob.date).toLocaleDateString(),
    address: make_title_case(
      `${u.location.street},\n${u.location.city} ${state_code(
        u.location.state
      )}, ${u.location.postcode}`
    ),
    phone: u.phone
  };
}
