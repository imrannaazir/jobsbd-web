import { baseApi } from "../api";

const candidateApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateCandidateInfo: builder.mutation({
      query: (data) => {
        return {
          url: "/candidates/update",
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["candidate"],
    }),
    getCandidateInfo: builder.query({
      query: () => {
        return {
          url: "/candidates/me",
        };
      },
      providesTags: ["candidate"],
    }),

    addEducation: builder.mutation({
      query: (data) => {
        return {
          url: "/education/create-education",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["education"],
    }),
    deleteEducation: builder.mutation({
      query: (id) => {
        return {
          url: `/education/delete-education/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["education"],
    }),
    updateEducation: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `/education/update-education/${id}`,
        method: "PUT",
        body: updatedData,
      }),
      invalidatesTags: ["education"],
    }),

    getAllEducation: builder.query({
      query: () => {
        return {
          url: "/education/all",
        };
      },
      providesTags: ["education"],
    }),

    addSkill: builder.mutation({
      query: (data) => {
        return {
          url: "skills/add",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["skill"],
    }),

    getAllSkill: builder.query({
      query: () => {
        return {
          url: "/skills/all",
        };
      },
      providesTags: ["skill"],
    }),
    deleteSkill: builder.mutation({
      query: (id) => {
        return {
          url: `/skills/delete/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["skill"],
    }),
    updateSkill: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `/skills/update/${id}`,
        method: "PATCH",
        body: updatedData,
      }),
      invalidatesTags: ["skill"],
    }),

    addExperience: builder.mutation({
      query: (data) => {
        return {
          url: "experience/create-experience",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["experience"],
    }),
    deleteExperience: builder.mutation({
      query: (id) => {
        return {
          url: `experiences/delete-experience/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["experience"],
    }),

    updateExperience: builder.mutation({
      query: ({ id, data }) => ({
        url: `/experiences/update-experience/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["experience"],
    }),

    getAllExperience: builder.query({
      query: () => {
        return {
          url: "experiences/all",
        };
      },
      providesTags: ["experience"],
    }),

    addProject: builder.mutation({
      query: (data) => {
        return {
          url: "project/create-project",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["project"],
    }),

    getAllProjects: builder.query({
      query: () => {
        return {
          url: "project/",
        };
      },
      providesTags: ["project"],
    }),
    deleteProject: builder.mutation({
      query: (id) => {
        return {
          url: `/project/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["project"],
    }),
    updateProject: builder.mutation({
      query: ({ id, data }) => ({
        url: `/project/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["project"],
    }),

    addCertificate: builder.mutation({
      query: (data) => {
        return {
          url: "/trainings",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["certificate"],
    }),

    getAllCertificates: builder.query({
      query: () => {
        return {
          url: "/trainings/all",
        };
      },
      providesTags: ["certificate"],
    }),
    deleteCertificate: builder.mutation({
      query: (id) => {
        return {
          url: `/trainings/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["certificate"],
    }),
    updateCertificate: builder.mutation({
      query: ({ id, data }) => ({
        url: `/trainings/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["certificate"],
    }),
    getDepartments: builder.query({
      query: () => {
        return {
          url: "department/",
        };
      },
      providesTags: ["department"],
    }),
    getIndustries: builder.query({
      query: () => {
        return {
          url: "/industry",
        };
      },
      providesTags: ["industry"],
    }),

    addLanguage: builder.mutation({
      query: (data) => {
        return {
          url: "/languages/create-language",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["language"],
    }),
    getLanguages: builder.query({
      query: () => {
        return {
          url: "/languages/all",
        };
      },
      providesTags: ["language"],
    }),
    deleteLanguage: builder.mutation({
      query: (id) => {
        return {
          url: `/languages/delete-language/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["language"],
    }),
    updateLanguage: builder.mutation({
      query: ({ id, data }) => ({
        url: `/languages/update-language/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["language"],
    }),
  }),
});

export const {
  useUpdateCandidateInfoMutation,
  useGetCandidateInfoQuery,
  useAddEducationMutation,
  useGetAllEducationQuery,
  useAddSkillMutation,
  useGetAllSkillQuery,
  useAddExperienceMutation,
  useGetAllExperienceQuery,
  useAddProjectMutation,
  useGetAllProjectsQuery,
  useAddCertificateMutation,
  useGetAllCertificatesQuery,
  useGetDepartmentsQuery,
  useGetIndustriesQuery,
  useDeleteEducationMutation,
  useUpdateEducationMutation,
  useDeleteCertificateMutation,
  useUpdateCertificateMutation,
  useDeleteProjectMutation,
  useUpdateProjectMutation,
  useDeleteSkillMutation,
  useUpdateSkillMutation,
  useAddLanguageMutation,
  useGetLanguagesQuery,
  useDeleteLanguageMutation,
  useUpdateLanguageMutation,
  useDeleteExperienceMutation,
  useUpdateExperienceMutation,
} = candidateApi;
