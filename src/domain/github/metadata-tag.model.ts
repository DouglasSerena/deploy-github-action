import { VERSION_NAME } from '../version-name.enum';
import { IVersionModel } from '../version.model';

export interface IMetadataTagModel {
  name: VERSION_NAME;
  version: IVersionModel;
  number: number;
}
