export default interface THttpResponse<T> {
    Ok: boolean;
    Data: T | T[]
}