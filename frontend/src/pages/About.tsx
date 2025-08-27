import React from 'react';
import { Link } from '@inertiajs/react';

export default function About({ description }) {
  return (
    <div>
      <h1>О нас</h1>
      <p>{description}</p>
      <Link href="/">На главную</Link>
    </div>
  );
}