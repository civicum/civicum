"""
Genera iconos PWA para CIVICUM.
Tamaños: 72, 96, 128, 144, 192, 512 px.
Diseño: círculo Terracota #C2503A con letra "C" blanca centrada.
"""
from PIL import Image, ImageDraw, ImageFont
import os

OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "webapp", "public", "icons")
os.makedirs(OUT_DIR, exist_ok=True)

TERRACOTA = (194, 80, 58, 255)    # #C2503A
BLANCO = (250, 250, 248, 255)     # #FAFAF8

SIZES = [72, 96, 128, 144, 192, 512]

for size in SIZES:
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # Círculo terracota lleno (maskable-safe: sin bordes)
    draw.ellipse([0, 0, size, size], fill=TERRACOTA)

    # Letra C centrada
    font_size = int(size * 0.55)
    font = None
    for candidate in ["arialbd.ttf", "DejaVuSans-Bold.ttf", "segoeuib.ttf"]:
        try:
            font = ImageFont.truetype(candidate, font_size)
            break
        except (OSError, IOError):
            continue
    if font is None:
        font = ImageFont.load_default()

    text = "C"
    bbox = draw.textbbox((0, 0), text, font=font)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    x = (size - tw) // 2 - bbox[0]
    y = (size - th) // 2 - bbox[1]
    draw.text((x, y), text, fill=BLANCO, font=font)

    path = os.path.join(OUT_DIR, f"icon-{size}x{size}.png")
    img.save(path, "PNG", optimize=True)
    print(f"OK icon-{size}x{size}.png ({os.path.getsize(path)} bytes)")

print("Listo - 6 iconos generados")
