import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$, routeAction$ } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";

import Header from "~/components/Header";
import Footer from "~/components/Footer";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export const useGetBMI = routeAction$(async (data, requestEvent) => {
  return fetch(`http://127.0.0.1:8000/bmi?height=${data.height}&weight=${data.weight}&age=${data.age}&sex=${data.sex}`).then((resp) => {
    return resp.json().then((d) => {return {"ok": resp.ok, "data": d}})
  })
});
export const useGetCalory = routeAction$(async (data, requestEvent) => {
  return fetch(`http://127.0.0.1:8000/calory?height=${data.height}&weight=${data.weight}&age=${data.age}&sex=${data.sex}&activity=${data.activity}`).then((resp) => {
    return resp.json().then((d) => {return {"ok": resp.ok, "data": d}})
  })
});

export default component$(() => {
  return (
    <>
      <Header />
      <main>
        <Slot />
      </main>
      {/* <Footer /> */}
    </>
  );
});
