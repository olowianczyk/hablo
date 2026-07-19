import type { KeyboardEvent } from 'react';

// ponytail: for containers that hold nested interactive children (so they
// can't be a real <button> — invalid HTML) but still need keyboard activation.
export function onActivateKey(fn: () => void) {
  return (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      fn();
    }
  };
}
