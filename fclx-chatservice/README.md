### Golang init
```bash
go mod init github.com/gracyaneoliveira/fclx/chatservice
```
### Migrate
```bash
curl -s https://packagecloud.io/install/repositories/golang-migrate/migrate/script.deb.sh | sudo bash
sudo apt-get update
sudo apt-get install migrate
	
migrate create -ext=mysql -dir=sql/migrations -seq init
```
### sqlc install
```bash
# 1 - Create file wsl.conf
sudo vim /etc/wsl.conf
# 2 - Paste file wsl.conf
[boot]
systemd=true
# 3 - Shutdown
wsl - shutdown
# 4 Install
sudo snap install sqlc
```
### Generate sqlc
```bash
sqlc generate
```
### Docker-compose
```bash	
docker-compose up -d
```
### Execute migrations to mysql
```bash	
make migrate
# see tables into container
docker-compose exec mysql bash
mysql -u root -p chat_test;
show tables;
```
### Protobuf
```bash
sudo apt install -y protobuf-compiler
```
### Execute main.go
```bash	
docker-compose exec chatservice bash
go run cmd/chatservice/main.go
```bash	
