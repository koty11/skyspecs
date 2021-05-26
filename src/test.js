const { handler } = require("./index");
const { parseQuery } = require("./helper");

describe("basic tests", () => {
  test("handler function exists", () => {
    expect(typeof handler).toBe("function");
  });
});

describe("test query parser", () => {
  test("parser querystring works", () => {
    const queryString =
      "id[eq]=88eba653be2932c64b5486dbded90096";
    const queryStringResponse = parseQuery(queryString);
    expect(queryStringResponse).toMatchObject({
      id: expect.any(Object),      
    });
  });
});
