import React from 'react';
import { Link } from '@inertiajs/react';

export default function ProductsList({ products }) {
  console.log('Products received:', products);  // Для отладки

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Список товаров</h1>

      {products.length === 0 ? (
        <p>Товаров нет</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {products.map(product => (
            <li key={product.id} style={{ margin: '10px 0', padding: '10px', border: '1px solid #ccc' }}>
              <Link
                href={`/products/${product.id}`}
                style={{ textDecoration: 'none', color: 'blue', fontSize: '18px' }}
              >
                {product.title}
              </Link>
            </li>
          ))}
        </ul>
      )}

      <div style={{ marginTop: '20px' }}>
        <Link
          href="/"
          style={{ textDecoration: 'none', color: 'green', padding: '10px', border: '1px solid green' }}
        >
          ← На главную
        </Link>
      </div>
    </div>
  );
}