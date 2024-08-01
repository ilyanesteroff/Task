import { configureStore } from '@reduxjs/toolkit';
import { vehicleSlice } from './slices';

const store = configureStore({
  reducer: {
    vehicles: vehicleSlice.reducer
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
