export type MenuItem = {
    id: number,
    name: string,
    price: number
    icon: string,
}

export type OrderItem = MenuItem & {
    quantity: number
}