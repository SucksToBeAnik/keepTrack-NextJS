export type ThemeVariation = "coffee" | "retro"

export interface FormState {
    message: string | null,
    type: "ERROR" | "SUCCESS" | null
}