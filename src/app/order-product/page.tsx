"use client";

import { useRouter } from "next/navigation";

export default function OrderProduct() {

    const router = useRouter();

    const handleClick = () => {
        console.log("Order placed!");
        router.push("/");
    }

    return (
        <div>
            <h1>Order Product</h1>
            <p>This page is under construction.</p>

            <button onClick={handleClick}>Place Order</button>
        </div>
    );
}   