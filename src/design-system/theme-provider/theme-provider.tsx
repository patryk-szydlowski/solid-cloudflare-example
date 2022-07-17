import {
  type Accessor,
  type ParentProps,
  createContext,
  createEffect,
  createSignal,
} from "solid-js";

import { baseTheme, darkTheme, lightTheme } from "~/design-system/core/theme.css";

type Theme = "dark" | "light";

type ThemeContext = {
  theme: Accessor<Theme>;
  toggleTheme: () => void;
};

const { Provider } = createContext<ThemeContext>();

export const ThemeProvider = (props: ParentProps) => {
  const [theme, setTheme] = createSignal<Theme>("light");

  const toggleTheme = () => {
    setTheme((previousTheme) => (previousTheme === "light" ? "dark" : "light"));
  };

  const themeClass = () => (theme() === "light" ? lightTheme : darkTheme);

  createEffect(() => {
    setInterval(() => toggleTheme(), 2_000);
  });

  return (
    <Provider value={{ theme, toggleTheme }}>
      <div class={`${baseTheme} ${themeClass()}`}>{props.children}</div>
    </Provider>
  );
};
