import { ZodSchema } from "zod";

export const renderError = (
  error: unknown
): { message: string; type: "ERROR" | "SUCCESS" } => {
  return {
    message: error instanceof Error ? error.message : "An error occurred",
    type: "ERROR",
  };
};

export function validateWithZodSchema<T>(
  schema: ZodSchema<T>,
  data: unknown
): T {
  const result = schema.safeParse(data);

  if (!result.success) {
    const errors = result.error.errors.map((err) => err.message);
    throw new Error(errors.join(","));
  }

  return result.data;
}


