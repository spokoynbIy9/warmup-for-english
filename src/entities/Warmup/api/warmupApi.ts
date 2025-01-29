import { baseApi } from "@/shared/api/baseApi";
import { Verb } from "../model/types/verb";

const warmupApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getVerbs: build.query<Array<Verb>, void>({
      query: () => ({
        url: `/verbs`,
      }),
    }),
  }),
});

export const { useGetVerbsQuery } = warmupApi;
