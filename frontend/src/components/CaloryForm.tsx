import { component$ } from "@builder.io/qwik";
import { Form } from '@builder.io/qwik-city';
import { useGetCalory } from "~/routes/layout";

export default component$(() => {
    const action = useGetCalory();
    return (
        <>
        <div class="flex flex-col items-center">
            <Form action={action} class="mt-44">
                <div class="flex flex-col gap-2">
                    <input type="text" name="height" class="input input-bordered" placeholder="Висота"/>

                    <input type="text" name="weight" class="input input-bordered" placeholder="Вага" />

                    <input type="text" name="age" class="input input-bordered" placeholder="Вік" />

                    <input type="text" name="sex" class="input input-bordered" placeholder="Стать" />

                    <button type="submit" class="btn btn-primary mt-2">Обрахувати</button>
                </div>  
            </Form>
            {action.value?.ok && <div class="alert alert-info mt-3 w-72">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>{action.value.data.message}</span>
            </div>}
        </div>
        </>
    )
});
