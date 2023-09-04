import React from 'react'
import Admin from '../../layouts/MyLayouts/Admin'
import { TabsDemo } from '../../components/MyComponent/Shadcn/Tab/MyTab';

export default function MaintenanceView() {
  return (
    <Admin>
      <TabsDemo />
    </Admin>
  )
}

MaintenanceView.layout = Admin;