// import { IUserDB, User } from "../models/User";
import { IOrderDB, IOrderItemDB } from "../models/Order";
import { BaseDatabase } from "./BaseDatabase";

export class OrderDatabase extends BaseDatabase {
  public static TABLE_ORDERS = "Amb_Order";
  public static TABLE_ORDER_ITEM = "Amb_Order_Item";

  public createOrder = async (order: IOrderDB): Promise<void> => {
    await BaseDatabase.connection(OrderDatabase.TABLE_ORDERS).insert(order);
  };

  public insertItemOnOrder = async (item: IOrderItemDB): Promise<void> => {
    await BaseDatabase.connection(OrderDatabase.TABLE_ORDER_ITEM).insert(item);
  };

  // public toUserDBModel = (user: User): IUserDB => {
  //   const userDB: IUserDB = {
  //     id: user.getId(),
  //     name: user.getName(),
  //     email: user.getEmail(),
  //     password: user.getPassword(),
  //     role: user.getRole(),
  //   };
  //   return userDB;
  // };
}
