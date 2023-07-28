import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import CaloryForm from "~/components/CaloryForm";

export default component$(() => {
    return (
        <>
        <CaloryForm />
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
