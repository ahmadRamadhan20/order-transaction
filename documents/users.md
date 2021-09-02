## Address

    POST /register

## Description
register a new account

## Example
**Request**

``` json
Content-Type: application/json
{
  "username": "hehe",
  "password": "asdbc",
  "role": "user"
}
```

**Expected Response**

``` json
{
    "status": "success",
    "message": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJBcGlBdXRoIiwic3ViIjoiNWEzN2RmMzY3NDgwMTkxNGE4ODJhYzI2IiwiaWF0IjoxNTEzNjExMDYyNDU5LCJleHAiOjE1MTM2OTc0NjI0NTl9.23z_nXfnIHzO_SsSd9VUHoJQWlt6Qe5QLoTqF27QJSI"
}
```

## Address

    POST /login

## Description
login

## Example
**Request**

``` json
Content-Type: application/json
{
  "username": "hehe",
  "password": "asdbc"
}
```

**Expected Response**

``` json
{
    "status": "success",
    "message": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJBcGlBdXRoIiwic3ViIjoiNWEzN2RmMzY3NDgwMTkxNGE4ODJhYzI2IiwiaWF0IjoxNTEzNjExMDYyNDU5LCJleHAiOjE1MTM2OTc0NjI0NTl9.23z_nXfnIHzO_SsSd9VUHoJQWlt6Qe5QLoTqF27QJSI"
}
```
