'use client';
import { useState, useEffect } from 'react';
import { BrowserProvider, Eip1193Provider, ethers } from 'ethers';

export default function ConnectWallet() {
    const [account, setAccount] = useState<string>('');
    const [balance, setBalance] = useState<string>('');
    const [error, setError] = useState<string>('');

    const connectWallet = async () => {
        try {
            if (!window.ethereum) {
                throw new Error(
                    'MetaMask is not installed. Please install it to use this app.'
                );
            }

            const ethereumEIP: Eip1193Provider = window.ethereum;
            const provider = new BrowserProvider(ethereumEIP);

            const accounts = await ethereumEIP.request({
                method: 'wallet_requestPermissions',
                params: [{ eth_accounts: {} }],
            });
            // Request access to MetaMask and trigger account selection
            if (accounts.length === 0) {
                throw new Error('No account selected.');
            }

            const signer = provider.getSigner();
            const accountAddress = (await signer).address;
            const accountBalance = await provider.getBalance(accountAddress);

            // Update state with fetched account and balance
            setAccount(accountAddress);
            setBalance(ethers.formatEther(accountBalance));
            setError(''); // Clear any previous errors
        } catch (err: any) {
            console.error('Error connecting wallet:', err);
            setError(err?.message || 'An unknown error occurred.');
        }
    };

    const disconnectWallet = async () => {
        try {
            setAccount('');
            setBalance('');
        } catch (err: any) {
            setError(err?.message || 'Failed to disconnect wallet.');
        }
    };

    useEffect(() => {
        const handleAccountsChanged = (accounts: string[]) => {
            console.log('Accounts changed:', accounts);
            if (accounts.length > 0) {
                setAccount(accounts[0]);
            } else {
                setAccount('');
            }
        };

        const handleChainChanged = () => {
            console.log('Network changed. Reloading page...');
            window.location.reload();
        };

        if (window.ethereum) {
            window.ethereum.on('accountsChanged', handleAccountsChanged);
            window.ethereum.on('chainChanged', handleChainChanged);
        }

        return () => {
            if (window.ethereum) {
                window.ethereum.removeListener(
                    'accountsChanged',
                    handleAccountsChanged
                );
                window.ethereum.removeListener(
                    'chainChanged',
                    handleChainChanged
                );
            }
        };
    }, []);

    return (
        <div>
            {!account ? (
                <button onClick={connectWallet}>Connect Wallet</button>
            ) : (
                <div>
                    <p>
                        <strong>Connected Account:</strong> {account}
                    </p>
                    <p>
                        <strong>Balance:</strong> {balance} ETH
                    </p>
                    <button onClick={disconnectWallet}>
                        Disconnect Wallet
                    </button>
                </div>
            )}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <p>bruh</p>
        </div>
    );
}
