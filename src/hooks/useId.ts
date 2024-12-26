import { v4 } from "uuid";

export function useId() {
  const id = v4();
  return { generateId: () => v4() };
}
