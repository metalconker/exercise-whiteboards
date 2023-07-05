import * as ExerciseModel from "../model/ExerciseModel";
import { checkGetter, checkSetter } from "../Helpers";

export default class Exercise {
  private _comments: string;
  private _execution: string;
  private _mediaType: string;
  private _metaID: string;
  private _preparation: string;
  private _uri: string;

  constructor(metaID: string) {
    this.metaID = metaID;
    this.comments = ExerciseModel.getComments(metaID);
    this.execution = ExerciseModel.getExecution(metaID);
    this.mediaType = ExerciseModel.getMediaType(metaID);
    this.preparation = ExerciseModel.getPreparation(metaID);
    this.uri = ExerciseModel.getMedia(metaID);
  }

  public get comments(): string {
    return checkGetter(this._comments, "Comments");
  }
  private set comments(value: string) {
    this._comments = checkSetter(value, "Comments");
  }

  public get execution(): string {
    return checkGetter(this._execution, "Execution");
  }
  private set execution(value: string) {
    this._execution = checkSetter(value, "Execution");
  }

  public get mediaType(): string {
    return checkGetter(this._mediaType, "MediaType");
  }
  private set mediaType(value: string) {
    this._mediaType = checkSetter(value, "MediaType");
  }

  public get metaID(): string {
    return checkGetter(this._metaID, "MetaID");
  }
  private set metaID(value: string) {
    this._metaID = checkSetter(value, "MetaID");
  }

  public get preparation(): string {
    return checkGetter(this._preparation, "Preparation");
  }
  private set preparation(value: string) {
    this._preparation = checkSetter(value, "Preparation");
  }

  public get uri(): string {
    return checkGetter(this._uri, "Uri");
  }
  private set uri(value: string) {
    this._uri = checkSetter(value, "Uri");
  }
}
