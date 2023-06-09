import json

with open('ScheduleData.json', 'r') as f:
    data = json.load(f)

# Create a file to write variables to
with open("MetaIDs.txt", "w") as file: 
    #Loop through the data
    for key, val in data.items():
        for key2, val2 in val.items():
            # Get each variable name
            file.write("%s\n" % key2)
