import type { Dispatch } from "react";
import type { MenuItem } from "../types";
import type { OrderActions } from "../reducers/order-reducer";

type MenuItemProps = {
  item: MenuItem;
  dispatch: Dispatch<OrderActions>;
};

export default function MenuItem({ item, dispatch }: MenuItemProps) {
  return (
    <button
      className="border-2 rounded-lg border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between cursor-pointer"
      onClick={() => dispatch({ type: "add-item", payload: { item } })}
    >
      <p>
        {item.icon} {item.name}
      </p>
      <p className="font-black">S/ {item.price}</p>
    </button>
  );
}
