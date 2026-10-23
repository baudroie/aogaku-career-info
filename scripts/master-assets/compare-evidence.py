"""Reproduce the unfiltered, whole-page screenshot metric (Pillow + NumPy)."""
from pathlib import Path
from PIL import Image
import numpy as np
root = Path(__file__).resolve().parents[2]
image = Image.open(root / 'review/aligned-native-comparison.png').convert('RGB')
reference = np.asarray(image.crop((0, 28, 819, 1948)), dtype=float)
actual = np.asarray(image.crop((832, 28, 1651, 1948)), dtype=float)
print(f'Normalized RGB similarity: {100 * (1 - np.abs(reference - actual).mean() / 255):.14f}%')
