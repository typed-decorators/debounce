import { debounced } from "../src/debounced";

class C {
  constructor(public count: number) {}

  @debounced(10)
  f() {
    this.count++;
  }
}

test('debounce a prodedure; skipped the initial call', () => {
  const c = new C(0);
  c.f();
  expect(c.count).toBe(0);
});

test('debounce a prodedure; sometimes called', async () => {
  const c = new C(0);
  c.f();
  c.f();

  await new Promise((resolve) => setTimeout(resolve, 100));

  c.f();
  c.f();

  expect(c.count).toBe(1);
});

