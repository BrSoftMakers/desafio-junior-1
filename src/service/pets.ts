import axios from 'axios';

export default class PetsService {
  async createRegister(o: any): Promise<any> {
    try {
      const response = await axios.post('http://localhost:3333/pets', o);
      return response.data;
    } catch (err) {
      throw new Error(err as string);
    }
  }
}
