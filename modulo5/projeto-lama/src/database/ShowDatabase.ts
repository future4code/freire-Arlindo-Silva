import { IShowDb, Show } from "../models/Show";
import { BaseDatabase } from "./BaseDatabase";

export class ShowDatabase extends BaseDatabase {
  public static SHOW_TABLE = "Lama_Shows";
  public static TICKET_TABLE = "Lama_Tickets";

  public insert = async (show: Show): Promise<void> => {
    const newShow: IShowDb = show.toIShowDBModel();

    await BaseDatabase.connection(ShowDatabase.SHOW_TABLE).insert(newShow);
  };
}
