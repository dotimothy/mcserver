' Creating Shell
Set WshShell = WScript.CreateObject("WScript.Shell")
' Opening Program
WshShell.Run "C:\Users\SERVER-TD2020\Desktop\bedrock_server.exe.lnk", 9, TRUE
' Sleep Until 9:00
 WScript.Sleep 21600000
' Execute Stop in Minecraft
' WshShell.SendKeys "stop{ENTER}"
MsgBox("Shutting Down Server")
 WshShell.Run "C:\Users\SERVER-TD2020\Documents\GitHub\mcserver\autostart\shutdown.bat"
