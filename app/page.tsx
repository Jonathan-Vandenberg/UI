"use client";

import { useEffect, useState } from "react";
import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES, SafeEventEmitterProvider } from "@web3auth/base";
import RPC from "./web3RPC";
import Nav from "../components/ui/nav";
import Container from "../components/ui/container";
import CategoriesIcons from "../components/ui/categories-icons";

require("dotenv").config();

const clientId = process.env.NEXT_PUBLIC_WEB3AUTH_ClIENT_ID
  ? process.env.NEXT_PUBLIC_WEB3AUTH_ClIENT_ID
  : "";

function App() {
  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
  const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(
    null
  );

  useEffect(() => {
    const init = async () => {
      try {
        console.log("CLIENT_ID: ", clientId);
        const web3auth = new Web3Auth({
          clientId,
          web3AuthNetwork: "testnet", // mainnet, aqua, celeste, cyan or testnet
          chainConfig: {
            chainNamespace: CHAIN_NAMESPACES.EIP155,
            chainId: "0x13881",
            rpcTarget:
              " https://polygon-mumbai.infura.io/v3/4458cf4d1689497b9a38b1d6bbf05e78", // This is the public RPC we have added, please pass on your own endpoint while creating an app
          },
        });

        setWeb3auth(web3auth);

        await web3auth.initModal();

        if (web3auth.provider) {
          setProvider(web3auth.provider);
        }
      } catch (error) {
        console.error(error);
      }
    };

    init();
  }, []);

  const login = async () => {
    if (!web3auth) {
      uiConsole("web3auth not initialized yet");
      return;
    }
    const web3authProvider = await web3auth.connect();
    setProvider(web3authProvider);
  };

  const authenticateUser = async () => {
    if (!web3auth) {
      uiConsole("web3auth not initialized yet");
      return;
    }
    const idToken = await web3auth.authenticateUser();
    uiConsole(idToken);
  };

  const getUserInfo = async () => {
    if (!web3auth) {
      uiConsole("web3auth not initialized yet");
      return;
    }
    const user = await web3auth.getUserInfo();
    uiConsole(user);
  };

  const logout = async () => {
    if (!web3auth) {
      uiConsole("web3auth not initialized yet");
      return;
    }
    await web3auth.logout();
    setProvider(null);
  };

  const getChainId = async () => {
    if (!provider) {
      uiConsole("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const chainId = await rpc.getChainId();
    uiConsole(chainId);
  };
  const getAccounts = async () => {
    if (!provider) {
      uiConsole("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const address = await rpc.getAccounts();
    uiConsole(address);
  };

  const getBalance = async () => {
    if (!provider) {
      uiConsole("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const balance = await rpc.getBalance();
    uiConsole(balance);
  };

  const sendTransaction = async () => {
    if (!provider) {
      uiConsole("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const receipt = await rpc.sendTransaction();
    uiConsole(receipt);
  };

  const signMessage = async () => {
    if (!provider) {
      uiConsole("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const signedMessage = await rpc.signMessage();
    uiConsole(signedMessage);
  };

  const getPrivateKey = async () => {
    if (!provider) {
      uiConsole("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const privateKey = await rpc.getPrivateKey();
    uiConsole(privateKey);
  };

  function uiConsole(...args: any[]): void {
    const el = document.querySelector("#console>p");
    if (el) {
      el.innerHTML = JSON.stringify(args || {}, null, 2);
    }
  }

  const loggedInView = (
    <>
      <div className="">
        <div>
          <button onClick={getUserInfo} className="text-gray-700">
            Get User Info
          </button>
        </div>
        <div>
          <button onClick={authenticateUser} className="text-gray-700">
            Get ID Token
          </button>
        </div>
        <div>
          <button onClick={getChainId} className="text-gray-700">
            Get Chain ID
          </button>
        </div>
        <div>
          <button onClick={getAccounts} className="text-gray-700">
            Get Accounts
          </button>
        </div>
        <div>
          <button onClick={getBalance} className="text-gray-700">
            Get Balance
          </button>
        </div>
        <div>
          <button onClick={signMessage} className="text-gray-700">
            Sign Message
          </button>
        </div>
        <div>
          <button onClick={sendTransaction} className="text-gray-700">
            Send Transaction
          </button>
        </div>
        <div>
          <button onClick={getPrivateKey} className="text-gray-700">
            Get Private Key
          </button>
        </div>
        <div>
          <button onClick={logout} className="text-gray-700">
            Log Out
          </button>
        </div>
      </div>

      <div id="console" style={{ whiteSpace: "pre-line" }}>
        <p style={{ whiteSpace: "pre-line" }}>Logged in Successfully!</p>
      </div>
    </>
  );

  // const unloggedInView = (
  //   <button onClick={login} className="text-gray-700">
  //     Login
  //   </button>
  // );

  return (
    <div className="w-full bg-slate-50">
      <Nav onClick={login} />
      <CategoriesIcons />
      <div className="grid">{provider ? loggedInView : ""}</div>
    </div>
  );
}

export default App;
