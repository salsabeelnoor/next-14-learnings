/**  the type of params is a promise that resolves to an object containing the 
 dynamic segments as key value pairs */
 import {Metadata} from "next";
type Props = {
    params: Promise<{productId: string}>;
}

export const generateMetadata = async ({params}: Props) : Promise<Metadata> => {
    const id = (await params).productId;
    const title = await new Promise((resolve) => {
         setTimeout(() => {
            resolve(`iphone ${id}`);
        }, 100);
    });
    return {
        title: `Product ${title}`,
    }
};

export default async function ProductDetails({params}: Props) {
    const productId = (await params).productId;
    return <h1>Product Details Page for {productId}</h1>;
}