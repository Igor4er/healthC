import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import BMIForm from "~/components/BMIForm"

export default component$(() => {
    return (
        <>
        <BMIForm />
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
