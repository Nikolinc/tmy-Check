import { useUnit } from "effector-react";
import React from "react";
import { $alert, alertState } from "../store/alertStore";

export default function Alert() {
  const alert = useUnit($alert);

  function Copy() {
    return (
      <div className="absolute right-[1%] left-[1%] z-[80] flex justify-center lg:right-[20%] lg:left-[20%] ">
        <div
          role="alert"
          className={`border-indigo-500 bg-indigo-50 w-2/8 rounded-xl  border p-4 shadow-xl`}
        >
          <div className="flex items-start  gap-4">
            <svg
              width="19"
              height="22"
              viewBox="0 0 19 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_105)">
                <path
                  d="M17.9226 15.6154C17.9226 16.0234 17.7605 16.4147 17.472 16.7032C17.1835 16.9918 16.7922 17.1538 16.3842 17.1538H6.38416C5.97614 17.1538 5.58482 16.9918 5.2963 16.7032C5.0078 16.4147 4.8457 16.0234 4.8457 15.6154V2.53846C4.8457 2.13044 5.0078 1.73912 5.2963 1.4506C5.58482 1.16208 5.97614 1 6.38416 1H13.3072L17.9226 5.61538V15.6154Z"
                  stroke="#8F6DD7"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13 21H2.5C2.10218 21 1.72064 20.842 1.43933 20.5607C1.15803 20.2795 1 19.8979 1 19.5001V6"
                  stroke="#8F6DD7"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_105">
                  <rect width="19" height="22" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <div className="flex">
              <strong className="block text-sm font-medium text-gray-900 lg:text-base">
                {" "}
                Text copied successfully{" "}
              </strong>
            </div>

            <button
              className="text-gray-500 transition hover:text-gray-600"
              onClick={() => alertState(false)}
            >
              <span className="sr-only">Dismiss popup</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (alert) {
    return <Copy />;
  }

  return <></>;
}
