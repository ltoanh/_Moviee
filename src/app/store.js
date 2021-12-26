import { configureStore } from '@reduxjs/toolkit';
import modalSlide from 'slice/modalSlide';

const store = configureStore({
  reducer: {
    modal: modalSlide,
  }
});

export default store;