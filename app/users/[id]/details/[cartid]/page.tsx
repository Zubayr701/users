'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

type Cart = {
  id: number;
  userId: number;
  date: string;
  products: {
    productId: number;
    quantity: number;
  }[];
};

export default function CartDetailPage() {
  const { cartId } = useParams();
  const [cart, setCart] = useState<Cart | null>(null);
  const [loading] = useState(true);

  useEffect(() => {
    const get = async()=> {
   const res = await fetch(`https://fakestoreapi.com/carts/${cartId}`)
  if (!res.ok) throw new Error('Failed to fetch data')
  const data = await res.json()
setCart(data)
}
     get()
  }, [cartId]);

  if (loading) return <div>Loading...</div>;
  if (!cart) return <div>error</div>;

  
  return (
    <div>
      <h1>Cart #{cart.id}</h1>
      <p> ID: {cart.userId}</p>
      <p>Sana: {cart.date}</p>
      <p>Mahsulotlar:</p>
      <ul>
       
      </ul>
    </div>
  );
}
