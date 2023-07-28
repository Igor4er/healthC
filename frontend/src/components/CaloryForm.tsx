import { component$ } from "@builder.io/qwik";
import { Form } from '@builder.io/qwik-city';
import { useGetCalory } from "~/routes/layout";

export default component$(() => {
    const action = useGetCalory();
    return (
        <>
        <Form action={action}>
            <label for="height">height</label>
            <input type="text" name="height" class="bg-base-300"/>

            <label for="weight">weight</label>
            <input type="text" name="weight" class="bg-base-300" />

            <label for="age">age</label>
            <input type="text" name="age" class="bg-base-300" />

            <label for="sex">sex</label>
            <input type="text" name="sex" class="bg-base-300" />

            <label for="activity">activity</label>
            <input type="text" name="activity" class="bg-base-300" />

            <button type="submit">Add user</button>
            {action.value?.ok && <p class="text-2xl text-black">({action.value.data.message}))</p>}
        </Form>
        </>
    )
});
