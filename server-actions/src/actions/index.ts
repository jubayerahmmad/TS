"use server";

import { db } from "@/utils/prisma";
import { redirect } from "next/navigation";

export const createMovie = async (formData: FormData) => {
  const title = formData.get("title") as string | null;
  const description = formData.get("description") as string | null;
  const image = formData.get("imageUrl") as string | null;

  if (!title || !description || !image) {
    throw new Error("Missing required fields: title, description, or imageUrl");
  }
  await db.movie.create({
    data: {
      title,
      description,
      image,
    },
  });
  redirect("/all-movies");
};

export const deleteMovie = async (formData: FormData) => {
  const movieId = formData.get("movieID") as string;

  await db.movie.delete({
    where: {
      id: movieId,
    },
  });
};

export const editMovie = async (formData: FormData) => {
  const movieId = formData.get("movieID") as string;
  const newTitle = formData.get("title") as string;
  const newDescription = formData.get("description") as string;
  const newImage = formData.get("imageUrl") as string;

  await db.movie.update({
    where: {
      id: movieId,
    },
    data: {
      title: newTitle,
      description: newDescription,
      image: newImage,
    },
  });
};
