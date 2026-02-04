const ipfsProtocol = 'ipfs://';
const ipfsProtocolRegex = new RegExp(`^${ipfsProtocol}`);

const ipfsUriRegex = new RegExp(`${ipfsProtocolRegex.source}(Qm[1-9A-HJ-NP-Za-km-z]{44}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})([/?#][-a-zA-Z0-9@:%_+.~#?&//=]*)*$`);

/**
 * Validates IPFS URI format.
 *
 * @example
 * isIpfsUri('ipfs://QmHash') // true
 * isIpfsUri('https://ipfs.io/ipfs/QmHash') // false
 */
export const isIpfsUri = (v: string): boolean => ipfsUriRegex.test(v);

/**
 * Extracts CID from an `ipfs://` URI.
 *
 * @example
 * ipfsUriToCid('ipfs://QmHash') // 'QmHash'
 * ipfsUriToCid('ipfs://bafy123') // 'bafy123'
 */
export const ipfsUriToCid = (v: string): string => v.replace(ipfsProtocolRegex, '');

/**
 * Builds `ipfs://` URI from CID.
 *
 * @example
 * cidToIpfsUri('QmHash') // 'ipfs://QmHash'
 * cidToIpfsUri('bafy123') // 'ipfs://bafy123'
 */
export const cidToIpfsUri = (v: string): string => `${ipfsProtocol}${v}`;

/**
 * Converts `ipfs://` URI to HTTP gateway URL.
 *
 * @example
 * ipfsUriToUri('ipfs://QmHash', 'https://ipfs.io') // 'https://ipfs.io/ipfs/QmHash'
 * ipfsUriToUri('ipfs://bafy123', 'https://gateway.pinata.cloud') // 'https://gateway.pinata.cloud/ipfs/bafy123'
 */
export const ipfsUriToUri = (v: string, gatewayUrl: string): string => (
    v.replace(ipfsProtocolRegex, `${gatewayUrl}/ipfs/`)
);
