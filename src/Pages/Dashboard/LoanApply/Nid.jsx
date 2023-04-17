import React, { useState } from 'react';

const Nid = () => {
    const [imageUrl, setImageUrl] = useState("https://gumlet.assettype.com/bdnews24-english%2Fimport%2Fmedia%2F2015%2F06%2F01%2Fsmart-card.jpg?auto=format%2Ccompress&fmt=webp&format=webp&w=768");

  function handleImageUpload(event) {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImageUrl(imageUrl);
  }
    function drop(event) {
      event.preventDefault();
      const filesLength = files.length;
      const filesArray = Array.from({ length: filesLength }, (_, index) => files[index]);
      const filesToAdd = event.dataTransfer.files;
      for (let i = 0; i < filesToAdd.length; i++) {
        filesArray.push(filesToAdd[i]);
      }
      setFiles(filesArray);
    }
  
    function dragstart(event) {
      event.dataTransfer.setData('text/plain', event.target.dataset.index);
    }
  
    function dataFileDnD() {
      return {
        files,
        fileDragging: null,
        drop,
        dragstart,
      };
    }

    return (
        <div>
            <h1 className='text-xl text-[#2A9D8F] font-medium NID Or Birth Certificate'>Upload Your Identification NID Or Birth Certificate</h1>
            <div className="bg-white p-7 rounded">
      <div x-data={dataFileDnD} className="relative flex flex-col p-4 text-gray-400 border border-gray-200 rounded">
        <div x-ref="dnd" className="relative flex flex-col text-gray-400 border border-gray-200 border-dashed rounded cursor-pointer">
          <input accept="*" type="file" multiple
            className="absolute inset-0 z-50 w-full h-full p-0 m-0 outline-none opacity-0 cursor-pointer"
            onChange={handleImageUpload}
            onDragOver={() => {
              refs.dnd.classList.add('border-blue-400');
              refs.dnd.classList.add('ring-4');
              refs.dnd.classList.add('ring-inset');
            }}
            onDragLeave={() => {
              refs.dnd.classList.remove('border-blue-400');
              refs.dnd.classList.remove('ring-4');
              refs.dnd.classList.remove('ring-inset');
            }}
            onDrop={() => {
              refs.dnd.classList.remove('border-blue-400');
              refs.dnd.classList.remove('ring-4');
              refs.dnd.classList.remove('ring-inset');
            }}
            title=""
          />
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <svg className="w-6 h-6 mr-1 text-current-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="m-0">Drag your files here or click in this area Upload File Only .Png .Jpg .Jpeg </p>
          </div>
        </div>
        {imageUrl && <img src={imageUrl} alt="Preview" className='h-64' />}
  </div>
</div>
</div>
    );
};

export default Nid;