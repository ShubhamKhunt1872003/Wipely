# Wipely logo files

Brand colours: Green #0A8A5F · Dark navy #141A2E · Mint (on dark) #3FD39A
Font: Plus Jakarta Sans ExtraBold (800). The logo files are already outlined, so they don't need the font.

| File | Use it for |
|---|---|
| wipely-logo.svg / .png | Website header, invoices, quotes, flyers (on white/light backgrounds) |
| wipely-logo-white.svg / .png | Footer, dark backgrounds, photos, uniforms, car signage |
| wipely-logo-green.svg | One-colour printing (stickers, embroidery, stamps) |
| wipely-icon-green.svg (recommended), -mint, -navy | Round icon in three colourways (green = "w" only; mint and navy = "w.") |
| wipely-icon-*-square.svg | Rounded-square app tile version |
| wipely-icon-*-small.svg | No underline, for anything under 48px |
| wipely-profile-green-1080.png (+ mint, navy) | Facebook / Instagram / Google / WhatsApp profile picture |
| icon-512.png | Generic 512px icon (e.g. web app manifest) |
| favicon.ico, icon.svg, apple-icon.png | Browser tab icon (see below) |

## Next.js (App Router) setup

1. Copy `favicon.ico`, `icon.svg` and `apple-icon.png` into your `app/` folder, replacing the old ones. Next.js picks them up automatically.
2. Copy `wipely-logo.svg` and `wipely-logo-white.svg` into `public/`.
3. Replace the sparkles icon + "Wipely" text in the header with:

```tsx
import Image from "next/image";
import Link from "next/link";

<Link href="/" aria-label="Wipely home">
  <Image src="/wipely-logo.svg" alt="Wipely" width={132} height={52} priority />
</Link>
```

And in the footer (dark background):

```tsx
<Image src="/wipely-logo-white.svg" alt="Wipely" width={132} height={52} />
```

4. Remove the `Sparkles` import from `lucide-react` in your header/footer components.
5. Also update the Open Graph image (`public/images/og-image.jpg`) with the new logo so link previews match.

Tip: keep a clear space around the logo at least the height of the green dot, and don't put the dark logo on photos — use the white one.
