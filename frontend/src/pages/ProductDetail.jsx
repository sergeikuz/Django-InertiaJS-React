import React from 'react';
import { Link } from '@inertiajs/react';

export default function ProductDetail({ product }) {
  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>

      <Link href="/products">← К списку товаров</Link>
      <br />
      <Link href="/">На главную</Link>
    </div>
  );
}