import glob
import json
import os

# Initialize an empty dictionary to hold the combined data
combined_data = {}

# Get a list of all JSON files in the directory
file_list = glob.glob('G:\\Github\\Trees\\OTA\\builds\\*.json')

# Iterate over the list of files
for file in file_list:
    # Open the input file
    with open(file, 'r') as f:
        # Load the JSON data from the file
        data = json.load(f)

    # Create a new dictionary with only the specified objects
    filtered_data = {
        'url': data['url'],
        'pexv': data['pexv'],
        'tg_username': data['tg_username'],
        'device_name': data['device_name'],
        'device': data['device']
    }

    # Get the base filename of the input file
    base_filename = os.path.splitext(os.path.basename(file))[0]

    # Add the filtered data from the input file to the combined dictionary
    combined_data[base_filename] = filtered_data

# Open the output file
with open('combined.json', 'w') as f:
    # Write the combined data to the output file
    json.dump(combined_data, f, indent=2)
