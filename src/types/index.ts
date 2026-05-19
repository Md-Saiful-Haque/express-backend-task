export const USER_ROLES = {
    admin: "admin",
    agent: "agent"
} as const

export type ROLES = "admin" | "agent" | "user"