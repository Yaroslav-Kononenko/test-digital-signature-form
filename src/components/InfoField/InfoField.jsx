import './InfoField.scss';
import classnames from 'classnames';
import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';

export const InfoField = ({
  userdata,
  setUserData,
  activeAdding
}) => {
  const onDrop = useCallback((acceptedFiles) => { // создали функцию для обработки файла
    acceptedFiles.forEach((file) => { // обрабатіваем каждій файл из массива acceptedFiles
      const reader = new FileReader() // создаём обьект файлридер
      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
      // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);

        const ASN1 = require('@lapo/asn1js');
        const result = ASN1.decode(file);
        if (result.typeName() !== 'SEQUENCE') {
          throw 'Неправильна структура конверта сертифіката (очікується SEQUENCE)';
        }
        const tbsCertificate = result.sub[0];
        console.log('sertificat ',tbsCertificate);

      }
      reader.readAsArrayBuffer(file)
    })
    
  }, [])

  const {getRootProps, getInputProps} = useDropzone({onDrop});

  return (
    <div className={classnames("InfoField", {
      "dropactive": !activeAdding
    })}>
      {activeAdding && (
        <div>
          <span>Виберіть сертифікат, щоб переглянути інформацію</span>
        </div>
      )}
      
      {!activeAdding && (
        <div {...getRootProps()}>
          <input {...getInputProps()}/>
          <p className="Filefield">Перетягніть файл сертифіката у поле</p>
        </div>
      )}
    </div>
  )
};
