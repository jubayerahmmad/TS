import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
/**
 * Create a single movie record in the database.
 * Customize the `data` object with actual movie fields like title, genre, etc.
 */
async function createMovie() {
  const newMovie = await prisma.movie.create({
    data: {
      title: "Inception",
      description:
        "A mind-bending thriller about dream invasion and manipulation.",
      genre: "Sci-Fi",
      releaseDate: new Date("10-4-2008"),
      rating: 8.9,
    },
  });
  console.log(newMovie);
}

/**
 * Create multiple movie records at once.
 * Useful for seeding or batch-adding data.
 */
async function createMultipleMovie() {
  const multipleMovies = await prisma.movie.createMany({
    data: [
      {
        title: "The Dark Knight",
        description:
          "A gritty and intense superhero film featuring Batman and the Joker.",
        genre: "Action",
        releaseDate: new Date("7-18-2008"),
        rating: 9.0,
      },
      {
        title: "Interstellar",
        description:
          "A visually stunning exploration of space, time, and love.",
        genre: "Sci-Fi",
        releaseDate: new Date("11-7-2014"),
        rating: 8.6,
      },
      {
        title: "The Prestige",
        description: "A tale of rivalry and obsession between two magicians.",
        genre: "Drama",
        releaseDate: new Date("10-20-2006"),
        rating: 8.5,
      },
      {
        title: "Dunkirk",
        description: "A gripping World War II story of survival and heroism.",
        genre: "War",
        releaseDate: new Date("7-21-2017"),
        rating: 7.9,
      },
    ],
  });
  console.log(multipleMovies);
}

/**
 * Retrieve all movies from the database.
 * Uses `findMany` to fetch an array of movie records.
 */
async function getMovies() {
  const getAllMovie = await prisma.movie.findMany();
  console.log("All Movies:", getAllMovie);
}

/**
 * Retrieve a specific movie by its unique ID.
 * `findUnique` is best when querying by a unique field like `id`.
 * @param movieId - The ID of the movie to retrieve.
 */
async function getSpecificMovie(movieId: number) {
  const getAMovie = await prisma.movie.findUnique({
    // findUnique is more appropriate than findFirst when querying by a unique field like id.
    // findFirst is usually used with filters that may return multiple results.
    where: {
      id: movieId,
    },
  });
  console.log(getAMovie);
}

/**
 * Update a specific movie's data by ID.
 * You must pass a unique identifier (like `id`) in `where`.
 * In this example, it updates the rating of movie with ID 4.
 */
async function updateMovie() {
  const update = await prisma.movie.update({
    where: {
      id: 4, // have to provide unique identifier like id
    },
    data: {
      rating: 9.2,
    },
  });
  console.log(update);
}

async function deleteSpecificMovie(movieId: number) {
  const deleteMovie = await prisma.movie.delete({
    where: {
      id: movieId,
    },
  });
  console.log(deleteMovie);
}

/**
 * Main function to run and test specific database operations.
 */
async function main() {
  //   await createMovie();
  //   await createMultipleMovie();
  //   await getMovies();
  //   await getSpecificMovie(4);
  //   await updateMovie();
  //   await deleteSpecificMovie(4);
}

// Run the main function and handle Prisma client cleanup
main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
