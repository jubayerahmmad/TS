// ✅ Importing Zod library for schema validation
import { z } from "zod";

// ✅ Creating a schema for the User object using z.object()
const userSchema = z.object({
  // Validates that `name` must be a string
  name: z.string(),

  // Optional field: `age` can be a number or undefined
  age: z.number().optional(),

  // Validates that `email` is a proper email string
  email: z.string().email(),

  // Default value: If `country` is not provided, it will default to "Unknown"
  country: z.string().default("Unknown"),

  // ✅ Nested object validation for address
  address: z.object({
    city: z.string(), // Must be a string
    zipCode: z.string(), // Must be a string
  }),

  // ✅ Array validation: `hobbies` must be an array of strings
  hobbies: z.array(z.string()),
});

// ✅ Inferring TypeScript type from Zod schema
type User = z.infer<typeof userSchema>;

// ✅ Sample valid data conforming to the userSchema
const userData: User = {
  name: "Jubayer",
  age: 21,
  email: "zubayersami510@gmail.com",
  country: "BD",
  address: {
    city: "Dhaka",
    zipCode: "2699",
  },
  hobbies: ["Coding", "Gaming"],
};

// ✅ Validate data using `.safeParse()`
// Returns an object with success and data/error depending on validity
const result = userSchema.safeParse(userData);
console.log(result);

// ✅ Handling validation errors gracefully
if (!result.success) {
  // `.format()` gives a structured error format
  console.log(result.error.format());
}

// ✅ Defining an enum for user roles using Zod's `z.enum`
const rolesEnum = z.enum(["User", "Admin", "Moderator"]);

// ✅ This will pass because "Admin" is one of the valid roles
const userRole = "Admin";
// ❌ This will throw an error if uncommented, because "Guest" is not a valid enum value
// const userRole = "Guest";

// ✅ Validating the role
console.log(rolesEnum.parse(userRole));
