import { AppError } from './app-error';

export class NullValueError extends AppError{
    constructor(error: any){
        super(error)
    }
}