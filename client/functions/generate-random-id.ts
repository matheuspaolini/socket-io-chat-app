export function generateRandomId() {
  return Math.random().toString(36).substring(2, 16 + 2).toUpperCase();
}
