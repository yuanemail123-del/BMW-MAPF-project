# Original-Maze Multi-Agent Safety Demo — Feasible Subsets

Interactive single-file static HTML site. Open `index.html` directly or deploy on GitHub Pages.

## What changed from V6

- Restores the **44 × 28 original seeded maze**, routes and four moving-obstacle patrols from V6.
- Both panels display exactly the same retained agents, starts, goals and geometric shortest paths, starting inside the maze at step 0.
- The original pool of 12, 20, 32 or 48 candidate agents is generated exactly as before. A deterministic selection process greedily retains original agents only when the **original wait-only, fixed-route policy** can finish the whole subset without modeled collisions within 170 steps.
- Excluded agents are reported in the fleet count, rather than misleadingly presented as running.
- Every displayed agent reaches its goal in both the blind and coordinated simulation for the provided tested configurations. Collisions may still appear in blind mode; coordinated mode checks cell sharing and swaps.
- **No new simplified maze or artificial traffic-loop paths were introduced.**

This is not a general solution to deadlock in multi-agent path finding; the subset is curated for communication, not optimized for maximum fleet size. The moving obstacles are coordinated and can yield in safe mode.

## Publish with GitHub Pages

1. Create a public repository at https://github.com/new, for example `maze-safety-demo`.
2. Upload the **contents** of this folder to the repository root: `index.html`, `README.md`, `.nojekyll`, and `tests/`.
3. Under **Settings → Pages**, choose **Deploy from a branch**, branch **main**, folder **/(root)** and save.
4. Once published, navigate to `https://YOUR_USERNAME.github.io/maze-safety-demo/`.

The website uses no network dependencies or external files. Do not publish confidential company layouts or datasets without permission.

## Validation

With Node.js installed, run `node tests/validate.js`. The test checks retained agents, start conditions, unchanged routes, completion and conflict counts on the three seeds and four candidate-pool sizes.
