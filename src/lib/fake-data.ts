import { Asset } from "@/components/MyComponent/Shadcn/Table/TableAsset";

export const fakeAssetData: Asset[] = [
  {
    id: "1",
    name: "Asset 1",
    jenis: "Type A",
    user: "User A",
    sbu: "SBU 1",
    status: {
      currentStep: "first",
      currentMessage: "Menunggu RAB",
    },
    completedSteps: [],
    queue: 1,
  },
  {
    id: "2",
    name: "Asset 2",
    jenis: "Type B",
    user: "User B",
    sbu: "SBU 2",
    status: {
      currentStep: "second",
      currentMessage: "Menunggu PR",
    },
    completedSteps: [],
    queue: 2,
  },
  {
    id: "3",
    name: "Asset 3",
    jenis: "Type C",
    user: "User C",
    sbu: "SBU 3",
    status: {
      currentStep: "third",
      currentMessage: "PR diupload",
    },
    completedSteps: [],
    queue: 3,
  },
  {
    id: "4",
    name: "Asset 4",
    jenis: "Type D",
    user: "User D",
    sbu: "SBU 4",
    status: {
      currentStep: "fourth",
      currentMessage: "Diverifikasi",
    },
    completedSteps: [],
    queue: 4,
  },
  {
    id: "5",
    name: "Asset 5",
    jenis: "Type E",
    user: "User E",
    sbu: "SBU 5",
    status: {
      currentStep: "done",
      currentMessage: "Selesai",
    },
    completedSteps: [],
    queue: 5,
  },
];

