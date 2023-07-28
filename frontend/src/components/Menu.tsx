import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <>
        <div class="menu_div w-[610px] m-auto mt-7" > 
            <ul class="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
             <li><Link href="/bmi">Індек маси тіла</Link></li>
             <li><Link href="/calory">Калорії</Link></li>
             <li><Link href="/#">Раціон</Link></li>
            </ul>
        </div>
        </>
    )
});