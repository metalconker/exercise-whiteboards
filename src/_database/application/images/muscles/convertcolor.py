import os
from PIL import Image

# Source folder containing PNG images 
source_folder = "./blue"

# Output folder
output_folder = "./blue_transparent"

# Create output folder if it does not exist
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# Iterate over each PNG image in the source_folder
for filename in os.listdir(source_folder):
    if filename.endswith('.png'):
        # Open image
        image = Image.open(os.path.join(source_folder, filename))

        # Get image size
        width, height = image.size

        # Iterate over each pixel
        for x in range(width):
            for y in range(height):
                # Get current pixel color values
                try:
                    pixel = image.getpixel((x, y))
                    r, g, b, a = pixel
                except:
                    continue

                # Replace all colors between 240,0,0 and 255,0,0 with pure blue
                if r >= 240 and r <= 255 and g <150 and b <150:
                    image.putpixel((x, y), (241, 70, 70))
                    continue
                    
                # Replace all colors between 240,0,0 and 255,0,0 with pure blue
                if r >= 120 and r <= 255 and g <150 and b <150:
                    image.putpixel((x, y), (r, g, g))
                    continue
                    
                # Replace all colors between 240,0,0 and 255,0,0 with pure blue
                if r >= 200 and g >= 200 and b >= 200:
                    image.putpixel((x, y), (0,0,0,0))
                    continue


        # Save new version of image
        image.save(os.path.join(output_folder, filename))
