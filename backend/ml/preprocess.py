import cv2
import numpy as np

def preprocess_image(image_path):
    """
    Loads and preprocesses an image for skin type classification.
    - Reads image using OpenCV
    - Converts BGR to RGB
    - Resizes to 128x128
    - Normalizes pixel values to [0, 1]
    - Returns a NumPy array suitable for model input
    """
    try:
        img = cv2.imread(image_path)
        if img is None:
            raise ValueError("Image not found or unreadable.")

        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        img = cv2.resize(img, (128, 128))
        img = img.astype("float32") / 255.0
        img = np.expand_dims(img, axis=0)
        return img
    except Exception as e:
        raise RuntimeError(f"Error preprocessing image: {e}")