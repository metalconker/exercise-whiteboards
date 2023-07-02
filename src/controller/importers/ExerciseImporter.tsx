import { checkGetter, checkSetter } from "../../Helpers";
import * as ExerciseModel from "../../model/ExerciseModel";

export class ExerciseImporter {
  constructor(metaID: string) {
    this.comments = ExerciseModel.GetComments(metaID);
    this.preparation = ExerciseModel.GetPreparation(metaID);
    this.execution = ExerciseModel.GetExecution(metaID);
    this.uri = ExerciseModel.GetMedia(metaID);
    this.mediaType = ExerciseModel.GetMediaType(metaID);
  }

  private _metaID: string;
  public get metaID(): string {
    return checkGetter(this._metaID, "MetaID");
  }
  public set metaID(value: string) {
    this._metaID = checkSetter(value, "MetaID");
  }
  private _preparation: string;
  public get preparation(): string {
    return checkGetter(this._preparation, "Preparation");
  }
  public set preparation(value: string) {
    this._preparation = checkSetter(value, "Preparation");
  }
  private _execution: string;
  public get execution(): string {
    return checkGetter(this._execution, "Execution");
  }
  public set execution(value: string) {
    this._execution = checkSetter(value, "Execution");
  }
  private _comments: string;
  public get comments(): string {
    return checkGetter(this._comments, "Comments");
  }
  public set comments(value: string) {
    this._comments = checkSetter(value, "Comments");
  }
  private _uri: string;
  public get uri(): string {
    return checkGetter(this._uri, "Uri");
  }
  public set uri(value: string) {
    this._uri = checkSetter(value, "Uri");
  }
  private _mediaType: string;
  public get mediaType(): string {
    return checkGetter(this._mediaType, "MediaType");
  }
  public set mediaType(value: string) {
    this._mediaType = checkSetter(value, "MediaType");
  }
}
