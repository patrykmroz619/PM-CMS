import { PausableTimeout } from "../PausableTimeout";

describe("Pausable timeout", () => {
  test("calls function after passed time", () => {
    jest.useFakeTimers();

    const mock = jest.fn();
    const timeout = new PausableTimeout(mock, 1000);

    expect(setTimeout).not.toHaveBeenCalled();

    timeout.start();

    expect(setTimeout).toHaveBeenCalledWith(mock, 1000);
  });

  test("pauses timeout", () => {
    const mock = jest.fn();
    const timeout = new PausableTimeout(mock, 500);

    timeout.start();

    timeout.pause();

    setTimeout(() => {
      expect(mock).not.toHaveBeenCalled();
    }, 600);
  });

  test("resumes paused timeout", () => {
    const mock = jest.fn();
    const timeout = new PausableTimeout(mock, 500);

    timeout.pause();
    timeout.resume();

    setTimeout(() => {
      expect(mock).toHaveBeenCalled();
    }, 600);
  });
});
