import { Connection } from "mongoose";
import { EmgdpSchema } from "./schema/emgdp.schema";

export const emgdpProviders = [
  {
    provide: 'EMGDP_MODEL',
    useFactory: (connection: Connection) => connection.model('emgdps', EmgdpSchema),
    inject: ['DATABASE_CONNECTION'],
  }
];