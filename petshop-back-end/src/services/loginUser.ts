import User from '../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Constantes para mensagens de erro e segredo JWT
const USER_NOT_FOUND_ERROR = 'Usuário não encontrado';
const INVALID_CREDENTIALS_ERROR = 'Credenciais inválidas';
const JWT_SECRET = process.env.JWT_SECRET || '123456';
const JWT_EXPIRATION = '1h';

// Função para autenticar um usuário e gerar um token JWT
async function loginUser(name: string, password: string) {
    try {
        // Busque o usuário pelo nome no banco de dados
        const user = await User.findOne({ where: { name } });

        if (!user) {
            throw new Error(USER_NOT_FOUND_ERROR);
        }

        // Verifique a senha usando bcrypt
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            throw new Error(INVALID_CREDENTIALS_ERROR);
        }

        // Crie e retorne o token JWT
        const token = jwt.sign({ id: user.id, name: user.name, isAdmin: user.isAdmin, }, JWT_SECRET, {
            expiresIn: JWT_EXPIRATION,
        });

        return token;
    } catch (error) {
        // @ts-ignore
        if (error.message === USER_NOT_FOUND_ERROR) {
            // Usuário não encontrado
            throw new Error(USER_NOT_FOUND_ERROR);
        } else { // @ts-ignore
            if (error.message === INVALID_CREDENTIALS_ERROR) {
                        // Credenciais inválidas
                        throw new Error(INVALID_CREDENTIALS_ERROR);
                    } else {
                        // Outro erro
                        throw new Error('Falha na autenticação');
                    }
        }
    }
}

export { loginUser };