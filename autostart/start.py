import datetime
import os 

date = datetime.datetime.now()
year = date.year
month = date.month
day = date.day
file = str(month) + "-" + str(day) + "-" + str(year) + ".txt"
os.system("C:\\Users\\SERVER-TD2020\\Desktop\\\"BobTD Minecraft Server\"\\\"Bedrock 1.18.12.01 - Timothy's UCI Dorm\"\\bedrock_server.exe >> ..\\logs\\" + file)