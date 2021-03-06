import * as express from 'express';
import PresignedFileRepPayload from '../../../../InterfaceAdapters/Payloads/FileSystem/PresignedFileRepPayload';
import {IsString} from "class-validator";

class PresignedFileRepRequest implements PresignedFileRepPayload
{
    @IsString()
    filename: string;

    constructor(request: express.Request)
    {
        this.filename = request.body.filename;
    }

    getName(): string
    {
        return this.filename;
    }    
}

export default PresignedFileRepRequest;