# HTTPS Web Server #
# Author: Timothy Do (ID: 30041150)
# 04/19/2022

#import socket module
from socket import *
import os

# create an IPv4 TCP socket
#Fill in start 
serverSocket = socket(AF_INET,SOCK_STREAM)     
#Fill in end

# Server Socket Variables %
serverIP  = "0.0.0.0" 
serverPort = 6789 

# Prepare a sever socket
#Fill in start  
serverSocket.bind((serverIP,serverPort))
#Fill in end

# Listen for connections from client 
#Fill in start     
serverSocket.listen(1)
#Fill in end

print("Started the Server on Port " + str(serverPort))
while True:
    # Establish the connection
    connectionSocket, addr = serverSocket.accept()
    query = "Connection from " + addr[0] + " (Port: " + str(addr[1]) + ")"
    log = open('./site.log','a')
    print(query)
    log.write(query + '\n')
    log.close()
    try:
        message = connectionSocket.recv(1024).decode()
        message_split = message.split()
        if len(message_split) <= 1:
            # Small connection from browser - ignore
            connectionSocket.close()
            continue
            
        filename = message_split[1]
        if(filename == "" or filename == "/"):
            f = open("./index.html","rb")
            outputdata = f.read()
        if(filename .lower()== "/logserver.py"):
            outputdata = b'Permission Denied.'
        elif(filename == "/getcwd"):
            outputdata = os.getcwd().encode()
        else:
            f = open(filename[1:], "rb")
            outputdata = f.read()
        
        # Send one HTTP header line into socket
        #Fill in start
        connectionSocket.send(b'HTTP/1.1 200 OK\r\n\r\n')
        #Fill in end
        
        # Send the content of the requested file to the client
        #Fill in start     
        connectionSocket.send(outputdata)
        #Fill in end
        
        # Close client socket
        #Fill in start
        connectionSocket.close()     
        #Fill in end        
    except IOError:
        print("File " + filename[1:] + " Not Found.")
        # Send response message for file not found
        connectionSocket.send(b'HTTP/1.1 404 Not Found\r\n\r\n')
        connectionSocket.send(b'<html><head></head><body><h1>404 Not Found</h1></body></html>')
        
        # Close client socket
        #Fill in start  
        connectionSocket.close()   
        #Fill in end
    except KeyboardInterrupt:
        # User pressed Ctrl+C, exit gracefully
        connectionSocket.close()
        break
        
# Close server connection
serverSocket.close()
