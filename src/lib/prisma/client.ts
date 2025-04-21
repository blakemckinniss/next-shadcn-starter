import { PrismaClient } from "@/generated/prisma"; // Import from the generated location

// Declare a global variable to hold the Prisma Client instance
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Instantiate PrismaClient, reusing the instance in development if it exists
export const prisma =
  global.prisma ||
  new PrismaClient({
    // Optional: Log Prisma queries during development
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

// Assign the instance to the global variable in development
if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}
