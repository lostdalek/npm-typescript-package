import * as NpmTypescriptPackage from '../src/index';

declare const jest, describe, it, expect;

describe('Typescript npm package Boilerplate', () => {
    it('should expose an entryPoint method', () => {
        expect(NpmTypescriptPackage.entryPoint).toBeInstanceOf(Function)
    });

    it('should return the actual version', () => {
        expect(NpmTypescriptPackage.getVersion()).toEqual('0.0.1')
    });
});
