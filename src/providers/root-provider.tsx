// app/providers.tsx
"use client";

import { store } from "@/redux/store";

import { Provider } from "react-redux";

export function RootProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
