cd ../Worlds
rmdir "Timothy's UCI Dorm" /s /q
mkdir "Timothy's UCI Dorm"
cd "Timothy's UCI Dorm"
xcopy C:\Users\SERVER-TD2020\Desktop\"BobTD Minecraft Server"\"Bedrock 1.16.220.02 - Timothy's UCI Dorm"\worlds\"Timothy's UCI Dorm" /e
cd ../..
git add * 
git commit -m "Backup Autoscript"
git push

