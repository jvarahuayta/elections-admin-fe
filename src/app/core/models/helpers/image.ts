import { Base } from "../base/base.model";

export class Image extends Base<Image>{
    
    file: any; //Generally Blob
    fileUrl: string; //Base64 or URL

}