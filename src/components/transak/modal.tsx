import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { XCircleIcon } from "@heroicons/react/20/solid";
import { Button, Card } from "../index";

export default function MyModal({ isOpen, closeModal, buyCrypto }) {
  const [walletAddress, setWalletAddress] = useState("");
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg py-8 bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="container mx-auto py-4 px-8">
                    <div className="mt-2 mb-4">
                      <label
                        htmlFor="username"
                        className="text-md font-semibold pb-2 text-gray-600 uppercase"
                      >
                        TO
                      </label>
                      <input
                        type="email"
                        id="username"
                        name="username"
                        onChange={(e) => {
                          setWalletAddress(e.target.value);
                        }}
                        value={walletAddress}
                        autoComplete="email"
                        className="block w-full mt-6 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <h2 className="text-md font-semibold pb-2 text-gray-600 uppercase">
                      Order Details
                    </h2>

                    <dl className="space-y-4">
                      <div className="flex items-center justify-between border-t border-gray-200 pt-2 text-gray-900">
                        <dt>0.02789039 ETH @ 159716.65 INR</dt>
                        <dd className="text-gray-900">4454.56 INR</dd>
                      </div>

                      <div className="flex items-center justify-between border-t border-gray-200 pt-2 text-gray-900">
                        <dt>Network/Exchange fee</dt>
                        <dd className="text-gray-900">345.94 INR</dd>
                      </div>

                      {/* <div className="flex items-center justify-between border-t border-gray-200 pt-2 text-gray-900">
                        <dt>Transak fee</dt>
                        <dd className="text-gray-900">199.5 INR</dd>
                      </div> */}

                      <div className="flex items-center justify-between border-t border-gray-200 pt-2 text-gray-900">
                        <dt className="text-base">Total</dt>
                        <dd className="text-base">5000 INR</dd>
                      </div>
                    </dl>

                    <button
                      type="submit"
                      className="mt-6 w-full rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-lg font-semibold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500"
                    >
                      Confirm
                    </button>

                    <div className="rounded-md bg-red-50 p-4 mt-6">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <XCircleIcon
                            className="h-5 w-5 text-red-400"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-red-800">
                            Insufficient Funds
                          </h3>
                          <div className="mt-2 text-sm text-red-700">
                            <ul role="list" className="list-disc space-y-1">
                              You do not have enough ETH in your account to pay
                              for transaction fees on Ethereum Mainnet work. You
                              can
                              <Button
                                onClick={buyCrypto}
                                className="text-white mr-2 mt-1"
                              >
                                Buy Crypto
                              </Button>
                              and get funds in a minute.
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
