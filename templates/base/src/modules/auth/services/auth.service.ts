import { ApiService } from "@/api";
import type { AuthResponse, LoginPayload, RegisterPayload } from "../types";
import { ENDPOINTS } from "./endpoint";

export const AuthService = {
    login: async (credentials: LoginPayload): Promise<AuthResponse> => {
        return ApiService.post<LoginPayload, AuthResponse>(ENDPOINTS.AUTH.LOGIN, credentials);
    },

    register: async (credentials: RegisterPayload): Promise<AuthResponse> => {
        return ApiService.post<RegisterPayload, AuthResponse>(ENDPOINTS.AUTH.REGISTER, credentials);
    },

    logout: async (): Promise<void> => {
        return ApiService.post(ENDPOINTS.AUTH.LOGOUT);
    }
}