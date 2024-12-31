export type User = {
  updatedAt: string;
  createdAt: string;
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
