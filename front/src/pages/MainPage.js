import React from 'react'
import {WalletCard} from '../components';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';


const MainPage = () => {

    const navigate = useNavigate();

    const gotoMintingPage = () => {
        navigate(`/preMintingPage`)
  }
  return (
    <div className='MainPageContainer'>
        <WalletCard/>
        <div>
            gotoMintingPage
        </div>
        <div>
            <button onClick={gotoMintingPage}>MINTING</button>
        </div>
    </div>
  )
}

export default MainPage