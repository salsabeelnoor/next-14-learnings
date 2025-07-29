/**  the type of params is a promise that resolves to an object containing the 
 dynamic segments as key value pairs */

export default async function ProductDetails({params}: {
    params: Promise<{productId: string}>
}) {
    const productId = (await params).productId;
    return <h1>Product Details Page for {productId}</h1>;
}