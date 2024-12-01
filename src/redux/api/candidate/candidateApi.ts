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

    getAllExperience: builder.query({
      query: () => {
        return {
          url: "experience/",
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
} = candidateApi;
