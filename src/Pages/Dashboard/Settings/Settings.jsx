import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import ChangePassword from '../../LogIn/ChangePassword';


const Settings= () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <Button type="primary" className='text-black bg-green-500 text-white' onClick={showModal}>
      Change Password
      </Button>
      <Modal className='' title="Please Enter your email for changing Password !!!!" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
       <ChangePassword></ChangePassword>
      </Modal>
    </>
  );
};

export default Settings;