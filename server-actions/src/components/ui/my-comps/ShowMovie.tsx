"use client";
import { ChangeEvent, useState } from "react";
import { Button } from "../button";
import { Card, CardContent, CardHeader, CardTitle } from "../card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../dialog";
import { Input } from "../input";
import { Label } from "../label";
import Image from "next/image";
import * as actions from "@/actions/index";

interface MovieProps {
  id: string;
  title: string;
  description: string;
  image: string;
}
const ShowMovie = ({ data }: { data: MovieProps }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [updatedMovie, setUpdatedMovie] = useState({ ...data });

  const handleUpdateMovie = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof MovieProps
  ) => {
    setUpdatedMovie((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <Card className="">
      <CardHeader>
        <CardTitle>{data.title}</CardTitle>
      </CardHeader>

      <CardContent>
        <Image
          src={data.image}
          alt={data.title}
          width={400}
          height={192}
          className="w-full h-48 object-cover rounded"
        />
        <p className="mt-2">{data.description}</p>

        {/* Delete Button */}
        <form action={actions.deleteMovie} className="mt-4">
          <Input type="hidden" name="movieID" value={data.id} />
          <Button className="bg-red-500 px-4 py-2 text-white">Delete</Button>
        </form>

        {/* Edit Dialog */}
        <Dialog
          open={openDialog}
          onOpenChange={() => setOpenDialog(!openDialog)}
        >
          <DialogTrigger asChild>
            <Button variant="outline" className="mt-2">
              Edit
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Movie</DialogTitle>

              <form action={actions.editMovie} className="space-y-4">
                <div>
                  <Label>Title</Label>
                  <Input
                    type="text"
                    value={updatedMovie.title}
                    onChange={(e) => handleUpdateMovie(e, "title")}
                    name="title"
                  />
                </div>

                <div>
                  <Label>Description</Label>
                  <textarea
                    name="description"
                    value={updatedMovie.description}
                    onChange={(e) => handleUpdateMovie(e, "description")}
                    className="w-full p-2 border rounded"
                  />
                </div>

                <div>
                  <Label>Image URL</Label>
                  <Input
                    type="text"
                    value={updatedMovie.image}
                    onChange={(e) => handleUpdateMovie(e, "image")}
                    name="imageUrl"
                  />
                </div>

                <Input type="hidden" name="movieID" value={data.id} />
                <Button type="submit" onClick={() => setOpenDialog(false)}>
                  Save
                </Button>
              </form>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default ShowMovie;
