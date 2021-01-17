' Creating Shell
Set WshShell = WScript.CreateObject("WScript.Shell")
' Opening Program
WshShell.Run "C:\Users\SERVER-TD2020\Desktop\bedrock_server.exe.lnk", 9
' Sleep for 5 Seconds
' WScript.Sleep 5000
' Execute Stop in Minecraft
' WshShell.SendKeys "stop{ENTER}"