# Work Description

- Design API ตามรูปแบบ OpenAPI

- ประเด็นสำคัญ:
  - ตั้งชื่อ URL ให้ชัดเจนและสอดคล้องกับแนวทาง REST
  - ระบุ response ของแต่ละ path อย่างชัดเจน
  - จัดการ exception และ error อย่างเป็นระบบ รวมทั้ง response code, message และโครงสร้าง

- แนวทางการจัดโครงสร้าง:
  - แยก endpoint ตาม resource
  - กำหนด schema สำหรับ request และ response
  - อธิบายผลลัพธ์ที่เป็นไปได้ของ API แต่ละกรณี
#
Example Open API
```
{
  "openapi": "3.0.0",
  "paths": {
    "/": {
      "get": {
        "operationId": "AppController_getHello",
        "parameters": [],
        "responses": {
          "200": {
            "description": ""
          }
        },
        "tags": [
          "App"
        ]
      }
    },
    "/pets": {
      "get": {
        "description": "Retrieve a list of all pets in the store. Optionally filter by status.",
        "operationId": "PetsController_findAll",
        "parameters": [
          {
            "name": "status",
            "required": false,
            "in": "query",
            "description": "Filter pets by availability status",
            "schema": {
              "enum": [
                "available",
                "pending",
                "sold"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Returns the list of pets.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Pet"
                  }
                }
              }
            }
          }
        },
        "summary": "Get all pets",
        "tags": [
          "pets"
        ]
      }
    }
  }
}
```