import React from "react";
import Alerts from "../../components/Notus/Alerts/Alerts";
import Button from "../../components/Notus/Buttons/Button";
import ExampleDropdown from "../../components/Notus/Dropdowns/ExampleDropdown";
import Modal from "../../components/Notus/Modals/Modal";
import ModalTailwind from "../../components/Notus/Modals/ModalTailwind";
import TabsWithIcon from "../../components/Notus/Tabs/TabWithIcon";

// layout for page
import Admin from "../../layouts/Admin";

export default function Components() {
  return (
    <Admin>
      <Alerts />
      <Button />
      <ExampleDropdown />
      <Modal />
      <ModalTailwind />
      <TabsWithIcon />
    </Admin>
  );
}
