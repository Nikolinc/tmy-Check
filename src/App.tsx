import { useUnit } from "effector-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CopyIMG from "./assets/Copy.svg";
import Alert from "./component/alert";
import Check from "./assets/Check.svg";
import { alertState } from "./store/alertStore";
import { Transaction } from "./store/tramsayionStore";

function App() {
  const { id } = useParams();
  const transition = useUnit(Transaction.store);

  useEffect(() => {
    Transaction.event({ id });
  }, []);

  const Copy = (text: string) => {
    navigator.clipboard.writeText(text);
    alertState(true);
  };

  return (
    <>
      <div className="app flex justify-center m-56">
        <div className="grid grid-cols-1 gap-10">
          <div className="bg-[#323242] drop-shadow-xl w-[120vh] h-[200px] grid grid-cols-1 p-10 rounded-lg">
            <div className="font-extrabold text-white text-2xl  ">
              Transaction Details
            </div>
            <div className="font-bold text-white text-lg flex gap-1">
              TRANSACTION HASH:&#32;
              <button
                className="text-[#8F6DD7] flex gap-1"
                onClick={() => {
                  Copy(transition.Hash);
                }}
              >
                &#32;
                {transition.Hash}
                <img src={CopyIMG} alt="" />
              </button>
            </div>
          </div>
          <div className="bg-[#323242] drop-shadow-xl w-[120vh] grid grid-cols-1 p-10 rounded-lg truncate text-[#fff]">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
                <tbody className="divide-y-4 divide-[#343443] drop-shadow-lg">
                  <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium drop-shadow-lg">
                      RESULT:
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 rop-shadow-lg flex text-[#00FFC2]">
                      <img src={Check} alt="" width="20px" className="mr-2" />
                      Success
                    </td>
                  </tr>

                  <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium rop-shadow-lg">
                      Jane Doe
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 rop-shadow-lg">
                      04/11/1980
                    </td>
                  </tr>

                  <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium rop-shadow-lg">
                      Gary Barlow
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 rop-shadow-lg">
                      24/05/1995
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Alert />
    </>
  );
}

export default App;
