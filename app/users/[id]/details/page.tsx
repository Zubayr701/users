'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

type Cart = {
  id: number;
  userId: number;
  date: string;
  products: {
    productId: number;
    quantity: number;
  }[];
};

export default function DetailsPage() {
  const [carts, setCarts] = useState<Cart[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/carts')
      .then(res => res.json())
      .then(data => setCarts(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Carts</h1>
      {carts.map(cart => (
        <div key={cart.id}>
          <Link href={`details/${cart.id}`}>
            <p>Cart ID: {cart.id},  ID: {cart.userId}, Products: {cart.products.length}</p>
          </Link>
          <hr />
        </div>
      ))}
    </div>
  );
}
