import { ApplicationException } from "./ApplicationException";

export class UploadException extends ApplicationException {
  public constructor(message: string) {
    super("UploadException", 400, message);
  }
}
