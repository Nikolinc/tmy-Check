import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Menu() {
  const [isShownWallet, setIsShownWallet] = useState(false);
  const [isShownScanner, setIsShownScanner] = useState(false);
  const [isShownDex, setIsShownDex] = useState(false);

  const { t } = useTranslation();

  return (
    <div className="flex justify-center">
      <div
        className="
       fixed bottom-[0px] z-30 flex h-[95px] w-5/6 items-baseline justify-center rounded-xl bg-[#FBFBFB] pt-[20px]
        md:left-[54px] md:top-[152px]  md:h-[322px] md:w-[95px] "
      >
        <ul className="grid grid-cols-3 gap-10  text-xs font-normal text-[#474C5F]  md:grid-cols-1 ">
          <li
            className=""
            onMouseEnter={() => setIsShownWallet(true)}
            onMouseLeave={() => setIsShownWallet(false)}
          >
            <a
              href="https://wallet.tmychain.org/"
              className={` absolute rounded-full  bg-[${
                isShownWallet ? "#6D00F3" : "#fff"
              }] flex h-[50px] w-[50px] items-center justify-center shadow-md  `}
            >
              <span className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  className=""
                >
                  <path
                    d="M14.2709 9.07623V6.76825C14.2709 6.46219 14.1493 6.16867 13.9329 5.95225C13.7165 5.73584 13.423 5.61426 13.1169 5.61426H2.15399C1.84793 5.61426 1.55441 5.73584 1.338 5.95225C1.12158 6.16867 1 6.46219 1 6.76825V14.8462C1 15.1522 1.12158 15.4458 1.338 15.6622C1.55441 15.8786 1.84793 16.0002 2.15399 16.0002H13.1169C13.423 16.0002 13.7165 15.8786 13.9329 15.6622C14.1493 15.4458 14.2709 15.1522 14.2709 14.8462V11.9612"
                    stroke={isShownWallet ? "#fff" : "#6D00F3"}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.85352 2.7291L11.3966 1.02119C11.4702 1.00047 11.5471 0.994871 11.6229 1.00472C11.6986 1.01456 11.7716 1.03966 11.8374 1.07848C11.9032 1.11731 11.9604 1.16906 12.0056 1.23061C12.0509 1.29217 12.0832 1.36225 12.1006 1.43663L12.4237 2.7291"
                    stroke={isShownWallet ? "#fff" : "#6D00F3"}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.4249 9.07617H12.5399C12.2212 9.07617 11.9629 9.3345 11.9629 9.65317V11.3842C11.9629 11.7028 12.2212 11.9612 12.5399 11.9612H15.4249C15.7435 11.9612 16.0019 11.7028 16.0019 11.3842V9.65317C16.0019 9.3345 15.7435 9.07617 15.4249 9.07617Z"
                    stroke={isShownWallet ? "#fff" : "#6D00F3"}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </a>

            <p className="mt-[50px] text-center">{t("header.Wallet")}</p>
          </li>
          <li
            onMouseEnter={() => setIsShownScanner(true)}
            onMouseLeave={() => setIsShownScanner(false)}
          >
            <a
              href="https://tmyscan.com/"
              className={` absolute rounded-full  bg-[${
                isShownScanner ? "#6D00F3" : "#fff"
              }] flex h-[50px] w-[50px] items-center justify-center shadow-md  `}
            >
              <span className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <path
                    d="M16.0006 12.5381V14.8458C16.0006 15.1518 15.879 15.4453 15.6626 15.6617C15.4463 15.8781 15.1528 15.9996 14.8468 15.9996H12.5391"
                    stroke={isShownScanner ? "#fff" : "#6D00F3"}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.5391 1H14.8468C15.1528 1 15.4463 1.12157 15.6626 1.33795C15.879 1.55434 16.0006 1.84783 16.0006 2.15385V4.46154"
                    stroke={isShownScanner ? "#fff" : "#6D00F3"}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 4.46154V2.15385C1 1.84783 1.12157 1.55434 1.33795 1.33795C1.55434 1.12157 1.84783 1 2.15385 1H4.46154"
                    stroke={isShownScanner ? "#fff" : "#6D00F3"}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.46154 15.9996H2.15385C1.84783 15.9996 1.55434 15.8781 1.33795 15.6617C1.12157 15.4453 1 15.1518 1 14.8458V12.5381"
                    stroke={isShownScanner ? "#fff" : "#6D00F3"}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.6932 8.49962C13.6932 8.49962 11.3855 11.9612 8.5009 11.9612C5.61629 11.9612 3.30859 8.49962 3.30859 8.49962C3.30859 8.49962 5.61629 5.03809 8.5009 5.03809C11.3855 5.03809 13.6932 8.49962 13.6932 8.49962Z"
                    stroke={isShownScanner ? "#fff" : "#6D00F3"}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.50075 9.0767C8.81938 9.0767 9.07767 8.8184 9.07767 8.49977C9.07767 8.18115 8.81938 7.92285 8.50075 7.92285C8.18213 7.92285 7.92383 8.18115 7.92383 8.49977C7.92383 8.8184 8.18213 9.0767 8.50075 9.0767Z"
                    stroke={isShownScanner ? "#fff" : "#6D00F3"}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </a>

            <p className="mt-[50px] text-center">{t("header.Scanner")}</p>
          </li>
          <li
            onMouseEnter={() => setIsShownDex(true)}
            onMouseLeave={() => setIsShownDex(false)}
          >
            <a
              href="https://tmyswap.org/"
              className={` absolute rounded-full  bg-[${
                isShownDex ? "#6D00F3" : "#fff"
              }] flex h-[50px] w-[50px] items-center justify-center shadow-md  `}
            >
              <span className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <path
                    d="M12.5385 1H4.46154C2.54978 1 1 2.54978 1 4.46154V12.5385C1 14.4502 2.54978 16 4.46154 16H12.5385C14.4502 16 16 14.4502 16 12.5385V4.46154C16 2.54978 14.4502 1 12.5385 1Z"
                    stroke={isShownDex ? "#fff" : "#6D00F3"}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.03906 9.65422L10.2314 4.46191H6.19291"
                    stroke={isShownDex ? "#fff" : "#6D00F3"}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.9618 7.3457L6.76953 12.538H10.808"
                    stroke={isShownDex ? "#fff" : "#6D00F3"}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </a>
            <p className="mt-[50px] text-center">{t("header.Dex")}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
