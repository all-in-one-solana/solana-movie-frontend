import { FC, ReactNode } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import * as web3 from '@solana/web3.js'
import {
	PhantomWalletAdapter,
	BitKeepWalletAdapter,
	CoinbaseWalletAdapter,
  } from "@solana/wallet-adapter-wallets";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

require('@solana/wallet-adapter-react-ui/styles.css');

const WalletContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const endpoint = web3.clusterApiUrl('devnet')
	const wallets = [
		new PhantomWalletAdapter(),
		new BitKeepWalletAdapter(),
		new CoinbaseWalletAdapter(),
	]

	return (
		<ConnectionProvider endpoint={endpoint}>
			<WalletProvider wallets={wallets} autoConnect>
				<WalletModalProvider>
				{/* Your app's components go here, nested within the context providers. */}
				{children}
				</WalletModalProvider>
      		</WalletProvider>
		</ConnectionProvider>
	)
}

export default WalletContextProvider
