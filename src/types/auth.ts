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

export type SigninResponse = {
  accessToken: string;
  refreshToken: string;
  user: User;
};

export type SignupResponse = {
  accessToken: string;
  refreshToken: string;
  user: User;
};

export type RefreshResponse = {
  accessToken: string;
};
