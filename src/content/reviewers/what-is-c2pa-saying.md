---
title: "What exactly is the C2PA credential telling me, and what is it not?"
summary: "It tells you the file carries a signed, tamper-evident record: who sealed it, when, and that it has not changed since. It does not, by itself, say the music is human-made. That is what the rest of the report is for."
group: "The signed record (C2PA)"
order: 4
updated: "September 2026"
---

When the report says "View the signed record," it is linking to a **C2PA Content Credential**. C2PA is an open industry standard (backed by Adobe, Microsoft, camera manufacturers, and others) for attaching a signed, tamper-evident history to a media file.

## What the credential does tell you

- **Who sealed it.** The record is cryptographically signed by SessionSeal on the musician's behalf.
- **When.** It carries a timestamp for when the record was sealed. On a SessionSeal record this happens before any dispute, so the evidence cannot have been assembled after the fact to win an argument.
- **That it has not changed.** The credential is bound to the content. If the sealed file were altered afterward, the credential would no longer verify. Intact verification means what you are looking at is what was sealed.
- **What it commits to.** The credential includes fingerprints and hashes of the master, stems, and session, so the parts of the report are provably tied to this one record.

## What the credential does not tell you

- **It does not say a human wrote the music.** A credential can just as correctly be attached to an AI-generated file (in fact, AI tools like Suno and Udio attach C2PA credentials that say "AI-generated"). The credential attests to *origin and integrity*, not to *human authorship*.
- **It is not, by itself, the argument.** The credential proves the record is authentic and unaltered. The *evidence that it is real studio work* is the stems, the session, and the checks on the report page. C2PA is what makes that evidence trustworthy and tamper-proof, not a substitute for it.

## The short version

Think of the C2PA credential as a tamper-evident seal on an envelope. It proves the envelope was sealed by SessionSeal at a certain time and has not been opened since. What is *inside* the envelope, the evidence of studio work, is what you actually weigh.

To check the credential yourself, see [How do I check the C2PA credential in a SessionSeal file myself?](/faq/how-to-check-c2pa). To understand the "self-attested" wording, see [The signature says "self-attested" — should I trust it?](/faq/self-attested-signature).
