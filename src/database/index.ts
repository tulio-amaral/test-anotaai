import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async(): Promise<Connection> => {
  const defaultOption = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOption, {
      database: process.env.NODE_ENV === 'test'
        ? 'desafio_anotaai_test'
        : defaultOption.database
    })
  )
}

createConnection();