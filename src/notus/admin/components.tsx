import React from "react";
import Alerts from "../../components/Alerts/Alerts";
import Button from "../../components/Bottons/Button";
import ExampleDropdown from "../../components/Dropdowns/ExampleDropdown";
import Modal from "../../components/Modals/Modal";
import ModalTailwind from "../../components/Modals/ModalTailwind";
import TabsWithIcon from "../../components/Tabs/TabWithIcon";

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
