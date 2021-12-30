cd ../Worlds
rmdir "TheDoCraft" /s /q
mkdir "TheDoCraft"
cd "TheDoCraft"
xcopy C:\Users\SERVER-TD2020\Desktop\"BobTD Minecraft Server"\"Bedrock 1.18.2.03 - TheDoCraft"\worlds\"TheDoCraft" /e
cd ../..
python commit.py
cd autostart
