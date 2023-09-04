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

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../../@/components/ui/tabs";

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
      <DialogTrigger asChild>
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
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Detail Pengajuan</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="pengajuan">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="pengajuan">Pengajuan</TabsTrigger>
            <TabsTrigger value="rab">RAB</TabsTrigger>
            <TabsTrigger value="pr">PR</TabsTrigger>
            <TabsTrigger value="verifikasi">Verifikasi</TabsTrigger>
            <TabsTrigger value="pengadaan">Pengadaan</TabsTrigger>
          </TabsList>
          <TabsContent value="pengajuan">
            <MyDialogContent
              inputFiles={inputFiles}
              handleAddInputFile={handleAddInputFile}
              handleRemoveInputFile={handleRemoveInputFile}
              setOpen2={setOpen2}
            />
          </TabsContent>
          <TabsContent value="rab">
            <MyDialogContent
              inputFiles={inputFiles}
              handleAddInputFile={handleAddInputFile}
              handleRemoveInputFile={handleRemoveInputFile}
              setOpen2={setOpen2}
            />
          </TabsContent>
          <TabsContent value="pr">
            <MyDialogContent
              inputFiles={inputFiles}
              handleAddInputFile={handleAddInputFile}
              handleRemoveInputFile={handleRemoveInputFile}
              setOpen2={setOpen2}
            />
          </TabsContent>
          <TabsContent value="verifikasi">
            <MyDialogContent
              inputFiles={inputFiles}
              handleAddInputFile={handleAddInputFile}
              handleRemoveInputFile={handleRemoveInputFile}
              setOpen2={setOpen2}
            />
          </TabsContent>
          <TabsContent value="pengadaan">
            <MyDialogContent
              inputFiles={inputFiles}
              handleAddInputFile={handleAddInputFile}
              handleRemoveInputFile={handleRemoveInputFile}
              setOpen2={setOpen2}
            />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
