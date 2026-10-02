import { Connection } from "mongoose";
import { EmetSchema } from "./schema/emet.schema";

export const emetProviders = [
  {
    provide: 'EMET_MODEL',
    useFactory: (connection: Connection) => connection.model('emets', EmetSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];