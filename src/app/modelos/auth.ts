export type Auth = {
  username: string,
  password: string
}

export type AuthResponse = {
  id: number,
  username: string,
  email: string,
  firstName: string,
  lastName: string,
  gender: 'male'|'female',
  token: string

}
