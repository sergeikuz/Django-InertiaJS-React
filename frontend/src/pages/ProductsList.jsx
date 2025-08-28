import React from 'react';
import { Link } from '@inertiajs/react';

export default function ProductsList({ products }) {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="h2 text-primary">Список товаров</h1>
            <Link href="/" className="btn btn-outline-primary">
              <i className="bi bi-house me-2"></i>На главную
            </Link>
          </div>

          {products.length === 0 ? (
            <div className="alert alert-info text-center">
              <i className="bi bi-inbox display-4 d-block mb-3"></i>
              <h5>Товаров нет</h5>
              <p className="mb-0">Здесь появятся товары, когда они будут добавлены</p>
            </div>
          ) : (
            <div className="row g-3">
              {products.map(product => (
                <div key={product.id} className="col-md-6">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <Link
                        href={`/products/${product.id}`}
                        className="btn btn-primary stretched-link"
                      >
                        <i className="bi bi-eye me-2"></i>Посмотреть
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}