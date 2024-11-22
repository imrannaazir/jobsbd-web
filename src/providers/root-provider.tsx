// app/providers.tsx
"use client";

import { store } from "@/redux/store";
import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";

export function RootProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <Provider store={store}>{children}</Provider>
    </NextUIProvider>
  );
}
