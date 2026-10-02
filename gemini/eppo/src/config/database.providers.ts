import mongoose from 'mongoose';

/**
 * ถ้าใข้แบบ local ใช้เป็น 'mongodb://localhost:27017/<db-name>' ตรง mongoose.connect()
 */

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        'mongodb://root:example@localhost:27017/eppo?authSource=admin',
      ),
  },
];