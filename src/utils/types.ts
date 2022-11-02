export type CreateUserParams = {
  email: string;
  password: string;
};

export type UpdateUserParams = {
  email: string;
  password: string;
};

export type CreateUserProfileParams = {
  firstName: string;
  lastName: string;
  age: number;
  dateOfBirthday: string;
};

export type CreateUserPostParams = {
  title: string;
  description: string;
};
