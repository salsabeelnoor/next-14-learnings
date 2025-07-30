 import Link from "next/link";
export default function ProductList() {
    const productId = 100;
    return (
        <div>
            <Link href="/">Home</Link>
            <h1>Products List</h1>
            <ul>
                <li><Link href={`/products/${productId}`}>Product {productId}</Link></li>
                <li><Link href="/products/2" replace>Product 2</Link></li>
                <li><Link href="/products/3">Product 3</Link></li>
            </ul>
        </div>
    );

}