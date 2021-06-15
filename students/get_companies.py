import glob
import os.path

companies = []
for file in glob.glob("photos/*.jpeg"):
    companyName = file.split(
        "-")[1].replace(".jpeg", "").replace("_", " ").strip()
    companies.append(companyName)

companies = list(dict.fromkeys(companies))

for company in companies:
    fileExists = os.path.isfile("companies/"+company+".png")
    if(not fileExists):
        print(f"A logo for company: '{company}' doesn't exist!")
        break
else:
    print("All checks completed! Looks fine.")
