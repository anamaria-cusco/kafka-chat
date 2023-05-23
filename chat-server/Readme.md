


## Before Running the Project 

*Start Zookeeper*
```shell script
.\bin\windows\zookeeper-server-start.bat .\config\zookeeper.properties
```

*Start Kafka*
```shell script
.\bin\windows\kafka-server-start.bat .\config\server.properties
```

*Create a Topic*
```
.\bin\windows\kafka-topics.bat --create --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1 --topic kafka-chat-2
```

*Consume the topic (to test)*
```shell script

kafka-console-consumer --bootstrap-server localhost:9092 --topic kafka-chat-2
```
