import {entryPoint} from '../src/index';
import * as NpmTypescriptPackage from '../src/index';
declare const jest, describe, it, expect;

describe('Typescript npm package Boilerplate', () => {
    it('should expose an entryPoint method', () => {
        expect(NpmTypescriptPackage.entryPoint).toBeInstanceOf(Function)
    });
});
