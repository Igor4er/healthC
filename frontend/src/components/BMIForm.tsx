import { component$ } from "@builder.io/qwik";
import { Form } from '@builder.io/qwik-city';
import { useGetBMI } from "~/routes/layout";

export default component$(() => {
    const action = useGetBMI();
    return (
        <>
        <div class="flex flex-col items-center">
            <Form action={action} class="mt-44">
                <div class="flex flex-col gap-2">
                    <input type="text" name="height" class="input input-bordered" placeholder="Висота" autoComplete="off"/>

                    <input type="text" name="weight" class="input input-bordered" placeholder="Вага" autoComplete="off" />

                    <input type="text" name="age" class="input input-bordered" placeholder="Вік" autoComplete="off" />

                    {/* <input type="text" name="sex" class="input input-bordered" placeholder="Стать" /> */}
                    <div class="flex justify-between">
                        <span class="label">Стать: </span>
                        <div class="flex">
                            <div class="form-control">
                            <label class="label cursor-pointer">
                                <span class="label-text">Ж</span> 
                                <input type="radio" name="sex" class="radio checked:bg-red-500 ml-2" value="woman" />
                            </label>
                            </div>
                            <div class="form-control ml-3">
                                <label class="label cursor-pointer">
                                    <span class="label-text">Ч</span> 
                                    <input type="radio" name="sex" class="radio checked:bg-blue-500 ml-2" value="man" checked />
                                </label>
                            </div>
                        </div>
                    </div>
                    

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
