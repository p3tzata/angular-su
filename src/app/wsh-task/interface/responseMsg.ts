export interface ResponseMsg {
    success: boolean,
    message: string,
    errors: [{
        [key: string]: string;
    }]
}