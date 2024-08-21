import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { db } from '../firebase/firebase';

export const wordsApi = createApi({
    baseQuery: fakeBaseQuery(),
    tagTypes: ['Words'],
    endpoints: (builder) => ({
        getWords: builder.query({
            queryFn: async () => {
                try {
                    const wordsSnapshot = await db.collection('words').get();
                    const words = wordsSnapshot.docs.map(doc => doc.data());
                    return { data: words };
                } catch (error) {
                    return { error };
                }
            },
            providesTags: ['Words'],
        }),
        addWord: builder.mutation({
            queryFn: async (newWord) => {
                try {
                    await db.collection('words').add(newWord);
                    return { data: null };
                } catch (error) {
                    return { error };
                }
            },
            invalidatesTags: ['Words'],
        }),
    }),
});

export const { useGetWordsQuery, useAddWordMutation } = wordsApi;