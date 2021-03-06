import Config from "config";
import bcrypt from "bcrypt";
import ErrorException from "../../Application/Shared/ErrorException";
import StatusCode from "../../Presentation/Shared/StatusCode";
import IEncryption from "../../InterfaceAdapters/Shared/IEncryption";

class BcryptEncryptionStrategy implements IEncryption
{
    async compare(chain: string, chainHashed: string): Promise<boolean>
    {
        return await bcrypt.compare(chain, chainHashed);
    }

    async decrypt(chain: string): Promise<string>
    {
        throw new ErrorException(StatusCode.HTTP_NOT_ACCEPTABLE, 'Decrypt forbidden')
    }

    async encrypt(chain: string): Promise<string>
    {
        const saltRounds: number = Config.get('encryption.bcrypt.saltRounds');

        return await bcrypt.hash(chain, saltRounds);
    }

}

export default BcryptEncryptionStrategy;
