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
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Detail Pengajuan</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <ScrollArea className="h-[450px] pr-5 flex items-center">
          <div className="grid gap-4 py-4 px-2">
            <div className="grid w-full gap-1.5">
              <Label htmlFor="name">User</Label>
              <Input id="name" placeholder="Alfian Arya" />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="jabatan">Jabatan</Label>
              <Input id="jabatan" placeholder="General Affair" />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="sbu">SBU</Label>
              <Input id="sbu" placeholder="Head Office" />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="file">File</Label>
              {inputFiles.map((inputFile, index) => {
                return (
                  <div className="flex" key={index}>
                    <Input id={inputFile.id} type="file" />
                    {inputFiles.length !== index + 1 ? (
                      <Button
                        variant="outline"
                        className="rounded-md border-s-2"
                        onClick={(e) => handleRemoveInputFile(inputFile.id)}
                      >
                        -
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        className="rounded-md border-s-2"
                        onClick={handleAddInputFile}
                      >
                        +
                      </Button>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="keterangan">Keterangan</Label>
              <Textarea placeholder="Type here." id="keterangan" />
            </div>
          </div>
      </ScrollArea>

          <DialogFooter>
            <Button
              type="submit"
              variant={"secondary"}
              className="rounded-md border-s-2"
              onClick={(e) => {
                e.preventDefault();
                setOpen2(false);
              }}
            >
              Kembali
            </Button>
          </DialogFooter>
        </DialogContent>
    </Dialog>
  );
}
