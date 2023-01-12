import { hash,compare } from 'bcryptjs' 

const encrypt = async (pass: string ) => {
    const passwordHash = await hash(pass, 8);
    return passwordHash
};

const verify = async (pass: string, passHash: string) => {
    const isPasswordOk = await compare(pass, passHash);
    return isPasswordOk
}

export { encrypt, verify }
