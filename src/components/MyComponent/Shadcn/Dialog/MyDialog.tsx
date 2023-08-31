"use client";

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

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Lihat</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Detail Pengajuan</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid w-full gap-1.5">
            <Label htmlFor="name" >
              User
            </Label>
            <Input id="name" placeholder="Alfian Arya" />
          </div>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="username" >
              Jabatan
            </Label>
            <Input id="username" placeholder="General Affair - Head Office"  />
          </div>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="file" >
              File
            </Label>
            <Input id="file1" type="file" />
            <Input id="file2" type="file" />
            <Input id="file3" type="file" />
          </div>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="keterangan">Keterangan</Label>
            <Textarea placeholder="Type here." id="keterangan" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" variant={"secondary"} className="rounded-md border-s-2" >Kembali</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
