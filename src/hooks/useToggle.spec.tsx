/** @jest-environment jsdom */
import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import useToggle from "./useToggle";
import "@testing-library/jest-dom";

describe("useToogle Hook", () => {
  describe("when set initial value as false", () => {
    it("should be close by default", async () => {
      const { result } = renderHook(() => useToggle(false));
      expect(result.current.isOpen).toBeFalsy();
    });
    describe("when toggle is executed", () => {
      it("should be opened", async () => {
        const { result } = renderHook(() => useToggle(false));
        act(() => {
          result.current.toggle();
        });
        expect(result.current.isOpen).toBeTruthy();
      });
    });
  });
  describe("when set initial value as true", () => {
    it("should be open by difault", async () => {
      const { result } = renderHook(() => useToggle(true));
      expect(result.current.isOpen).toBeTruthy();
    });
    describe("when toggle is executed", () => {
      it("should be closed", async () => {
        const { result } = renderHook(() => useToggle(true));
        act(() => {
          result.current.toggle();
        });
        expect(result.current.isOpen).toBeFalsy();
      });
    });
  });
});
