import request from 'supertest';

import app from '../../src/app';

describe('pet', () => {
  describe('store', () => {
    it('should be able to create some new pet', async () => {
      expect.assertions(2);

      const response = await request(app).post('/pet').send({
        name: 'Jãoooo',
        age: 2,
        specie: 'Gato',
        breed: 'Maine Coon',
        owner: 'Jaqueline',
        phone: '11999999999',
        img: 'https://www.chefbob.com.br/wp-content/uploads/2020/10/2020-10-16-problemas-de-pele-em-gatos-802x506.jpg'
      });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id');
    });
    it('should not be able to create a new pet when sending some invalid data', async () => {
      expect.assertions(1);

      const response = await request(app).post('/pet').send({
        name: 'tob',
        age: 'vamos',
        specie: 'Gato',
        breed: 'Maine Coon',
        owner: 'Jaqueline',
        phone: '11999999999',
        img: 'https://www.chefbob.com.br/wp-content/uploads/2020/10/2020-10-16-problemas-de-pele-em-gatos-802x506.jpg'
      });

      expect(response.status).toBe(400);
    });
    it('should not be able to create a new pet when sending request without something', async () => {
      expect.assertions(1);

      const response = await request(app).post('/pet').send({
        name: 'tob',
        age: 1,
        breed: 'Maine Coon',
        owner: 'Jaqueline',
        phone: '11999999999',
        img: 'https://www.chefbob.com.br/wp-content/uploads/2020/10/2020-10-16-problemas-de-pele-em-gatos-802x506.jpg'
      });

      expect(response.status).toBe(400);
    });
  });
  describe('index', () => {
    it('should be able to return all pets when its sending with limit and page', async () => {
      expect.assertions(1);

      await request(app).post('/pet').send({
        name: 'Jãoooo',
        age: 2,
        specie: 'Gato',
        breed: 'Maine Coon',
        owner: 'Jaqueline',
        phone: '11999999999',
        img: 'https://www.chefbob.com.br/wp-content/uploads/2020/10/2020-10-16-problemas-de-pele-em-gatos-802x506.jpg'
      });

      const response = await request(app).get('/pets?limit=10&page=1');

      expect(response.status).toBe(200);
    });
    it('should not be able to return all pets when its sending without limit or page', async () => {
      expect.assertions(1);

      await request(app).post('/pet').send({
        name: 'Jãoooo',
        age: 2,
        specie: 'Gato',
        breed: 'Maine Coon',
        owner: 'Jaqueline',
        phone: '11999999999',
        img: 'https://www.chefbob.com.br/wp-content/uploads/2020/10/2020-10-16-problemas-de-pele-em-gatos-802x506.jpg'
      });

      const response = await request(app).get('/pets?limit=10');

      expect(response.status).toBe(400);
    });
  });
  describe('show', () => {
    it('should not be able to show a pet when sending a string as id parameter', async () => {
      expect.assertions(1);

      await request(app).post('/pet').send({
        name: 'Jãoooo',
        age: 2,
        specie: 'Gato',
        breed: 'Maine Coon',
        owner: 'Jaqueline',
        phone: '11999999999',
        img: 'https://www.chefbob.com.br/wp-content/uploads/2020/10/2020-10-16-problemas-de-pele-em-gatos-802x506.jpg'
      });

      const response = await request(app).get('/pet/vamo');

      expect(response.status).toBe(404);
    });
    it('should be able to show a pet when..', async () => {
      expect.assertions(1);

      await request(app).post('/pet').send({
        name: 'Jãoooo',
        age: 2,
        specie: 'Gato',
        breed: 'Maine Coon',
        owner: 'Jaqueline',
        phone: '11999999999',
        img: 'https://www.chefbob.com.br/wp-content/uploads/2020/10/2020-10-16-problemas-de-pele-em-gatos-802x506.jpg'
      });

      const response = await request(app).get('/pet/1');

      expect(response.status).toBe(200);
    });
  });
  describe('delete', () => {
    it('should be able to delete some pet', async () => {
      expect.assertions(1);

      await request(app).post('/pet').send({
        name: 'Jãoooo',
        age: 2,
        specie: 'Gato',
        breed: 'Maine Coon',
        owner: 'Jaqueline',
        phone: '11999999999',
        img: 'https://www.chefbob.com.br/wp-content/uploads/2020/10/2020-10-16-problemas-de-pele-em-gatos-802x506.jpg'
      });

      const response = await request(app).delete('/pet/1');

      expect(response.status).toBe(202);
    });
    it('should not be able to delete some pet without id', async () => {
      expect.assertions(1);

      await request(app).post('/pet').send({
        name: 'Jãoooo',
        age: 2,
        specie: 'Gato',
        breed: 'Maine Coon',
        owner: 'Jaqueline',
        phone: '11999999999',
        img: 'https://www.chefbob.com.br/wp-content/uploads/2020/10/2020-10-16-problemas-de-pele-em-gatos-802x506.jpg'
      });

      const response = await request(app).delete('/pet');

      expect(response.status).toBe(404);
    });
  });
  describe('update', () => {
    it('should be able to update some pet', async () => {
      expect.assertions(1);

      const pet = await request(app).post('/pet').send({
        name: 'Jãoooo',
        age: 2,
        specie: 'Gato',
        breed: 'Maine Coon',
        owner: 'Jaqueline',
        phone: '11999999999',
        img: 'https://www.chefbob.com.br/wp-content/uploads/2020/10/2020-10-16-problemas-de-pele-em-gatos-802x506.jpg'
      });

      const response = await request(app).put(`/pet/${pet.body.id}`).send({
        name: 'Jãoo',
        age: 23,
        specie: 'Gato',
        breed: 'Maine Coon',
        owner: 'Jaque',
        phone: '119999999',
        img: 'https://www.chefbob.com.br/wp-content/uploads/2020/10/2020-10-16-problemas-de-pele-em-gatos-802x506.jpg'
      });

      expect(response.status).toBe(200);
    });
    it('should not be able to update some pet without id', async () => {
      expect.assertions(1);

      await request(app).post('/pet').send({
        name: 'Jãoooo',
        age: 2,
        specie: 'Gato',
        breed: 'Maine Coon',
        owner: 'Jaqueline',
        phone: '11999999999',
        img_url:
          'https://www.chefbob.com.br/wp-content/uploads/2020/10/2020-10-16-problemas-de-pele-em-gatos-802x506.jpg'
      });

      const response = await request(app).put('/pet').send({
        name: 'Jãoo',
        age: 2,
        specie: 'Gato',
        breed: 'Maine Coon',
        owner: 'Jaqueline',
        phone: '11999999999',
        img_url:
          'https://www.chefbob.com.br/wp-content/uploads/2020/10/2020-10-16-problemas-de-pele-em-gatos-802x506.jpg'
      });

      expect(response.status).toBe(404);
    });
  });
});
