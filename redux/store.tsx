import { configureStore } from '@reduxjs/toolkit'
  import { persistStore, persistReducer, 
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
  import LocalStorage from "redux-persist/lib/storage";
  import UserSlice from './userSlice'


  const createNoopStorage = () => {
    return {
        getItem(_key: string): Promise<string | null> {
            return Promise.resolve(null);
        },
        setItem(_key: string, value: string): Promise<string> {
            return Promise.resolve(value);
        },
        removeItem(_key: string): Promise<void> {
            return Promise.resolve();
        },
    };
  };

const storage = typeof window !== 'undefined' ? LocalStorage : createNoopStorage();

  const persistConfig = {
    key: "test",
    version: 1,
    storage,
  };
  const persistedReducer = persistReducer(persistConfig, UserSlice);

  export const store = configureStore({
   reducer: {
      user: persistedReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

  })

  export const persistor = persistStore(store);

  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;