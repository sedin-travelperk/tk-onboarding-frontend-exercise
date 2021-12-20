import {renderHook, act} from "@testing-library/react-hooks";
import useFlagState from "./useFlagState";

test('should set init state to false', () => {
    const {result} = renderHook(() => useFlagState());

    expect(result.current[0]).toBe(false);
})

test('should change state to true', () => {
    const {result} = renderHook(() => useFlagState());

    act(() => {
        result.current[1](true);
    })

    expect(result.current[0]).toBe(true);
})