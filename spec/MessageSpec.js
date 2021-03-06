'use strict';

describe("Message", () => {
var message;

  beforeEach( () => {
   message = new Message("test text", new Date);
  });

  it("should be able to hold text", () => {
    expect(message.message_content).toEqual("test text")
  });
  
  it("should have the date", () => {
    expect(message.date).toEqual(new Date)
    });
});
