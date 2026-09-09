---
title: 'What does the "stems rebuild the master" percentage mean?'
summary: "It is how closely the separate stems, mixed back together, reproduce the released track. A high value means the finished song is genuinely built from those layers, which an AI export cannot claim."
group: "The evidence"
order: 8
updated: "September 2026"
---

The report may show a figure such as "stems rebuild the master 92.5%." Here is what that number is measuring and how to read it.

## What is being measured

SessionSeal takes the individual stems, mixes them back down, and compares the result against the released master. The percentage reflects **how well the recombined stems reproduce the finished track**. It is a similarity measure, not a pass or fail.

## Why it is meaningful

For the stems to rebuild the master, they have to genuinely *be* the components of that master. This is hard to fake: you cannot take an AI-generated finished file and produce separate stems that both sound like isolated instruments and mix back into the original. If the stems reconstruct the master, the track really was assembled from those layers, which is what studio production is.

## How to read the value

- **High (roughly 0.85 and above):** the stems cleanly reconstruct the master. Strong confirmation of real multi-track production.
- **Moderate:** the stems clearly relate to the master but the match is not exact. This is common and legitimate. Masters are often processed after mixing (extra mastering compression, limiting, format conversion), which changes the sound enough to lower a pure similarity score without meaning anything is wrong.
- **Low or not evaluable:** the stems could not be confirmed to rebuild the master, or there were no stems to test. This does not automatically mean the track is AI. It means this particular check could not add weight, and you should lean on the other evidence.

## Important: a lower number is not a red flag by itself

A moderate score is not evidence *against* the track. Legitimate mastering routinely lowers it. The report never penalizes a record for a check that could not be evaluated; it only lowers the verdict for actual contradictions. See [How does SessionSeal score this, and can the score be gamed?](/faq/how-scoring-works).

The most convincing check of all is your own ears. See [What are stems, and why does hearing them isolated matter?](/faq/what-are-stems).
