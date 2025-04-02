export interface AuthResponse {
  fullName?: string;
  username?: string;
  email?:  string;
  accessToken: string;
  refreshToken?: string;
}
