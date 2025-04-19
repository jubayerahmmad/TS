"use client";
// Import necessary dependencies and components
import { z } from "zod"; // Zod is used for schema-based validation
import { zodResolver } from "@hookform/resolvers/zod"; // Connects Zod with React Hook Form
import { useForm } from "react-hook-form";

// UI components from shadcn/ui
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formSchema } from "@/schemas/formSchema";

const Login = () => {
  // Initialize the form using useForm hook
  // zodResolver integrates Zod validation with react-hook-form
  const form = useForm({
    resolver: zodResolver(formSchema), // Validates input using the Zod schema,It lets React Hook Form use Zod to validate form inputs.If the validation fails, <FormMessage /> (which is part of shadcn/ui) will display the error message.
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // This function will be called on form submission
  // If validation passes, form values are available here
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values); // You can send this data to an API
  };

  return (
    <div className="max-w-2xl mx-auto mt-64">
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Login Form
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Provide the form context to all form components */}
          <Form {...form}>
            {/* onSubmit handles validation and triggers the callback */}
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              action=""
              className="space-y-2"
            >
              {/* --- NAME FIELD --- */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
                    </FormControl>
                    <FormMessage /> {/* Shows error message if any */}
                  </FormItem>
                )}
              />

              {/* --- EMAIL FIELD --- */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Email" {...field} />
                    </FormControl>
                    <FormMessage /> {/* Shows error message if any */}
                  </FormItem>
                )}
              />

              {/* --- PASSWORD FIELD --- */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      {/* Ensure the password is hidden while typing */}
                      <Input
                        type="password"
                        placeholder="Your Password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage /> {/* Shows error message if any */}
                  </FormItem>
                )}
              />

              {/* --- SUBMIT BUTTON --- */}
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
