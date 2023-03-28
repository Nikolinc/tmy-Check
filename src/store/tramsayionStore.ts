import axios from "axios";
import {
  combine,
  createEffect,
  createEvent,
  createStore,
  sample,
} from "effector";
import Web3 from "web3";
interface IParams {
  id: string;
}

const web3 = new Web3("https://node1.tmyblockchain.org/rpc");

export const TranEffect = createEffect({
  handler: async (param: IParams) => {
    const res = await axios.get(
      `https://2.tmyscan.com/api?module=transaction&action=gettxinfo&txhash=${param.id}`
    );

    const tran = res.data.result;
    let options: any = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    options.timeZone = "UTC";
    options.timeZoneName = "short";

    const date = new Date(Number(tran.timeStamp + "000")).toLocaleDateString(
      "en-US",
      options
    );

    const Transations = {
      blockHash: tran.blockHash,
      Hash: tran.hash,
      blockNumber: tran.blockNumber,
      gas: web3.utils.fromWei(tran.gasLimit),
      from: tran.from,
      to: tran.to,
      timeStamp: date,
      value: web3.utils.fromWei(tran.value),
    };
    return Transations;
  },
});

export const TranEvent = createEvent<any>();

export const $Tran = createStore<any>(0).on(
  TranEffect.doneData,
  (_, answer) => answer
);

const $loader = TranEffect.pending;

const canRequest = combine([$loader], ([loading]) => !loading);

sample({
  clock: TranEvent,
  filter: canRequest,
  target: TranEffect,
});

export const Transaction = {
  store: $Tran,
  event: TranEvent,
  loader: $loader,
};
