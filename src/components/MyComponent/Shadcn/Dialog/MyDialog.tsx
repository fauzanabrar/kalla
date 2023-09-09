"use client";

import React from "react";
import { Button } from "../../../../../@/components/ui/button";
import { v1 as uuidv1 } from 'uuid';
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
import PengajuanDialogContent from "../DialogContent/PengajuanDialogContentPengajuan";

export function DialogDemo() {
  const [open, setOpen2] = React.useState(false);
  const [inputFiles, setInputFiles] = React.useState([{ id: `fileId-${uuidv1()}`, file: null }]);


  console.log('input files:', inputFiles);
  
  const handleAddInputFile = () => {
    setInputFiles([...inputFiles, { id: `fileId-${uuidv1()}`, file:null }]);
  };

  const handleFileChange = (id: string, event: React.ChangeEvent<HTMLInputElement>): void => {
    const updatedInputFiles = inputFiles.map((inputFile) => {
      if (inputFile.id === id) {
        return { ...inputFile, file: event.target.files ? event.target.files[0] : null };
      }
      return inputFile;
    });

    setInputFiles(updatedInputFiles as { id: string; file: null }[]);
  }

  const handleRemoveInputFile = (id: string) => {
    console.log('id removed:',id);
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
      <DialogContent className="scale-95 sm:scale-100">
        <DialogHeader>
          <DialogTitle>Detail Pengajuan</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="pengajuan">
          <TabsList className="grid scale-90 sm:scale-100 w-full grid-cols-5 mb-4">
            <TabsTrigger value="pengajuan">Pengajuan</TabsTrigger>
            <TabsTrigger value="rab">RAB</TabsTrigger>
            <TabsTrigger value="pr">PR</TabsTrigger>
            <TabsTrigger value="verifikasi">Verifikasi</TabsTrigger>
            <TabsTrigger value="pengadaan">Pengadaan</TabsTrigger>
          </TabsList>
          <TabsContent value="pengajuan">
            <PengajuanDialogContent
              inputFiles={inputFiles}
              handleAddInputFile={handleAddInputFile}
              handleRemoveInputFile={handleRemoveInputFile}
              setOpen2={setOpen2}
              data={''}
              selectOnValueChange={() => console.log('')}
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
