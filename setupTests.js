import { expect, afterEachq} from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

global.jest = vi;

afterEach(() => {
    cleanup();
});