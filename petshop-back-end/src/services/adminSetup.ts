import dotenv from 'dotenv';
import User from '../models/User';
import Address from '../models/Address';
import bcrypt from 'bcrypt';

dotenv.config();

async function createAdminUserIfNotExists() {
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminName = process.env.ADMIN_NAME || 'Admin';
    const adminPassword = process.env.ADMIN_PASSWORD || 'adminpassword';
    const adminPhone = process.env.ADMIN_PHONE || '';
    const adminBirthday = process.env.ADMIN_BIRTHDAY || new Date();
    const adminCep = process.env.ADMIN_CEP || 'SEU_CEP';
    const adminStreet = process.env.ADMIN_STREET || 'SUA_RUA';
    const adminCity = process.env.ADMIN_CITY || 'SUA_CIDADE';
    const adminState = process.env.ADMIN_STATE || 'SEU_ESTADO';

    if (!adminEmail) {
        throw new Error('ADMIN_EMAIL não definido no arquivo .env');
    }

    try {
        // Verifique se o usuário administrador já existe
        const existingAdmin = await User.findOne({ where: { email: adminEmail } });
        if (!existingAdmin) {
            // Se não existir, crie o usuário administrador
            const hashedPassword = await bcrypt.hash(adminPassword, 10);

            // Crie o usuário administrador
            const adminUser = await User.create({
                name: adminName,
                email: adminEmail,
                phone: adminPhone,
                password: hashedPassword,
                birthday: new Date(),
                isAdmin: true,
            });

            // Crie um endereço para o usuário administrador
            await Address.create({
                id_user: adminUser.id,
                cep: adminCep,
                street: adminStreet,
                city: adminCity,
                state: adminState,
                // Outros campos de endereço, se necessário
            });

            console.log('Usuário administrador e endereço criados com sucesso.');
        } else {
            console.log('Usuário administrador já existe.');
        }
    } catch (error) {
        console.error('Erro ao criar o usuário administrador:', error);
    }
}

export default createAdminUserIfNotExists;