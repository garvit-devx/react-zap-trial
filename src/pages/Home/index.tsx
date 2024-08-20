import React from "react";

import { Heading1, Heading3, PrimaryButton, SecondaryButton } from "../../styled";
import useAppSelector from "../../hooks/useAppSelector";
import useAppDispatch from "../../hooks/useAppDispatch";
import { counterActions } from "../../store/actions";

const Home: React.FC = () => {
  const counterState = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  const handleIncreaseByOne = () => {
    dispatch(counterActions.increaseByOne());
  };

  const handleDecreaseByOne = () => {
    dispatch(counterActions.decreaseByOne());
  };

  const handleIncreaseByNumber = (num: number) => {
    dispatch(counterActions.increaseByNumber({ number: num }));
  };

  return (
    <div>
      <Heading1>Home Page</Heading1>

      <Heading3>Count</Heading3>

      <p data-testid='counter'>{counterState}</p>
      <PrimaryButton onClick={handleIncreaseByOne}>Increase by 1</PrimaryButton>
      <SecondaryButton onClick={handleDecreaseByOne}>Decrease by 1</SecondaryButton>
      <input
        placeholder='Increase by number...'
        type='number'
        onChange={(e) => handleIncreaseByNumber(Number(e.target.value))}
      />
    </div>
  );
};

export default Home;
