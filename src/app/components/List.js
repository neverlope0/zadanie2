'use client';

import useSWR from 'swr';
import Card from './Card';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function List() {
  const { data: products, error, isLoading, mutate } = useSWR(
    '/api/products',
    fetcher
  );

  if (error) {
    return (
      <div className="error">
        <div>Ошибка загрузки</div>
        <button 
          onClick={() => mutate()}
          className="retry"
        >
          Попробовать снова
        </button>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="grid">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="skeleton">
            <div className="skeletonImage"></div>
            <div className="skeletonText"></div>
            <div className="skeletonText short"></div>
            <div className="skeletonPrice"></div>
          </div>
        ))}
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="empty">
        <div>Товары не найдены</div>
      </div>
    );
  }

  return (
    <div>
      <div className="listHeader">
        
        <button 
          onClick={() => mutate()}
          className="refresh"
        >
          Обновить
        </button>
      </div>
      
      <div className="grid">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}