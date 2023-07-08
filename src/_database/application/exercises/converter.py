# Python Script: 

# Open the Original ConstantsCustom file
file = open("ConstantsCustomExtracted.tsx", "r")
# Read the Original ConstantsCustom file
data = file.read()
# Split the data into an array of lines
lines = data.split("\n")
# Create an empty array to store the updated data
res = []
# Loop over each line of the original file
for line in lines:
  # If the line is a custom constant
  if ": {" in line:
    # Split the line into words
    words = line.split()
    # Store the constant name
    constName = words[0]
    # Create a new line with the name declared as a constant
    newLine = "const " + constName + " = "
    # Add the new line to the result array
    res.append(newLine)
  # Otherwise,
  else:
    # Add the original line to the result array
    res.append(line)
# Create the new file
file2 = open("ConstantsCustomConverted.tsx", "w")
# Write the result data to the new file
file2.write("\n".join(res))
# Close the files
file.close()
file2.close()





# Python Script: 

# Open the Original ConstantsCustom file
file = open("ConstantsExrxExtracted.tsx", "r")
# Read the Original ConstantsCustom file
data = file.read()
# Split the data into an array of lines
lines = data.split("\n")
# Create an empty array to store the updated data
res = []
# Loop over each line of the original file
for line in lines:
  # If the line is a custom constant
  if ": {" in line:
    # Split the line into words
    words = line.split()
    # Store the constant name
    constName = words[0]
    # Create a new line with the name declared as a constant
    newLine = "const " + constName + " = "
    # Add the new line to the result array
    res.append(newLine)
  # Otherwise,
  else:
    # Add the original line to the result array
    res.append(line)
# Create the new file
file2 = open("ConstantsExrxConverted.tsx", "w")
# Write the result data to the new file
file2.write("\n".join(res))
# Close the files
file.close()
file2.close()