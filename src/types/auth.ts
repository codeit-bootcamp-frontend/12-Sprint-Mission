export type SigninFormData = {
  email: string;
  password: string;
};

export type SignupFormData = SigninFormData & {
  nickname: string;
  passwordConfirmation: string;
};

export type User = {
  image: string;
  nickname: string;
  id: number;
};
