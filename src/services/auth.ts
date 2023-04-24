import { api } from "./api";

interface AuthResponse {
   token?: string;
}

export const authApi = api.injectEndpoints({
   endpoints: (build) => ({
      login: build.mutation<AuthResponse, void>({
         query: () => "count",
         invalidatesTags: ["User"],
      }),
      logout: build.mutation<AuthResponse, number>({
         query(amount) {
            return {
               url: `logout`,
               method: "POST",
               body: { amount },
            };
         },
         invalidatesTags: ["User"],
      }),
   }),
});

export const { useLoginMutation, useLogoutMutation } = authApi;
