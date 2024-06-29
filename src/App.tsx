import { createSignal } from 'solid-js';

export const App = () => {
  const [count, setCount] = createSignal(0);

  return (
    <div class="p-8">
      <h1 class="my-2 text-nowrap">Hello Extensions</h1>
      <div
        class="px-4 py-2 bg-blue-700 hover:bg-blue-900 cursor-pointer rounded-lg text-white text-center select-none"
        onClick={() => setCount(count => count + 1)}
      >
        {count()}
      </div>
    </div>
  );
};
