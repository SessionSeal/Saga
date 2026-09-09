---
title: 'Should I trust a "self-attested" signature?'
summary: "Self-attested means SessionSeal vouches for its own signing key rather than a public certificate authority doing so. It does not weaken the integrity or timestamp guarantees. It only affects whose word you are taking on the signer's identity."
group: "The signed record (C2PA)"
order: 6
updated: "September 2026"
---

A careful reviewer will notice the signing certificate is **self-attested** and not issued by a public certificate authority (CA). We would rather explain this plainly than have you discover it and wonder what is being hidden.

## What "self-attested" means

A digital signature has two separate jobs:

1. **Integrity and time:** proving the content has not changed since it was signed, and when it was signed.
2. **Identity:** proving *who* the signer is, vouched for by a trusted third party (a CA), the way a browser padlock vouches for a website.

Self-attested means SessionSeal generated and vouches for its own signing key, rather than paying a public CA to vouch for it. Job 1 is fully intact. Job 2 rests on SessionSeal's own attestation rather than a CA's.

## What it does not change

- The **tamper-evidence** is unaffected. If the sealed file were altered, verification would still fail. That guarantee comes from the cryptography, not from who issued the certificate.
- The **timestamp** is unaffected. The record still proves it was sealed before the dispute.
- The **hash commitments** to the master, stems, and session are unaffected. They still prove the parts belong to this one record.

## What it does change

The only thing riding on a CA would be an outside party formally certifying "this key belongs to SessionSeal." Today you are taking SessionSeal's attestation for that. In practice this rarely matters for a reviewer, because the thing you care about, that the evidence is intact and predates the dispute, does not depend on it. A CA-issued certificate is a planned upgrade; it will strengthen identity assurance without changing anything about the evidence you are weighing today.

## The bottom line

Self-attested is a statement about the *signer's identity assurance*, not about the *strength of the evidence*. The integrity, timing, and content bindings all hold regardless.

See [How do I check the C2PA credential myself?](/faq/how-to-check-c2pa) to verify all of this independently, and [What exactly is the C2PA credential telling me?](/faq/what-is-c2pa-saying) for what it asserts.
