/**
 * Iterable Circular Buffer
 * TODO: Implement iteration protocol
 *
 * https://en.wikipedia.org/wiki/Circular_buffer
 */
export class CircularBuffer<T> {
  size: number;
  readonly buffer: Array<T | null>;
  private end = 0;
  private start = 0;

  constructor(size: number) {
    this.size = size;
    this.buffer = Array(size).fill(null);
  }

  put(item: T): void {
    this.buffer[this.end++] = item;
    this.end %= this.size;
  }

  get(): T | null {
    const item = this.buffer[this.start++];
    return item;
  }
}
