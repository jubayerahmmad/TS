"use server";

import { db } from "@/utils/prisma";

export const createMovie = async (formData: FormData) => {
  const title = formData.get("title") as string | null;
  const description = formData.get("description") as string | null;
  const imageUrl = formData.get("imageUrl") as string | null;

  if (!title || !description || !imageUrl) {
    throw new Error("Missing required fields: title, description, or imageUrl");
  }
  console.log("title:", title);
  console.log("description:", description);
  console.log("imageUrl:", imageUrl);

  const newMovie = await db.movie.create({
    data: {
      title,
      description,
      image: imageUrl,
    },
  });
  console.log(newMovie);
};
