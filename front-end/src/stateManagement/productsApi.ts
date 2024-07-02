import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface ShoeMetadata{
    id: number,
    name: string,
    price: number,
    pictures_product:PictureMetadata[]
}
export interface PictureMetadata{
    id:number;
    path:string;
}

export const productsApi = createApi({
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:8000/api"}),
    endpoints: (builder) => ({
        getShoes: builder.query<ShoeMetadata[], void[]>({
          query: () => `/v1/shoes/`,
        }),
        getShoesById: builder.query<ShoeMetadata,{id:number}>({
            query: (id) => `/v1/shoes/${id}`,
        }),
    }),
})

export const {useGetShoesQuery,useGetShoesByIdQuery} = productsApi