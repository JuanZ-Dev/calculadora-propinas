import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem
}

export default function MenuItem({item}: MenuItemProps) {
    return (
        <button className="border-2 rounded-lg border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between cursor-pointer">
            <p>{item.name}</p>
            <p className="font-black">s/{item.price}</p>
        </button>
    )
}
