import { Connection } from 'mongoose';
import { EaSchema } from 'src/ea/schemas/ea.schema';

export const eaProviders = [
    {
        provide: 'EA_MODEL',
        useFactory: (connection: Connection) => connection.model('pdcs', EaSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];