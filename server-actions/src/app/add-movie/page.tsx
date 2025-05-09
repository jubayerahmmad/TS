"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import * as actions from "@/actions";
import { useFormStatus } from "react-dom";

const AddMovie = () => {
  const formStatus = useFormStatus();
  return (
    <div className="w-6/12 mx-auto p-10">
      <h1 className="text-4xl font-bold mb-4">Add a New Movie</h1>
      <form action={actions.createMovie} className="flex flex-col gap-4">
        <Label htmlFor="title">Title</Label>
        <Input type="text" name="title" required />

        <Label htmlFor="description">Description</Label>
        <textarea
          name="description"
          className="w-full p-2 border rounded"
          required
        />

        <Label htmlFor="imageUrl">Image URL</Label>
        <Input type="text" name="imageUrl" required />

        <Button
          className="cursor-pointer"
          type="submit"
          disabled={formStatus.pending}
        >
          {formStatus.pending ? "Adding..." : "Add Movie"}
        </Button>
      </form>
    </div>
  );
};

export default AddMovie;
