export interface State {
  loading: boolean;
  user: null | UserObject;
}

export interface ApiUserObject {
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  name: {
    title: string;
    first: string;
    last: string;
  };
  id: { name: string; value: string };
  picture: {
    thumbnail: string;
    medium: string;
    large: string;
  };
  location: {
    street: string;
    city: string;
    state: string;
    postcode: number;
  };
  email: string;
  phone: string;
  dob: { date: string; age: number };
}

export interface UserObject {
  id: string;
  name: string;
  picture: string;
  email: string;
  dob: string;
  address: string;
  phone: string;
}
