"use server";

export const createMovie = async (formData: FormData) => {
  const title = formData.get("title");
  const description = formData.get("description");
  const imageUrl = formData.get("imageUrl");
  console.log("title:", title);
  console.log("description:", description);
  console.log("imageUrl:", imageUrl);
};
