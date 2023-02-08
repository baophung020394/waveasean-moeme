import React from "react";
import { styled } from "utils/styled-component";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CreateChannel from "components/CreateChannel";

interface CustomModalProps {
  open: boolean;
  onClick?: () => void;
  title?: string;
  btnOk?: string;
  btnCancel?: string;
  componentName?: string;
  submitForm?: (data: any) => void;
}

function CustomModal({
  title,
  open,
  btnOk,
  btnCancel,
  componentName,
  submitForm,
  onClick,
}: CustomModalProps) {
  return (
    <CustomModalStyled className="custom-modal">
      <Modal
        show={open}
        onHide={onClick}
        style={{ padding: 0 }}
        data-name={componentName}
        className={componentName}
      >
        <Modal.Body>
          <CreateChannel
            title={title}
            bgColor="https://images.unsplash.com/photo-1534841090574-cba2d662b62e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjB8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
            submitForm={submitForm}
            closeFunc={onClick}
          />
        </Modal.Body>
      </Modal>
    </CustomModalStyled>
  );
}

const CustomModalStyled = styled.div``;

export default CustomModal;
