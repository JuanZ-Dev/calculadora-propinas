import { useCallback } from "react";
import type { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalsProps = {
  order: OrderItem[]
  tip: number
  placeOrder: () => void
};

export default function OrderTotals({ order, tip, placeOrder }: OrderTotalsProps) {
  const subtotalAmount = useCallback(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  )
  const tipAmount = useCallback(() => subtotalAmount() * tip, [tip, subtotalAmount])
  const totalAmount = useCallback(() => subtotalAmount() + tipAmount(), [subtotalAmount, tipAmount])

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propina</h2>
        <p>
          Subtotal a pagar: {""}
          <span className="font-bold">{formatCurrency(subtotalAmount())}</span>
        </p>

        <p>
          Propina: {""}
          <span className="font-bold">{formatCurrency(tipAmount())}</span>
        </p>

        <p>
          Total a pagar: {""}
          <span className="font-bold">{formatCurrency(totalAmount())}</span>
        </p>
      </div>

      <button 
        className="w-full bg-black p-3 uppercase text-white font-bold disabled:opacity-10 disabled:cursor-not-allowed cursor-pointer"
        disabled={totalAmount() === 0}
        onClick={placeOrder}
      >
        Guardar Orden
      </button>
    </>
  );
}
