import * as chains from "viem/chains";

export type ScaffoldConfig = {
  targetNetworks: readonly chains.Chain[];
  pollingInterval: number;
  alchemyApiKey: string;
  rpcOverrides?: Record<number, string>;
  walletConnectProjectId: string;
  onlyLocalBurnerWallet: boolean;
};

export const DEFAULT_ALCHEMY_API_KEY = "oKxs-03sij-U_N0iOlrSsZFr29-IqbuF";

const scaffoldConfig = {
  targetNetworks: [chains.sepolia],

  pollingInterval: 30000,

  alchemyApiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || DEFAULT_ALCHEMY_API_KEY,

  rpcOverrides: {
    [chains.sepolia.id]: process.env.NEXT_PUBLIC_SEPOLIA_RPC_URL ?? `https://eth-sepolia.g.alchemy.com/v2/${DEFAULT_ALCHEMY_API_KEY}`,
  },

  walletConnectProjectId:
    process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || "3a8170812b534d0ff9d794f19a901d64",

  onlyLocalBurnerWallet: process.env.NEXT_PUBLIC_ENABLE_BURNER_WALLET === "true",
} as const satisfies ScaffoldConfig;

export default scaffoldConfig;
