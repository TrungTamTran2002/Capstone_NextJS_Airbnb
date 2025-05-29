import { configureStore } from '@reduxjs/toolkit';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    // thêm các reducer khác nếu cần
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;