- MEMO
  - デプロイするごとに認証情報は変わる

```bash
$ curl -s -X GET "https://arangodb-npwfbftieq-an.a.run.app/_db/_system/getting-started/hello-world" -H "accept: tex/plain" -H "Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcmVmZXJyZWRfdXNlcm5hbWUiOiJyb290IiwiaXNzIjoiYXJhbmdvZGIiLCJpYXQiOjE2NDgwNzUwODAsImV4cCI6MTY0ODA3ODY4MH0.-f97qcHP5S6U3ds_fmcsgl5dvo2a-FJx1IrX0JDUEwU" | awk 4
Hello World
```

with route param

```bash
$ curl -s -X GET "https://arangodb-npwfbftieq-an.a.run.app/_db/_system/getting-started/hello-world" -H "accept: tex/plain" -H "Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcmVmZXJyZWRfdXNlcm5
hbWUiOiJyb290IiwiaXNzIjoiYXJhbmdvZGIiLCJpYXQiOjE2NDgwNzUwODAsImV4cCI6MTY0ODA3ODY4MH0.-f97qcHP5S6U3ds_fmcsgl5dvo2a-FJx1IrX0JDUEwU" | awk 4
Hello World

$ curl -s -X GET "https://arangodb-npwfbftieq-an.a.run.app/_db/_system/getting-started/hello/Cowboy%20Bebop" -H "accept: text/plain" -H "Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcmVmZXJyZWRfdXNlcm5hbWUiOiJyb290IiwiaXNzIjoiYXJhbmdvZGIiLCJpYXQiOjE2NDgwNzUwODAsImV4cCI6MTY0ODA3ODY4MH0.-f97qcHP5S6U3ds_fmcsgl5dvo2a-FJx1IrX0JDUEwU" | awk 4
Hello Cowboy Bebop
```

Post Body

```bash
$ curl -s -X POST "https://arangodb-npwfbftieq-an.a.run.app/_db/_system/getting-started/entries" -H "accept: application/json" -H "Content-Type: application/json" -H "Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcmVmZXJyZWRfdXNlcm5hbWUiOiJyb290IiwiaXNzIjoiYXJhbmdvZGIiLCJpYXQiOjE2NDgwNzUwODAsImV4cCI6MTY0ODA3ODY4MH0.-f97qcHP5S6U3ds_fmcsgl5dvo2a-FJx1IrX0JDUEwU" -d "{ \"_key\": \"Cool1\", \"name\": \"Cowboy Bebop\"}" | jq
{
  "_key": "Cool1",
  "name": "Cowboy Bebop",
  "_id": "myFoxxCollection/Cool1",
  "_rev": "_d5iQaN2---"
}

$ curl -s -X POST "https://arangodb-npwfbftieq-an.a.run.app/_db/_system/getting-started/entries" -H "accept: application/json" -H "Content-Type: application/json" -H "Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcmVmZXJyZWRfdXNlcm5hbWUiOiJyb290IiwiaXNzIjoiYXJhbmdvZGIiLCJpYXQiOjE2NDgwNzUwODAsImV4cCI6MTY0ODA3ODY4MH0.-f97qcHP5S6U3ds_fmcsgl5dvo2a-FJx1IrX0JDUEwU" -d "{ \"_key\": \"Cool2\", \"name\": \"Cowboy Bebop\"}" | jq
{
  "_key": "Cool2",
  "name": "Cowboy Bebop",
  "_id": "myFoxxCollection/Cool2",
  "_rev": "_d5iQd7q---"
}

$ curl -s -X POST "https://arangodb-npwfbftieq-an.a.run.app/_db/_system/getting-started/entries" -H "accept: application/json" -H "Content-Type: application/json" -H "Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcmVmZXJyZWRfdXNlcm5hbWUiOiJyb290IiwiaXNzIjoiYXJhbmdvZGIiLCJpYXQiOjE2NDgwNzUwODAsImV4cCI6MTY0ODA3ODY4MH0.-f97qcHP5S6U3ds_fmcsgl5dvo2a-FJx1IrX0JDUEwU" -d "{ \"_key\": \"Cool3\", \"name\": \"Cowboy Bebop\"}" | jq
{
  "_key": "Cool3",
  "name": "Cowboy Bebop",
  "_id": "myFoxxCollection/Cool3",
  "_rev": "_d5iQhda---"
}
```

Retrieve Document Using AQL

```bash
$ curl -s -X GET "https://arangodb-npwfbftieq-an.a.run.app/_db/_system/getting-started/entries" -H "accept: application/json" -H "Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcmVmZXJyZWRfdXNlcm5hbWUiOiJyb290IiwiaXNzIjoiYXJhbmdvZGIiLCJpYXQiOjE2NDgwNzUwODAsImV4cCI6MTY0ODA3ODY4MH0.-f97qcHP5S6U3ds_fmcsgl5dvo2a-FJx1IrX0JDUEwU" | jq
[
  "Cool",
  "Cool1",
  "Cool2",
  "Cool3"
]
```