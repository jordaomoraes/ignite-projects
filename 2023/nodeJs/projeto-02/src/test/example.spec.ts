import { test, beforeAll, afterAll } from 'vitest'
import request from 'supertest'
import { app } from '../app'

// aqui espera com que a aplicação esteja pronta pra rodar os testes
beforeAll(async () => {
  await app.ready()
})

// depois de executar os testes, ele fecha a aplicacao
afterAll(async () => {
  await app.close()
})

test('user can create a new transaction', async () => {
  await request(app.server)
    .post('/transactions')
    .send({
      title: 'New Transction test',
      amount: 5000,
      type: 'credit',
    })
    .expect(201)
})
