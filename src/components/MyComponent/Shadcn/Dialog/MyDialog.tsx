"use client";

import React from "react";
import { Button } from "../../../../../@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../../../@/components/ui/dialog";
import { Input } from "../../../../../@/components/ui/input";
import { Label } from "../../../../../@/components/ui/label";
import { Textarea } from "../../../../../@/components/ui/textarea";
import { ScrollArea } from "../../../../../@/components/ui/scroll-area";
import MyDialogContent from "../DialogContent/MyDialogContent";

export function DialogDemo() {
  const [open, setOpen2] = React.useState(false);
  const [inputFiles, setInputFiles] = React.useState([{ id: "file1" }]);

  const handleAddInputFile = () => {
    setInputFiles([...inputFiles, { id: `file${inputFiles.length + 1}` }]);
  };

  const handleRemoveInputFile = (id: string) => {
    console.log(id);
    setInputFiles(inputFiles.filter((inputFile) => inputFile.id !== id));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen2}>
      <DialogTrigger asChild id="hmmm">
        <Button
          variant="outline"
          onClick={(e) => {
            e.preventDefault();
            setOpen2(true);
          }}
        >
          Lihat
        </Button>
      </DialogTrigger>
      <MyDialogContent inputFiles={inputFiles} handleAddInputFile={handleAddInputFile} handleRemoveInputFile={handleRemoveInputFile} setOpen2={setOpen2} />
    </Dialog>
  );
}
