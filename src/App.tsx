import { useUnit } from "effector-react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Alert from "./component/alert";
import Check from "./assets/Check.svg";
import { Transaction } from "./store/tramsayionStore";
import Button from "./component/button";
import LoadingPage from "./component/loadingPage";

function App() {
  const { id } = useParams();
  const transition = useUnit(Transaction.store);
  const loader = useUnit(Transaction.loader);

  useEffect(() => {
    Transaction.event({ id });
  }, []);

  if (loader) {
    return <LoadingPage />;
  }

  return (
    <>
      <div className="app flex justify-center lg:mt-36 mt-10 place-content-center mx-2">
        <div className="grid grid-cols-1 lg:gap-10 gap-3 w-[120vh]">
          <div className="bg-[#323242] drop-shadow-xl gap-6 w-full grid grid-cols-1 lg:pl-10  pl-3  rounded-lg">
            <div className="font-extrabold text-white lg:text-2xl text-xl pt-10 ">
              Transaction Details
            </div>
            <div className="font-bold text-white text-xs lg:text-lg lg:flex gap-1 pb-10 hyphens-manual">
              TRANSACTION HASH:&#32;&#32;
              <Button text={transition.Hash} size="16px" />
            </div>
          </div>
          <div className="bg-[#323242] drop-shadow-xl w-full grid grid-cols-1 p-10 rounded-lg truncate text-[#fff]">
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
                      BLOCK
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 rop-shadow-lg">
                      <Button text={transition.blockNumber} size="11px" />
                    </td>
                  </tr>

                  <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium rop-shadow-lg">
                      FROM
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 rop-shadow-lg">
                      <Button text={transition.from} size="11px" />
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium rop-shadow-lg">
                      TO
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 rop-shadow-lg">
                      <Button text={transition.to} size="11px" />
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium rop-shadow-lg">
                      TIMESTAMP
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 rop-shadow-lg">
                      {transition.timeStamp}
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium rop-shadow-lg">
                      VALUE
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 rop-shadow-lg">
                      {transition.value}
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium rop-shadow-lg">
                      GAS
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 rop-shadow-lg">
                      {transition.gas}
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
