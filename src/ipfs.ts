const ipfsProtocol = 'ipfs://'
const ipfsProtocolRegex = new RegExp(`^${ipfsProtocol}`)
const ipfsCidRegex = /Qm[1-9A-HJ-NP-Za-km-z]{44}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,}[/?#][\w@:%+.~#?&/=]*$/
const ipfsUriRegex = new RegExp(`${ipfsProtocolRegex.source}${ipfsCidRegex.source}`)

/**
 * Validates IPFS URI format.
 *
 * @example
 * isIpfsUri('ipfs://QmHash?foo') // true
 * isIpfsUri('https://ipfs.io/ipfs/QmHash') // false
 */
export const isIpfsUri = (v: string): boolean => ipfsUriRegex.test(v)

/**
 * Extracts CID from an `ipfs://` URI.
 *
 * @example
 * ipfsUriToCid('ipfs://QmHash') // 'QmHash'
 * ipfsUriToCid('ipfs://bafy123') // 'bafy123'
 */
export const ipfsUriToCid = (v: string): string => v.replace(ipfsProtocolRegex, '')

/**
 * Builds `ipfs://` URI from CID.
 *
 * @example
 * cidToIpfsUri('QmHash') // 'ipfs://QmHash'
 * cidToIpfsUri('bafy123') // 'ipfs://bafy123'
 */
export const cidToIpfsUri = (v: string): string => `${ipfsProtocol}${v}`

/**
 * Converts `ipfs://` URI to HTTP gateway URL.
 *
 * @example
 * ipfsUriToUri('ipfs://QmHash', 'https://ipfs.io') // 'https://ipfs.io/ipfs/QmHash'
 */
export function ipfsUriToUri(v: string, gatewayUrl: string): string {
  return v.replace(ipfsProtocolRegex, `${gatewayUrl}/ipfs/`)
}
