import React from "react";
import Admin from "../../layouts/MyLayouts/Admin";
import { Button } from "../../components/ui/button";
import { SelectDeletePeriodic } from "../../components/MyComponent/Shadcn/Select/SelectDeletePeriodic";

export default function SettingsView() {
  return (
    <Admin>
      <div className="relative mb-8 flex w-1/2 min-w-0 break-words rounded-lg bg-white shadow-lg">
        <div className="flex-auto px-6 py-5">
          <p className="text-2xl text-black">Settings</p>
          <p className="mb-2 mt-8">Hapus semua data :</p>
          <Button variant="destructive" size="sm" className="mx-2 inline-block">
            Hapus
          </Button>
          <p className="my-2">Hapus data secara periode :</p>
          <SelectDeletePeriodic
            defaultValue="30"
            onValueChange={(value) => console.log(value)}
          />
          <Button variant="default" size="sm" className="mx-2 my-4">
            Simpan
          </Button>
        </div>
      </div>
    </Admin>
  );
}

SettingsView.layout = Admin;
