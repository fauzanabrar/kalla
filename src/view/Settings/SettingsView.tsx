import React from 'react'
import Admin from '../../layouts/MyLayouts/Admin'
import { Button } from '../../../@/components/ui/button';
import { SelectDeletePeriodic } from '../../components/MyComponent/Shadcn/Select/SelectDeletePeriodic';

export default function SettingsView() {
  return (
    <Admin>
      <div className="relative flex min-w-0 w-1/2 break-words bg-white mb-8 shadow-lg rounded-lg">
        <div className="px-6 py-5 flex-auto">
          <p className='text-2xl text-black'>Settings</p>
          <p className='mt-8 mb-2'>Hapus semua data :</p>
          <Button variant='destructive' size='sm' className='inline-block mx-2'>Hapus</Button>
          <p className='my-2'>Hapus data secara periode :</p>
          <SelectDeletePeriodic defaultValue='30' onValueChange={(value) => console.log(value)} />
          <Button variant='default' size='sm' className='my-4 mx-2'>Simpan</Button>
        </div>
      </div>
    </Admin>
  )
}

SettingsView.layout = Admin;