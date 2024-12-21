// Extend the global window object to include ethereum as an EIP-1193 provider.
export {};

declare global {
    interface Window {
        ethereum?: {
            isMetaMask?: boolean;
            request: (args: {
                method: string;
                params?: unknown[];
            }) => Promise<unknown>;
            on: (event: string, callback: (...args: unknown[]) => void) => void;
            removeListener: (
                event: string,
                callback: (...args: unknown[]) => void
            ) => void;
        };
    }
}
