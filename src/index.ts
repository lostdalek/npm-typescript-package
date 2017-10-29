import {NpmTypescriptPackage} from './interface';
import Entrypoint = NpmTypescriptPackage.Entrypoint;
import VersionGetter = NpmTypescriptPackage.VersionGetter;

export const entryPoint: Entrypoint = function () {
    return '';
};

export const getVersion: VersionGetter = function () {
    return NpmTypescriptPackage.version;
}
export * from './interface';
