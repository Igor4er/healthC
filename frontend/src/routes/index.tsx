import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";


export default component$(() => {
  return (
    <>
    <div class="p-10">
      <Link href="/bmi">Індекс маси тіла</Link>
    </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "healthC",
  meta: [
    {
      name: "Головна сторінка healthC",
      content: "Головна сторінка healthC",
    },
  ],
};
