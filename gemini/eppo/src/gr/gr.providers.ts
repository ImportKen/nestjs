import { Connection } from 'mongoose';
import { GrSchema} from 'src/gr/schema/gr.schema';

export const grProviders = [
  {
    provide: 'GR_MODEL',
    useFactory: (connection: Connection) => connection.model('eccs', GrSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];