from pathlib import Path
contents = Path(r"C:\Users\apurv\Downloads\data.json").read_text()
print(contents)
mydata = ""
# for i in range(contents.len()):
#     if(contents[i]=="}" && contents[i+1]=="{"):
#         mydata[i]=contents[i]
