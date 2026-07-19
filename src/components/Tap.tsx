import type { ButtonHTMLAttributes } from 'react';

// ponytail: one primitive instead of hand-rolling <button> reset styles at
// every call site — every clickable "div" in this app becomes a real,
// keyboard-focusable, screen-reader-visible button through this.
export function Tap({ style, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button type="button" {...props} style={{ all: 'unset', cursor: 'pointer', ...style }} />;
}
