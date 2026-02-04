import { describe, expect, it } from 'bun:test'

import { cidToIpfsUri, ipfsUriToCid, ipfsUriToUri, isIpfsUri } from '../src/ipfs'

describe('ipfs', () => {
  it('validates and transforms ipfs URIs', () => {
    const cid = 'QmYwAPJzv5CZsnAzt8auVZRnEJkA6R7f4X4A1NVuMcZV8K'
    const uri = cidToIpfsUri(cid)

    expect(isIpfsUri(uri)).toBe(true)
    expect(ipfsUriToCid(uri)).toBe(cid)
    expect(ipfsUriToUri(uri, 'https://ipfs.io')).toBe(`https://ipfs.io/ipfs/${cid}`)
    expect(isIpfsUri('https://ipfs.io/ipfs/test')).toBe(false)
  })
})
