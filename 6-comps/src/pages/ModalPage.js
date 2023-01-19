import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  const actionBar = (
    <div>
      <Button primary onClick={handleClick}>
        I accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClick} actionBar={actionBar}>
      <p>
        Wohl es zauberhauch gestalten erste noch zerstreuet die, wird ach
        schmerz stunden schwebet, verklungen der sang es versuch ich dunst..
      </p>
    </Modal>
  );

  return (
    // <div className="relative">

    <div>
      <Button rounded primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Tapping gloating no lining on i the ebony its. Into bird separate
        uncertain or while at. Is sainted flown engaged beguiling least ominous
        upstarting my. The raven horror before bird answer lamplight or books
        his, or door over sure upon dreaming ever. That my only lenore by at,
        this linking i bust the gloated did aidenn turning, eyes and the eagerly
        tell whether than above door. The shall its.
      </p>
      <p>
        Tapping gloating no lining on i the ebony its. Into bird separate
        uncertain or while at. Is sainted flown engaged beguiling least ominous
        upstarting my. The raven horror before bird answer lamplight or books
        his, or door over sure upon dreaming ever. That my only lenore by at,
        this linking i bust the gloated did aidenn turning, eyes and the eagerly
        tell whether than above door. The shall its.
      </p>
      <p>
        Tapping gloating no lining on i the ebony its. Into bird separate
        uncertain or while at. Is sainted flown engaged beguiling least ominous
        upstarting my. The raven horror before bird answer lamplight or books
        his, or door over sure upon dreaming ever. That my only lenore by at,
        this linking i bust the gloated did aidenn turning, eyes and the eagerly
        tell whether than above door. The shall its.
      </p>
      <p>
        Tapping gloating no lining on i the ebony its. Into bird separate
        uncertain or while at. Is sainted flown engaged beguiling least ominous
        upstarting my. The raven horror before bird answer lamplight or books
        his, or door over sure upon dreaming ever. That my only lenore by at,
        this linking i bust the gloated did aidenn turning, eyes and the eagerly
        tell whether than above door. The shall its.
      </p>

      <p>
        Tapping gloating no lining on i the ebony its. Into bird separate
        uncertain or while at. Is sainted flown engaged beguiling least ominous
        upstarting my. The raven horror before bird answer lamplight or books
        his, or door over sure upon dreaming ever. That my only lenore by at,
        this linking i bust the gloated did aidenn turning, eyes and the eagerly
        tell whether than above door. The shall its.
      </p>
      <p>
        Tapping gloating no lining on i the ebony its. Into bird separate
        uncertain or while at. Is sainted flown engaged beguiling least ominous
        upstarting my. The raven horror before bird answer lamplight or books
        his, or door over sure upon dreaming ever. That my only lenore by at,
        this linking i bust the gloated did aidenn turning, eyes and the eagerly
        tell whether than above door. The shall its.
      </p>
      <p>
        Tapping gloating no lining on i the ebony its. Into bird separate
        uncertain or while at. Is sainted flown engaged beguiling least ominous
        upstarting my. The raven horror before bird answer lamplight or books
        his, or door over sure upon dreaming ever. That my only lenore by at,
        this linking i bust the gloated did aidenn turning, eyes and the eagerly
        tell whether than above door. The shall its.
      </p>
      <p>
        Tapping gloating no lining on i the ebony its. Into bird separate
        uncertain or while at. Is sainted flown engaged beguiling least ominous
        upstarting my. The raven horror before bird answer lamplight or books
        his, or door over sure upon dreaming ever. That my only lenore by at,
        this linking i bust the gloated did aidenn turning, eyes and the eagerly
        tell whether than above door. The shall its.
      </p>
    </div>
  );
};

export default ModalPage;
