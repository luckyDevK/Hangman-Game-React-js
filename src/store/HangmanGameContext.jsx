import { createContext } from "react";

const HangmanGameContext = createContext();

export default function HangmanGameContextProvider({ children }) {
  return <HangmanGameContext.Provider>{children}</HangmanGameContext.Provider>;
}
