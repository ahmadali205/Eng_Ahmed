"""Generate the portfolio QR code (PNG + SVG) into public/qr/.

Usage:  python3 scripts/make_qr.py https://ahmadali205.github.io/Eng_Ahmed/
Needs:  pip install segno
Black modules on white, 4-module quiet zone, error correction Q (25%).
"""
import sys
from pathlib import Path

import segno

url = sys.argv[1] if len(sys.argv) > 1 else 'https://ahmadali205.github.io/Eng_Ahmed/'
out = Path(__file__).resolve().parent.parent / 'public' / 'qr'
out.mkdir(parents=True, exist_ok=True)

qr = segno.make(url, error='q', micro=False)
# ~2400 px wide PNG: prints sharp up to ~20 cm at 300 dpi
size = qr.symbol_size(border=4)[0]
scale = max(1, 2400 // size)
qr.save(out / 'portfolio-qr.png', scale=scale, border=4, dark='#000000', light='#ffffff')
qr.save(out / 'portfolio-qr.svg', scale=10, border=4, dark='#000000', light='#ffffff', xmldecl=False, svgclass=None, lineclass=None)
print(f'{url}\nversion {qr.version}, error {qr.error}, {size} modules incl. border, PNG {size * scale}px')
