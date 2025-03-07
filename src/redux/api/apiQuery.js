import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "apiQuery",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  tagTypes: [""],
  endpoints: (builder) => ({
    getOrder: builder.query({
      query: () => ({
        url: "/order",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetOrderQuery ,middleware } = api;
export default api.reducer;
