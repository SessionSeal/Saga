---
title: "How does SessionSeal score this, and can the score be gamed or faked?"
summary: "A set of weighted checks, each of which either matches, contradicts, or cannot be evaluated. Absence never counts against a record. Faking a high score means forging a whole consistent studio project, which is harder than just making the music."
group: "The evidence"
order: 9
updated: "September 2026"
---

The collapsible "How this was determined" section on the report shows every check and its result. This explains how those combine into the verdict, and how resistant the whole thing is to gaming.

## How the score is built

SessionSeal runs a set of **weighted checks** grouped roughly as:

- **A-checks:** do the parts fit together? Do the stems rebuild the master; do the session's recordings appear in the stems and the master.
- **B-checks:** are there signs of a real process? Leftover material beyond the release, edit-history backups, recordings spanning multiple days.
- **C-checks:** is the project internally consistent? Sample rate, project length versus the track, referenced files actually present.

Each check returns one of three results:

- **Match:** the signal is present and consistent. This adds weight.
- **Contradiction:** the parts actively disagree with each other. This lowers the verdict.
- **Not evaluable:** the check could not be run (for example, an all-MIDI project has no recorded takes to date). This is neutral.

## Absence is never held against a record

This is a deliberate design choice. Legitimate projects are missing signals all the time: an instrumental has no vocal stems, a MIDI-only track has no recording dates. Penalizing those would punish real work. So a missing signal **abstains**; only an actual contradiction pulls the verdict down. The verdict band you see (strong, moderate, limited, or inconsistent) follows the balance of matches and contradictions honestly, and it is not always "strong."

## Can it be gamed?

To manufacture a convincing high score, someone would have to fabricate a **complete, mutually consistent studio project** around an AI track: stems that both sound isolated and mix back to the master, a session whose recordings appear in those stems, edit-history backups, and recording dates spread across days, all agreeing with each other and all sealed before the dispute. Any inconsistency shows up as a contradiction rather than a match.

At that point, the faker has done more work than simply recording the song for real. The system is built so that the cheapest way to pass is to actually be genuine.

## Where to double-check

The strongest single check is one you can do yourself: listen to the stems. See [What are stems, and why does hearing them isolated matter?](/faq/what-are-stems) and [What does the "stems rebuild the master" percentage mean?](/faq/what-the-percentage-means).
