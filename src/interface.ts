/**
 * Describe the current module
 */
namespace NpmTypescriptPackage {

    export const version = '0.0.1';

    export interface VersionGetter {
        (): string;
    }

    export interface Entrypoint {
        (): string;
    }

}
export {NpmTypescriptPackage};
