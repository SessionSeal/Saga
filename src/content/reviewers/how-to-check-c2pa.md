---
title: "How do I check the C2PA credential in a SessionSeal file myself?"
summary: "Open the signed record with any standard C2PA verifier, such as the Content Authenticity Initiative's Verify tool or c2patool. You do not have to take SessionSeal's word for it."
group: "The signed record (C2PA)"
order: 5
updated: "September 2026"
---

C2PA is an open standard, which means the credential is not something only SessionSeal can read. Any conforming verifier can open it, so you can confirm it independently.

## The quickest way

1. On the report, open **View the signed record**. This is the public credential for this specific track.
2. Go to a standard C2PA verifier. The Content Authenticity Initiative provides a free web verifier at **contentcredentials.org/verify**.
3. Provide the file or its URL to the verifier.

The verifier will show you the signed manifest: who signed it, when, and whether the content is intact and unmodified since signing.

## For a technical reviewer

If you prefer the command line, the official open-source **c2patool** reads and validates the same credential:

```
c2patool <file> --detailed
```

This prints the full manifest, the signature chain, the hash bindings for the master and the committed stems and session, and whether every binding validates.

## What a valid result means

A successful verification tells you the record is **authentic and unaltered**: the signature checks out and the content matches what was sealed. If someone had edited the file after sealing, verification would fail or report a mismatch.

## What to expect on the signer

You may notice the signing certificate is described as **self-attested** rather than issued by a public certificate authority. That is expected at this stage and does not affect the integrity guarantee. We explain exactly what it means, and what it does and does not change, in [Should I trust a "self-attested" signature?](/faq/self-attested-signature).

For what the credential is actually asserting, see [What exactly is the C2PA credential telling me?](/faq/what-is-c2pa-saying).
