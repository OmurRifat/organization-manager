import { Button } from 'flowbite-react';
import React from 'react';

const FormModal = () => {
    return (
        <div>
            <React.Fragment>
  <Button onClick={onClick}>
    Toggle modal
  </Button>
  <Modal
    show={false}
    size="md"
    popup={true}
    onClose={onClose}
  >
    <Modal.Header />
    <Modal.Body>
      <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
          Sign in to our platform
        </h3>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="email"
              value="Your email"
            />
          </div>
          <TextInput
            id="email"
            placeholder="name@company.com"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="password"
              value="Your password"
            />
          </div>
          <TextInput
            id="password"
            type="password"
            required={true}
          />
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">
              Remember me
            </Label>
          </div>
          <a
            href="/modal"
            className="text-sm text-blue-700 hover:underline dark:text-blue-500"
          >
            Lost Password?
          </a>
        </div>
        <div className="w-full">
          <Button>
            Log in to your account
          </Button>
        </div>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered? 
          <a
            href="/modal"
            className="text-blue-700 hover:underline dark:text-blue-500"
          >
            Create account
          </a>
        </div>
      </div>
    </Modal.Body>
  </Modal>
</React.Fragment>
        </div>
    );
};

export default FormModal;