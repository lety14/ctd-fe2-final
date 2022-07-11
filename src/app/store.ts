import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import quoteReducer from "../features/quote/quoteSlice";
import newsReducer from "../features/news/newsSlices";

export const store = configureStore({
  reducer: {
    quote: quoteReducer,
    news: newsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
