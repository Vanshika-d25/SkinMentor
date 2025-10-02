import os
import sys
import tensorflow as tf
import numpy as np
from tensorflow.keras.preprocessing import image
os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'

model = tf.keras.models.load_model(r"C:\Users\DELL\OneDrive\Desktop\SM\backend\ml\models\skin_type_model.h5") 
img_path = sys.argv[1]

img = image.load_img(img_path, target_size=(128, 128))
img_array = image.img_to_array(img)
img_array = np.expand_dims(img_array, axis=0) / 255.0

pred = model.predict(img_array)
class_names = ["oily", "dry", "normal"]
 
 
print(class_names[np.argmax(pred)])
sys.stdout.flush()
