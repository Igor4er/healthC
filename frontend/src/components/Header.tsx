import { component$ } from "@builder.io/qwik";
import Menu from "~/components/Menu";

export default component$(() => {
    return (
        <>
        <div class="header w-72 h-64 m-auto pt-20">
            <div class="header_logo_and_text w-48 h-28 m-auto">
                <div class="header_logo w-12 h-12 m-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none">
                        <mask id="mask0_4_200" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="49" height="48">
                        <path d="M48.5 0H0.5V48H48.5V0Z" fill="white"/>
                        </mask>
                        <g mask="url(#mask0_4_200)">
                        <path d="M26.9491 8.2206L28.8004 6.3972C32.4361 2.81651 38.3549 2.72789 42.0114 6.28794C43.3969 7.63991 44.3177 9.38538 44.6444 11.2792C44.971 13.173 44.687 15.12 43.8323 16.8466C43.4224 17.6715 43.2843 18.6018 43.4372 19.5077C43.5902 20.4136 44.0266 21.2498 44.6855 21.8995C45.8972 20.7034 46.8576 19.2838 47.512 17.722C48.1664 16.1602 48.5021 14.4867 48.4997 12.7971C48.4971 11.1075 48.1569 9.43494 47.4979 7.87496C46.839 6.31495 45.8744 4.8981 44.6593 3.70535C39.5463 -1.30202 31.247 -1.20238 26.1482 3.81907L8.50152 21.1987L7.0508 19.7699C3.35353 16.1285 3.32996 10.1762 7.09246 6.59954C8.48516 5.27969 10.2595 4.41809 12.1706 4.13369C14.0817 3.84929 16.0352 4.1561 17.7617 5.01177C18.5497 5.40948 19.4452 5.55175 20.3202 5.41828C21.1953 5.2848 22.0051 4.88239 22.634 4.26853L22.679 4.22445C22.693 4.21076 22.7041 4.19446 22.7117 4.1765C22.7193 4.15857 22.7232 4.13932 22.7232 4.11988C22.7232 4.10044 22.7193 4.08119 22.7117 4.06326C22.7041 4.04532 22.693 4.02903 22.679 4.01531C20.2502 1.68328 16.9955 0.373378 13.6034 0.362787C10.2115 0.352199 6.94831 1.64175 4.50453 3.95857C-0.759634 8.96361 -0.740823 17.2865 4.43312 22.3823L22.0746 39.7572L20.2006 41.6029C16.565 45.1836 10.6459 45.2722 6.98962 41.7122C5.6041 40.3603 4.68336 38.6147 4.35672 36.721C4.03011 34.8272 4.31397 32.8802 5.16848 31.1534C5.57844 30.3286 5.7166 29.3983 5.5637 28.4926C5.41077 27.5866 4.97439 26.7503 4.31552 26.1006C3.10388 27.2968 2.1434 28.7162 1.48895 30.278C0.834501 31.8399 0.498909 33.5133 0.501341 35.2031C0.503772 36.8926 0.84418 38.5652 1.50313 40.1251C2.16207 41.6852 3.12663 43.102 4.3417 44.2947C9.45446 49.3024 17.7541 49.2029 22.8528 44.1813L40.5224 26.7784L41.9786 28.2126C45.6142 31.7933 45.7042 37.6227 42.0895 41.2238C40.7169 42.5886 38.9445 43.4952 37.0218 43.8171C35.099 44.1388 33.1221 43.8591 31.3688 43.0174C30.5311 42.6134 29.586 42.4772 28.6659 42.6282C27.7458 42.7789 26.8965 43.2092 26.2368 43.8586C27.4514 45.052 28.8926 45.9981 30.4783 46.6426C32.0642 47.2872 33.7632 47.6178 35.4789 47.6154C37.1943 47.6128 38.8926 47.2776 40.4764 46.6286C42.0605 45.9796 43.4991 45.0295 44.7101 43.8329C49.7945 38.7973 49.6933 30.6231 44.5948 25.6017L26.9491 8.2206ZM24.7089 37.1615L11.1366 23.7942L24.3138 10.8163L37.8861 24.1836L24.7089 37.1615Z" fill="#20D586"/>
                        </g>
                    </svg>
                </div>
                    <div class="header_title ">
                    <p class="text-4xl text-primary font-bold text-center">Health app</p> 
                </div>
            </div>
            <div class="header_text w-72 mt-6 ">
                <p class="header_text_title text-xl font-semibold text-center">Ласкаво просимо!</p>
                <p class="header_text_des font-base text-center mr-1">Представляємо онлайн додаток з вирахування вашого індекса тіла </p>
                <p class="header_text_title_2 text-xl font-semibold text-center mt-6">Введіть ваші дані нижче:</p>
            </div>
            <Menu />
        </div>
        
        
        </>
    )
});
