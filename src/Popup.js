import * as React from "react";
import { Button } from "baseui/button";
import "./Popup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faEnvelopeSquare,
  faEnvelopeOpen,
  faEnvelopeOpenText
} from "@fortawesome/free-solid-svg-icons";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
  SIZE,
  ROLE
} from "baseui/modal";

export default function Popup({ text, title, photo, extradesc, email }) {
  const [isOpen, setIsOpen] = React.useState(false);
  function close() {
    setIsOpen(false);
  }

  return (
    <React.Fragment>
      <Button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        View More Info
      </Button>
      <Modal
        onClose={close}
        isOpen={isOpen}
        role={ROLE.dialog}
        size={SIZE.default}
      >
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>{text}</ModalBody>
        <ModalBody>{extradesc}</ModalBody>

        <ModalBody>
          <img height="250px" src={photo}></img>
        </ModalBody>
        <ModalBody></ModalBody>
        <ModalFooter>
          <ModalButton>
            <a href={`mailto:${email}`}>
              <FontAwesomeIcon
                icon={faEnvelopeOpenText}
                size="lg"
                color="white"
              />
              Shoot me an email
            </a>
          </ModalButton>

          <ModalButton onClick={close}>Close</ModalButton>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
}
