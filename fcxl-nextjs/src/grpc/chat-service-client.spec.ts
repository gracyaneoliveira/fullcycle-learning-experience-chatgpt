import { ChatServiceClientFactory } from "./chat-service-client";

describe("ChatServiceClient", () => {

  jest.setTimeout(30000);
  test("grpc client", (done) => {
    const chatService = ChatServiceClientFactory.create();
    const stream = chatService.chatStream({
      chat_id: null,
      user_id: "1",
      message: "Hello World",
    });
    stream.on('end', () => {
        done();
    })
  });
});
