# Documentation

- npm install
- npm run dev (running on localhost:8080) (using FakeApiGatewayLambda to simulate a Lambda Cloud function)
- base api versioning : `api/v1.0`
- main resource: `gists`
- Search by id:
- GET http://localhost:8080/api/v1.0/gist?id[eq]=88eba653be2932c64b5486dbded90096

```curl
curl -i -X GET \
   -H "Content-Type:application/json" \
 'http://localhost:8080/api/v1.0/gist?id%5Beq%5D=88eba653be2932c64b5486dbded90096'
```

- Search by username:
- GET http://localhost:8080/api/v1.0/gist?username[eq]=afogliatti

```curl
curl -i -X GET \
   -H "Content-Type:application/json" \
 'http://localhost:8080/api/v1.0/gist?username%5Beq%5D=afogliatti'
```

- Add, Delete, Get Favorite Gists:

 ```diff 
 - This method should be POST, due a limitation of FakeApiGatewayLambda implemeted as GET
 GET http://localhost:8080/api/v1.0/gist?favorite[add]=88eba653be2932c64b5486dbded90096
 ```


 ```diff 
 - This method should be DELETE, due a limitation of FakeApiGatewayLambda implemeted as GET
 GET http://localhost:8080/api/v1.0/gist?favorite[delete]=88eba653be2932c64b5486dbded90096
 ```


- `GET http://localhost:8080/api/v1.0/gist?favorite[get]=all`

```curl
curl -i -X GET \
   -H "Content-Type:application/json" \
 'http://localhost:8080/api/v1.0/gist?favorite%5Bget%5D=all'
```


## Package Scripts

| command              | description                  |
| :------------------- | :--------------------------- |
| `npm run dev`        | execute server               |
| `npm run test`       | execute tests with "jest"    |
