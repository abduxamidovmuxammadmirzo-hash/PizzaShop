'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '../store/useCartStore';

const Cart = () => {
  const { items, totalCount, totalPrice, removeFromCart, clearCart } = useCartStore();

  return (
    <div className="container py-8">
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Корзина</h1>
          <p className="text-gray-500 mt-2">Здесь отображаются выбранные пиццы и сумма заказа.</p>
        </div>
        <Link href="/" className="text-sm font-semibold text-[#fe5f1e] hover:text-[#d24c11]">
          Вернуться на главную
        </Link>
      </div>

      {items.length === 0 ? (
        <div className="rounded-[30px] border border-dashed border-gray-300 p-10 text-center text-gray-500">
          В корзине пока нет пицц.
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-4">
            {items.map((item) => (
              <div key={`${item.id}-${item.size}-${item.type}`} className="flex flex-col gap-4 rounded-[30px] bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={96}
                    height={96}
                    className="h-24 w-24 rounded-[24px] object-cover"
                  />
                  <div>
                    <h2 className="text-lg font-bold">{item.title}</h2>
                    <p className="text-sm text-gray-500">{item.type}, {item.size} см</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <span className="text-sm text-gray-600">Кол-во: {item.quantity}</span>
                  <span className="text-lg font-bold">{item.price * item.quantity} ₽</span>
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id, item.size, item.type)}
                    className="text-sm font-semibold text-[#fe5f1e] hover:text-[#d24c11]"
                  >
                    Уменьшить
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-[30px] bg-white p-6 shadow-sm">
            <div className="mb-5">
              <div className="text-sm text-gray-500">Всего товаров</div>
              <div className="text-3xl font-bold">{totalCount}</div>
            </div>
            <div className="mb-8">
              <div className="text-sm text-gray-500">Сумма заказа</div>
              <div className="text-4xl font-bold">{totalPrice} ₽</div>
            </div>
            <button
              type="button"
              onClick={() => {
                window.alert('Корзина отправлена. Спасибо за заказ!');
                clearCart();
              }}
              className="w-full rounded-3xl bg-[#fe5f1e] py-4 text-sm font-bold text-white hover:bg-[#e24e13] transition"
            >
              Отправить корзину
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;