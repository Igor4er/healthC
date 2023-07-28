import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";


export default component$(() => {
  return (
    <>
      <div class="text-3xl">INDEX</div>
    </>
  );
});

export const head: DocumentHead = {
  title: "healthC",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
