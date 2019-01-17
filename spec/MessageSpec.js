// 'use strict';

describe("Message", () => {
  beforeEach( () => {
    message = new Message("test text", new Date);
  });

  it("should be able to hold text", () => {
    expect(message.message_content).toEqual("test text")
  });

});
