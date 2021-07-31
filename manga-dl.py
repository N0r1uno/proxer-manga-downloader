#!/usr/bin/python
from reportlab.pdfgen import canvas
import sys
import requests
import os
import shutil

lines = []
with open(str(sys.argv[1])) as f:
    lines = f.read().splitlines()

folder=str(sys.argv[1]).replace(".txt","")
os.mkdir(folder+"/")
pdf = canvas.Canvas(folder+"/"+folder+".pdf", pageCompression=1)
pdf.setTitle(folder)

for line in lines:
    url = line.split("#")
    print("Downloading "+url[2]+"...")
    raw = requests.get(url[2]).content
    path = url[2].split("/")
    path = folder+"/"+path[len(path)-1]
    with open(path, "wb") as f:
        f.write(raw)
    pdf.setPageSize((url[0], url[1]))
    pdf.drawImage(path, 0, 0)
    pdf.showPage()

pdf.save()
shutil.move(str(sys.argv[1]), folder+"/")