import { ReadStream } from "fs";

/**
 * Options used when uploading a file
 *
 * @see {@link https://docs.imagekit.io/api-reference/upload-file-api/server-side-file-upload#request-structure-multipart-form-data}
 */
export interface UploadOptions {
  /**
   * This field accepts three kinds of values:
   * - binary - You can send the content of the file as binary. This is used when a file is being uploaded from the browser.
   * - base64 - Base64 encoded string of file content.
   * - url - URL of the file from where to download the content before uploading.
   *      Downloading file from URL might take longer, so it is recommended that you pass the binary or base64 content of the file.
   *      Pass the full URL, for example - https://www.example.com/rest-of-the-image-path.jpg.
   */
  file: string | Buffer | ReadStream;
  /**
   * The name with which the file has to be uploaded.
   * The file name can contain:
   * - Alphanumeric Characters: a-z , A-Z , 0-9
   * - Special Characters: . _ and -
   * Any other character including space will be replaced by _
   */
  fileName: string;
  /**
   * Whether to use a unique filename for this file or not.
   * - Accepts true or false.
   * - If set true, ImageKit.io will add a unique suffix to the filename parameter to get a unique filename.
   * - If set false, then the image is uploaded with the provided filename parameter and any existing file with the same name is replaced.
   * Default value - true
   */
  useUniqueFileName?: boolean;
  /**
   * Set the tags while uploading the file.
   * - Comma-separated value of tags in format tag1,tag2,tag3. For example - t-shirt,round-neck,men
   * - The maximum length of all characters should not exceed 500.
   * - % is not allowed.
   * - If this field is not specified and the file is overwritten then the tags will be removed.
   */
  tags?: string | string[];
  /**
   * The folder path (e.g. /images/folder/) in which the image has to be uploaded. If the folder(s) didn't exist before, a new folder(s) is created.
   * The folder name can contain:
   * - Alphanumeric Characters: a-z , A-Z , 0-9
   * - Special Characters: / _ and -
   * - Using multiple / creates a nested folder.
   * Default value - /
   */
  folder?: string;
  /**
   * Whether to mark the file as private or not. This is only relevant for image type files.
   * - Accepts true or false.
   * - If set true, the file is marked as private which restricts access to the original image URL and unnamed image transformations without signed URLs.
   *      Without the signed URL, only named transformations work on private images
   * Default value - false
   */
  isPrivateFile?: boolean;
  /**
   * Define an important area in the image. This is only relevant for image type files.
   * To be passed as a string with the x and y coordinates of the top-left corner, and width and height of the area of interest in format x,y,width,height. For example - 10,10,100,100
   * Can be used with fo-customtransformation.
   * If this field is not specified and the file is overwritten, then customCoordinates will be removed.
   */
  customCoordinates?: string;
  /**
   * Comma-separated values of the fields that you want ImageKit.io to return in response.
   *
   * For example, set the value of this field to tags,customCoordinates,isPrivateFile,metadata to get value of tags, customCoordinates, isPrivateFile , and metadata in the response.
   */
  responseFields?: string | string[];
  /* 
   * Object with array of extensions to be processed on the image.
   */
  extensions?: object[];
  /*
   * Final status of pending extensions will be sent to this URL. 
   */
  webhookUrl?: string;
  overwriteFile?: boolean;
  overwriteAITags?: boolean;
  overwriteTags?: boolean;
  overwriteCustomMetadata?: boolean;
  customMetadata?: {
    [key: string]: string | number | boolean | Array<string | number | boolean>;
  }
}
