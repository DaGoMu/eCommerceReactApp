import { Button, Modal } from "antd";
import { useState } from "react";

const WarningModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      {/* <Button type="primary" onClick={showModal}>
        Open Modal
      </Button> */}
      <Modal
        title="WARNING!"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>
          This is a sample of an eCommerce application. Is NOT a real online
          shop.
        </p>
        <p>
          Because its experimental, it can takes a while to do some actions like
          loading products, or submit forms. Please be patient.{" "}
        </p>
        <p>
          Please do not use any real info. The payment platform is just for fake
          the payments and orders. Please do not use it.
        </p>
        <p>Any problems, questions, etc. please contact us.</p>
      </Modal>
    </>
  );
};
export default WarningModal;
