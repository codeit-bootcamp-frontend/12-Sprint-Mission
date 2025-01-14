export type User = {
  updatedAt: string;
  createdAt: string;
  image: string;
  nickname: string;
  id: number;
};

export type Tokens = {
  accessToken: string;
  refreshToken: string;
};

export type AuthResponse = Tokens & {
  user: User;
};

export type RefreshResponse = Pick<Tokens, "accessToken">;
