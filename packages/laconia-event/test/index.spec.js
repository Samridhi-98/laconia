const event = require("../src/index");

describe("@laconia/event", () => {
  const inputConverterFactories = [
    "s3Event",
    "s3Stream",
    "kinesisJson",
    "snsJson",
    "sqsJson"
  ];

  inputConverterFactories.forEach(factoryName => {
    describe(`#${factoryName}`, () => {
      it(`has ${factoryName} function`, () => {
        expect(event[factoryName]).toBeFunction();
      });

      it("returns an instance of inputConverter", () => {
        const instances = event[factoryName]()({});
        expect(instances).toHaveProperty("$inputConverter");
      });
    });
  });

  it("has s3Json event handler", () => {
    expect(event.s3Json).toBeFunction();
  });
});
