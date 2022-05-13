import { sayHi, whoSaidHi, ONE_NEAR } from "../index";
import { context, storage, VM, VMContext } from "near-sdk-as";
import { LAST_SENDER_KEY } from "../model";

describe("contract", () => {
  it("should say Hi", () => {
    VMContext.setAttached_deposit(ONE_NEAR);
    sayHi();
    expect(VM.logs()).toIncludeEqual(context.sender + " says \"Hi!\"", "logs should be updated")
    expect(storage.get<string>(LAST_SENDER_KEY)).toBe(context.sender);
  });

  it("should return who said Hi!", () => {
    VMContext.setAttached_deposit(ONE_NEAR);
    sayHi();
    expect(whoSaidHi()).toBe(context.sender, "last who said high should be " + context.sender);
  });
});
