import React, { useState } from 'react';
import { addItem } from '../store/cartSlice';
import { useDispatch } from 'react-redux';
import ItemContainer from './styles/ItemPreview-styled';
import ProductType from '../products/ProductInterface';
import NumberInput from '../components/NumberInput';

interface PropsType {
  item: ProductType;
}

const ItemPreview: React.FC<PropsType> = ({ item }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);

  return (
    <ItemContainer>
      <img
        src={`${window.location.origin}/images/${item.descriptionImage}`}
        alt={item.name}
      />
      <div className="product-info">
        <p>${item.price}</p>
        <div className="cart-btn">
          <button
            onClick={() => {
              dispatch(addItem({ ...item, count }));
            }}
          >
            Add to cart
          </button>
          <NumberInput
            min={1}
            max={20}
            value={count}
            handleChangeState={onCountInputChange}
            Id="number-input"
          />
        </div>
      </div>
    </ItemContainer>
  );

  function onCountInputChange(input: HTMLInputElement | null | undefined) {
    if (!input || !input.value) setCount(1);
    else {
      const value: number = parseInt(input.value);
      if (value < 20) setCount(value);
      else if (value > 20) setCount(20);
    }
  }
};

export default ItemPreview;
