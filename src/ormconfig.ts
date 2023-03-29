import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'mediumclone',
  password: 'Havefun1!',
  database: 'mediumclone',
};

export default config;