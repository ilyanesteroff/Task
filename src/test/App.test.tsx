import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { render, fireEvent } from '@testing-library/react';
import { counterSlice, RootState } from '../redux';
import Counter from '../App';

const renderWithStore = ({component, initialState}: {component: React.ReactElement, initialState: RootState}) => {
  const store = configureStore({ reducer: { counter: counterSlice.reducer }, preloadedState: initialState })

  return { ...render(<Provider {...{store}}>{component}</Provider>), store };
};

describe('Counter Component', () => {
  test('renders counter value', () => {
    const { getByText } = renderWithStore({
      component: <Counter />,
      initialState: { counter: { value: 0, embeded: { count: 0, isOdd: false } } }
    });
    expect(getByText('0')).toBeInTheDocument();
    expect(getByText('Count: 0')).toBeInTheDocument();
    expect(getByText('Is Odd: No')).toBeInTheDocument();
  });

  test('increments counter value', () => {
    const { getByText, store } = renderWithStore({
      component: <Counter />,
      initialState: { counter: { value: 0, embeded: { count: 0, isOdd: false } } }
    });

    fireEvent.click(getByText('+'));
    expect(store.getState().counter.value).toBe(1);
    expect(getByText('1')).toBeInTheDocument();
  });

  test('decrements counter value', () => {
    const { getByText, store } = renderWithStore({
      component: <Counter />,
      initialState: { counter: { value: 1, embeded: { count: 0, isOdd: false } } }
    });

    fireEvent.click(getByText('-'));
    expect(store.getState().counter.value).toBe(0);
    expect(getByText('0')).toBeInTheDocument();
  });

  test('increments counter value by 5', () => {
    const { getByText, store } = renderWithStore({
      component: <Counter />,
      initialState: { counter: { value: 0, embeded: { count: 0, isOdd: false } } }
    });

    fireEvent.click(getByText('+5'));
    expect(store.getState().counter.value).toBe(5);
    expect(getByText('5')).toBeInTheDocument();
  });

  test('increments embedded counter value', () => {
    const { getByText, store } = renderWithStore({
      component: <Counter />,
      initialState: { counter: { value: 0, embeded: { count: 0, isOdd: false } } }
    });

    fireEvent.click(getByText('By 1'));
    expect(store.getState().counter.embeded.count).toBe(1);
    expect(getByText('Count: 1')).toBeInTheDocument();
    expect(getByText('Is Odd: Yes')).toBeInTheDocument();
  });

  test('increments embedded counter value by 5', () => {
    const { getByText, store } = renderWithStore({
      component: <Counter />,
      initialState: { counter: { value: 0, embeded: { count: 0, isOdd: false } } }
    });

    fireEvent.click(getByText('By 5'));
    expect(store.getState().counter.embeded.count).toBe(5);
    expect(getByText('Count: 5')).toBeInTheDocument();
    expect(getByText('Is Odd: Yes')).toBeInTheDocument();
  });
})