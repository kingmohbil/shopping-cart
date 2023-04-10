import React from 'react';
import Container from './styles/NumberInput-styled';
interface PropsState {
  handleChangeState: (input: HTMLInputElement | null | undefined) => void;
  value: number;
  min: number;
  max: number;
  Id: string;
}

const Input: React.FC<PropsState> = ({
  handleChangeState,
  value,
  min,
  max,
  Id,
}) => {
  return (
    <Container>
      <button
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          const input: HTMLInputElement | null | undefined =
            e.currentTarget.parentNode?.querySelector('input[type="number"]');
          input?.stepDown();
          handleChangeState(input);
        }}
      >
        -
      </button>
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        id={Id}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          handleChangeState(e.target);
        }}
      />
      <button
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          const input: HTMLInputElement | null | undefined =
            e.currentTarget.parentNode?.querySelector('input[type="number"]');
          input?.stepUp();
          handleChangeState(input);
        }}
      >
        +
      </button>
    </Container>
  );
};

export default Input;
