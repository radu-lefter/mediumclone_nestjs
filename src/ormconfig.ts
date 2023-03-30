import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import {TagEntity} from './tag/tag.entity'
import {UserEntity} from './user/user.entity'

const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'mediumclone',
  password: 'Havefun1!',
  database: 'mediumclone',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  //entities: [TagEntity, UserEntity],
  synchronize: false,
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
};

export default config;