## Address

    POST /order

## Description
Submit your order and clean up shopping cart

## Example
**Request**

``` json
Content-Type: application/json
Authorization: Bearer __YOUR-AUTH-TOKEN
{
    "name": "sugih",
    "phonenumber": "0823288",
    "email": "mwkdwm@gmail.com",
    "address": "jalan melawar"
}
```

**Expected Response**

``` json
{
    "status": "success",
    "message": "Order submitted, ready for payment",
    "orderid": "5a37e534c5f39f1bb8e5ab21"
}
```

## Address

    GET /order

## Description
Show details of all your orders

## Example
**Request**

``` json
Content-Type: application/json
Authorization: Bearer __YOUR-AUTH-TOKEN
```

**Expected Response**

``` json
{
    "status": "success",
    "message": [
        {
            "_id": "5a37e534c5f39f1bb8e5ab21",
            "user": "5a37d0e0e80d281994821ee1",
            "name": "sugih",
            "phonenumber": "0823288",
            "email": "mwkdwm@gmail.com",
            "address": "melawar",
            "totalPrice": 671200,
            "coupon": {
                "_id": "5a37d0e0e80d281994821ede",
                "code": "XMASHOHO",
                "percentage_discount": 20,
                "quantity": 100,
                "start_valid": "2017-12-01T00:00:00.000Z",
                "end_valid": "2017-12-31T00:00:00.000Z",
                "__v": 0
            },
            "__v": 0,
            "items": [
                {
                    "products": {
                        "_id": "5a37d0e0e80d281994821edb",
                        "prod_id": "MS2M9D",
                        "name": "Hippo Power Bank 10000MAH Eve Simple",
                        "price": 419500,
                        "stock": 98,
                        "__v": 0
                    },
                    "quantity": 2,
                    "_id": "5a37e449c5f39f1bb8e5ab20"
                }
            ],
            "status": "Ready for payment",
            "order_date": "2017-12-18T15:46:47.132Z"
        }
    ]
}
```

## Address

    POST /order/:order_id

## Description
Customer can verify the payment of a particular order

## Example
**Request**

``` json
Content-Type: application/json
Authorization: Bearer __YOUR-AUTH-TOKEN
{
    "bank" : "BCA",
    "account_number" : "1231231",
    "name" : "sugih"
}
```

**Expected Response**

``` json
{
    "status": "success",
    "message": "Verification received"
}
```
