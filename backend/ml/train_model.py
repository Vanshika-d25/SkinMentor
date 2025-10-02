import os
import tensorflow as tf
from tensorflow.keras.preprocessing.image import ImageDataGenerator

# Disable OneDNN optimizations for consistent results
os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'

# ✅ Paths
base_dir = os.path.dirname(os.path.abspath(__file__))
train_dir = os.path.join(base_dir, "data", "train")
val_dir = os.path.join(base_dir, "data", "val")
model_path = os.path.join(base_dir, "models", "skin_type_model.h5")

# ✅ Data generators
train_datagen = ImageDataGenerator(
    rescale=1./255,
    rotation_range=15,
    zoom_range=0.2,
    horizontal_flip=True
)

val_datagen = ImageDataGenerator(rescale=1./255)

train_gen = train_datagen.flow_from_directory(
    train_dir,
    target_size=(128, 128),
    batch_size=32,
    class_mode='categorical'
)

val_gen = val_datagen.flow_from_directory(
    val_dir,
    target_size=(128, 128),
    batch_size=32,
    class_mode='categorical'
)

# ✅ CNN Model
model = tf.keras.Sequential([
    tf.keras.layers.Conv2D(32, (3, 3), activation='relu', input_shape=(128, 128, 3)),
    tf.keras.layers.MaxPooling2D(2, 2),
    tf.keras.layers.Conv2D(64, (3, 3), activation='relu'),
    tf.keras.layers.MaxPooling2D(2, 2),
    tf.keras.layers.Conv2D(128, (3, 3), activation='relu'),
    tf.keras.layers.MaxPooling2D(2, 2),
    tf.keras.layers.Flatten(),
    tf.keras.layers.Dense(128, activation='relu'),
    tf.keras.layers.Dense(train_gen.num_classes, activation='softmax')  # oily, dry, normal
])

model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])

# ✅ Train model
history = model.fit(train_gen, validation_data=val_gen, epochs=15)

# ✅ Save model
model.save(model_path)
print(f"✅ Model saved at {model_path}")