import { type ZodIssue } from "zod";
export interface CreateApiData {
  error: string | ZodIssue[] | null;
  createdApiKey: ApiKey | null;
}

export interface RevokeAPiData {
  error: string | ZodIssue[] | null;
  success: boolean;
}
