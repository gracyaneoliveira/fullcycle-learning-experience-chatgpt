# Full Cycle Leaning Experience 

## NextJS server/client

### Create project
```bash
npx create-next-app --typescript
```
### Run
```bash
npm run dev
```
### Prisma
```bash
npm install @prisma/client
npx prisma init
npx prisma migrate dev
npx prisma generate
```
### Type proto
```bash
npm install @grpc/grpc-js @grpc/proto-loader
# include in package.json
proto-loader-gen-types --longs=String --enums=String --defaults --oneofs --grpcLib=@grpc/grpc-js --outDir=./src/grpc/rpc ./proto/*.proto
```
### Docker stop all containers
```bash
docker stop $(docker ps -a -q)
```
### Owner docker
```bash
sudo chown -R $(whoami) ~/.docker
```
### SWR
```bash
npm install swr
```
### Marked and highlight
```bash
npm install marked highlight.js
npm i --save-dev @types/marked
```
### NextAuth
```bash
npm install next-auth
```
### Keycloak
```bash
http://localhost:3000/api/auth/signin
```
