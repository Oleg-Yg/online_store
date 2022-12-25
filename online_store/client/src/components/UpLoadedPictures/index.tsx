import React, { ChangeEvent, useEffect, useState } from "react";
import s from "./styles.module.scss";
import { MdAddPhotoAlternate as Add, MdDelete as Delete } from "react-icons/md";
import { UpLoadedPicturesProps } from "./types";

const UpLoadedPictures: React.FC<UpLoadedPicturesProps> = ({
  getUploadedImages,
  limit,
}) => {
  const [upLoadedPictures, setUpLoadedPictures] = useState<string[]>([]);
  const [pictures, setPictures] = useState<File[]>([]);

  useEffect(() => {
    getUploadedImages(pictures);
  }, [upLoadedPictures]);

  const download = (event: any) => {
    if (upLoadedPictures.length === limit) return;
    // event.preventDefault();
    setPictures([...pictures, ...event.target.files]);
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUpLoadedPictures([...upLoadedPictures, reader.result as string]);
    };
    reader.readAsDataURL(file);
  };

  const remove = (picture: string) => {
    setUpLoadedPictures(upLoadedPictures.filter((img) => img !== picture));
  };

  return (
    <div className={s.wrapperPictures}>
      {upLoadedPictures.map((picture, index) => (
        <div className={s.wrapperPicture} key={index}>
          <label
            className={s.labelButtonDelete}
            onClick={() => remove(picture)}
          >
            <img className={s.loadedPicture} src={picture} />
            <Delete className={s.iconDelete} />
          </label>
        </div>
      ))}
      <div className={s.wrapperPicture}>
        <label className={s.labelAddPicture}>
          <input
            hidden={true}
            type={"file"}
            accept="image/jpeg, image/png"
            onChange={(e) => download(e)}
          />
          <Add className={s.iconAdd} />
        </label>
      </div>
    </div>
  );
};

export default UpLoadedPictures;
