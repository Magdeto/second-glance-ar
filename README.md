# Second Glance

> A marker-based WebAR experience. Point your phone at a sticker. See what lives inside.

**Status:** In development — webapp complete, animations pending  
**Built for:** IX Design Personal Project, expo presentation  
**Live URL:** https://second-glance-ar.vercel.app/

---

## Context

Built as the personal project for the IX (Immersive Experiences) design semester. The project explores how augmented reality can reveal hidden narratives in overlooked everyday objects, using the physicality of hand-drawn stickers as the trigger for a digital experience.

---

## What it is

Second Glance is a browser-based augmented reality experience built around hand-drawn stickers of everyday objects. When a visitor points their phone camera at a sticker, an animated scene plays on top of it - revealing the hidden world living inside the object.

No app download. No account. One URL, open in any mobile browser, scan, experience.

---

## How it works

The app uses [MindAR.js](https://hiukim.github.io/mind-ar-js-doc/) for image-target tracking. Each sticker illustration is compiled into a `.mind` marker file. When the camera detects a marker, a corresponding alpha video overlay plays anchored to the sticker. When the sticker leaves the frame, the video pauses and the state resets.

---

## Screens

| Screen | Description |
|---|---|
| Landing | Entry point. Single CTA button triggers camera permission. |
| Loading | Shown during MindAR initialisation (2–5s). Branded logo animation. |
| Active Scan | Fullscreen camera feed. Bounding box turns green on detection. |
| Error | Camera permission denied. Step-by-step recovery instructions. |

---

## Tech stack

| Layer | Tool |
|---|---|
| AR framework | MindAR.js 1.2.5 (browser-native, image-target tracking) |
| 3D renderer | THREE.js 0.150.1 (required by MindAR) |
| Language | Vanilla HTML, CSS, JavaScript - no frameworks, no build tools |
| Hosting | Vercel (free tier, automatic deploys on push) |
| Version control | GitHub |

---

## Project structure

```
/second-glance-ar
├── index.html              ← entire app
├── /targets
│   └── targets.mind        ← compiled MindAR image targets (both stickers)
├── /videos
│   ├── scene-1.mp4         ← alpha video overlay for sticker 1
│   └── scene-2.mp4         ← alpha video overlay for sticker 2
└── /assets
    ├── sticker-1.png       ← reference illustration (not used at runtime)
    └── sticker-2.png       ← reference illustration (not used at runtime)
```

---

## Development

No build step. No npm. No dependencies to install.

Open the project folder in any code editor. Install the **Live Server** extension and open `index.html` with it to get a local preview URL with auto-refresh on save.

For mobile testing, push to GitHub - Vercel auto-deploys a preview URL. Camera access requires HTTPS, so the Vercel preview URL is the correct environment for phone testing.


---

## Compiling image targets

Sticker illustrations are compiled into `.mind` marker files using the MindAR Image Target Compiler:  
[hiukim.github.io/mind-ar-js-doc/tools/compile](https://hiukim.github.io/mind-ar-js-doc/tools/compile)

Upload both sticker images at the same time. The upload order determines the target index:
- Sticker 1 → index 0
- Sticker 2 → index 1

Download the compiled file and save it as `targets/targets.mind`.

> **Note on tracking quality:** MindAR uses grayscale-based image recognition. Illustrations with high contrast, clear edges, and sufficient visual detail produce the most reliable tracking. Test under expo lighting conditions before the event.

---

## Swapping videos

When the After Effects animations are complete, export each scene as an alpha video (WebM with alpha channel or MP4 with transparency) and drop the files into the `/videos` folder:

- `videos/scene-1.mp4` — animation for sticker 1
- `videos/scene-2.mp4` — animation for sticker 2

No code changes needed. The file paths are already wired.

---


*Second Glance — SG · 001*
