import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <>
        <div class="text-4xl">BMI</div>
        </>
    )
})

export const head: DocumentHead = {
    title: "healthC -> ІМТ",
    meta: [
      {
        name: "Індекс маси тіла",
        content: "Калькулятор індексу маси тіла",
      },
    ],
}
