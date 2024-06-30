
export namespace S3 {

  export function url() {
    let bucket_url = process.env.REACT_APP_S3_BUCKET_URL;
    if (bucket_url === undefined) {
      throw new Error("Bucket url undefined");
    }
    return bucket_url + "images/";
  }
}

// export default S3;
