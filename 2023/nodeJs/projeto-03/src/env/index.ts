import 'dotenv/config' //aqui importa as variaveis de ambiante
import { z } from 'zod' // usado para validar as variaveis de ambiente

const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
  PORT: z.coerce.number().default(3333) // Converte qualquer valor pra numero
})

const _env = envSchema.safeParse(process.env)  // aqui valida pra ser se exstem as informaçoes

if(_env.success === false) {

  console.error('Invalid environment variables', _env.error.format()) //pega todos os erros e formata de forma amigavel

  throw new Error('Invalid environment variables.') //aqui já derruba antes a aplicação
}

export const env = _env.data
