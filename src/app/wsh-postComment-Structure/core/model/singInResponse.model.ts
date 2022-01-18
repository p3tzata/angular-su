export interface SignInResponse {
    success: boolean,
    message: string,
    token: string,
    user: {name: string,
           isAdmin: boolean}
}