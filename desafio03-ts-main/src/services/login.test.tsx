import { login } from "./login";

describe('login', () => {
    const mockEmail = 'nath@dio.bank';
    const mockPassword = 'senha123';

    it('Deve retornar verdadeiro para email e senha válidos', async () => {
        const response = await login(mockEmail, mockPassword);
        expect(response).toBeTruthy();
    });

    it('Deve retornar falso para email inválido', async () => {
        const response = await login('email@invalido.com', mockPassword);
        expect(response).toBeFalsy();
    });

    it('Deve retornar falso para senha inválida', async () => {
        const response = await login(mockEmail, 'senha_invalida');
        expect(response).toBeFalsy();
    });
});
