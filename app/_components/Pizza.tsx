'use client';

import { useProductStore } from '../store/useProductStore';
import { PizzaCard } from './PizzaCard';

const Pizza = () => {
    const { items, isLoading } = useProductStore();

    if (isLoading) return <div className="p-10">Загрузка пицц...</div>;

    return (
        <div className="grid grid-cols-4 gap-8 p-10">
            {items.map((obj) => (
                <PizzaCard
                    key={obj.id}
                    id={obj.id}
                    title={obj.title}
                    price={obj.price}
                    imageUrl={obj.imageUrl}
                    sizes={obj.sizes}
                    types={obj.types}
                />
            ))}
        </div>
    );
};

export default Pizza;