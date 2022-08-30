import React from "react";
import "./LeftMintingSection.css";
// import { useDispatch, useSelector } from 'react-redux';
// import { preMintingAction } from '../../redux/actions/preMintingAction';
// import klayIcon from '../../images/klaytn.png'
import { ethers, BigNumber } from "ethers";
import { useEffect, useState } from "react";
import setDataAbi from "../contractABI/setData.json";

const LeftMintingSection = () => {
  const [accounts, setAccounts] = useState([]);

  async function connectAccounts() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    }
  }
  useEffect(() => {
    connectAccounts();
  }, []);
  const [mintAmount, setMintAmount] = useState(1);

  async function handleMint() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        "0x2699219656F0bE2128C0A4c0F562E0A8C4021448",
        setDataAbi.abi,
        signer
      );
      try {
        const response = await contract.getOwner();
        console.log("response: ", response);
      } catch (err) {
        console.log("error: ", err);
      }
    }
  }

  return (
    <div>
      <div className="leftSideCotainer">
        <div className="leftMintigSection">
          <div className="leftMintigSectionDetail1">
            <h2>Pre-Sale Minting</h2>
          </div>
          <div className="leftMintigSectionDetail2">
            <div className="testImageBox1"></div>
          </div>
          <div className="leftMintigSectionDetail4">
            <h3>Price : 2.0 ether</h3>
            <h3>Count : </h3>
            {/* <h3>Count : {normalTokenCount} / {maxNormalTokenCount}</h3> */}
          </div>
          <div className="leftMintigSectionDetail5">
            <button className="learn-more" onClick={handleMint}>
              Mintingdfsfdfsdfdsdfsds
            </button>
            {/* <button onClick={minting} className="learn-more" >Minting</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftMintingSection;
