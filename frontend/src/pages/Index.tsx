import React from 'react';
import { Link } from '@inertiajs/react';

export default function Index({ description }) {
  return (
    <div>
      <h1>Главная страница</h1>
      <p>{description}</p>
      <Link href="/about">О нас</Link>
      <br />
      <Link href="/products">Список товаров</Link>
    </div>
  );
}
