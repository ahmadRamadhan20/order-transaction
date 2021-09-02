## Address

    GET /track/:shipping_id

## Description
Tracking shipped order

## Example
**Request**

GET /track/5a37e8b0ab3a2c1b6cfbcc5e
``` json
Content-Type: application/json
Authorization: Bearer __YOUR-AUTH-TOKEN
```

**Expected Response**

``` json
{
    "status": "success",
    "message": {
        "_id": "5a37e8b0ab3a2c1b6cfbcc5e",
        "user": "5a37e71ec5f39f1bb8e5ab25",
        "order": "5a37e534c5f39f1bb8e5ab21",
        "name": "sugih",
        "address": "melawar",
        "__v": 0,
        "shipment_status": "In Bandung"
    }
}
```
