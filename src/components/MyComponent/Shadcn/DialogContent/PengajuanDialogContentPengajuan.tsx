import React from "react";

import { Button } from "../../../../../@/components/ui/button";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogContent,
} from "../../../../../@/components/ui/dialog";
import { Input } from "../../../../../@/components/ui/input";
import { Label } from "../../../../../@/components/ui/label";
import { Textarea } from "../../../../../@/components/ui/textarea";
import { ScrollArea } from "../../../../../@/components/ui/scroll-area";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../../../../@/components/ui/select"
import { DateTimePicker } from "../../../../../@/components/ui/date-time-picker/date-time-picker";

interface MyDialogContentProps {
  inputFiles: { id: string }[];
  handleAddInputFile: () => void;
  handleRemoveInputFile: (id: string) => void;
  setOpen2: React.Dispatch<React.SetStateAction<boolean>>;
  selectOnValueChange: (value: string) => void;
  data: any;
}

export default function PengajuanDialogContent({
  inputFiles,
  handleAddInputFile,
  handleRemoveInputFile,
  setOpen2,
  data,
  selectOnValueChange,
}: MyDialogContentProps) {
  return (
    <div>
      <ScrollArea className="flex h-[420px] items-center pr-5">
        <div className="grid gap-4 px-2 py-4">
          <div className="grid w-full gap-1.5">
            <Label htmlFor="name">Nama Pengajuan</Label>
            <Input id="name" placeholder="Nama pengajuan" />
          </div>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="username">User</Label>
            <Input id="username" placeholder="Alfian Arya" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="grid w-full gap-1.5">
              <Label htmlFor="jabatan">Jabatan</Label>
              <Input id="jabatan" placeholder="General Affair" />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="sbu">SBU</Label>
              <Input id="sbu" placeholder="Head Office" />
            </div>
          </div>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="jenis-pengajuan">Jenis Pengajuan</Label>
            <Select onValueChange={selectOnValueChange} defaultValue={"barang-jasa"}>
              <SelectTrigger>
                <SelectValue placeholder="Jenis Pengajuan"/>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="barang-jasa">Pengadaan Barang dan Jasa</SelectItem>
                  <SelectItem value="maintenance">Maintenance Asset</SelectItem>
                  <SelectItem value="it-tools">IT Tools</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid w-72 gap-1.5">
            <Label htmlFor="file">File Surat Permohonan</Label>
            {inputFiles.map((inputFile, index) => {
              return (
                <div className="flex" key={index}>
                  <Input id={inputFile.id} type="file" className="mr-2" />
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
          <div className="grid w-full gap-1.5">
            <Label htmlFor="waktu-pengajuan">Tanggal dan Waktu Pengajuan</Label>
            <DateTimePicker granularity="minute" shouldCloseOnSelect={true} />
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
    </div>
  );
}
