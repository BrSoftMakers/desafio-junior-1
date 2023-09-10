import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { UserAttributes } from '../models/User';

const verifyToken = (token: string): JwtPayload | undefined => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || '123456');
        return decoded as JwtPayload;
    } catch (err) {
        return undefined;
    }
};

interface AuthenticatedRequest extends Request {
    user?: UserAttributes;
}

const authMiddleware = (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Token não fornecido.' });
    }

    const decodedToken = verifyToken(token);
    if (!decodedToken) {
        return res.status(401).json({ message: 'Token inválido.' });
    }

    // Adicione uma verificação para a função de administrador
    if (decodedToken.isAdmin !== true) {
        return res.status(403).json({ message: 'Acesso não autorizado. Você não é um administrador.' });
    }

    // Modifique esta parte de acordo com a estrutura de seu objeto de usuário
    // @ts-ignore
    req.user = {
        id: decodedToken.id,
        name: decodedToken.name,
        isAdmin: decodedToken.isAdmin,
    };

    next();
};

export default authMiddleware;