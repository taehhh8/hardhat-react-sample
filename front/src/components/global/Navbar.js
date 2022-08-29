import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {

    const [errorMessage, setErrorMessage] = useState(null);
    const [connButtonText, setConnBUttonText] = useState('Connect Wallet');
    const [defaultAccount, setDefaultAccount] = useState(null);


    const connectWalletHandler = () => {
        if (window.ethereum) {
            window.ethereum.request({method: 'eth_requestAccounts'})
            .then(result=> {
                accountChangedHandler(result[0]);
            })
        } else {
            setErrorMessage('Install MetaMask');
        }

    }

    const accountChangedHandler = (newAccount) => {
        setDefaultAccount(newAccount);
        // getUserBalance(newAccount.toString());
    }

  return (
    <>
        <div className='Navbar'>
            <div className='leftSide'>
                <button onClick={connectWalletHandler}>{connButtonText}</button>

            </div>
            <div className='rightside'>
                dfdsf
            </div>
        </div>
    </>
  )
}

export default Navbar