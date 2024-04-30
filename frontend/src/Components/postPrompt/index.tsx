import { ChangeEvent, useState, FormEvent } from 'react';
import { FaImage, FaTrash } from 'react-icons/fa';

const PostPrompt = () => {
  const [title, setTitle] = useState<string>('');
  const [cotent, setCotent] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [counter, setCounter] = useState<number>(280);

  const handleTweetChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCotent(e.target.value);
    setCounter(280 - e.target.value.length);
  };

  const uploadImage = async (e: any) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setImage(base64 as string);
  };

  const convertBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const clearImg = () => {
    setImage('')
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  };

  return (
    <div>
      <div className="p-5 pt-10 flex-1 rounded-xl shadow-slate-950 shadow-lg items-center">
        <div className="flex-1">
          <form onSubmit={handleSubmit}>
            <div className="mb-3 pt-0">
              <input
                className="px-3 py-3 placeholder-blueGray-300 bg-transparent  text-blueGray-600
                rounded text-sm shadow focus:outline-none focus:shadow-outline w-full 
                ease-linear transition-all duration-150"
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-3 pt-0">
              <textarea
                className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-transparent rounded
                text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                rows={4}
                placeholder="What's happening?"
                value={cotent}
                onChange={handleTweetChange}
              />
            </div>
            {image ? 
              <div className='flex flex-col relative'>
                <span className='p-2 absolute top-0 right-0 ' onClick={clearImg}><FaTrash className='cursor-pointer text-red-600'/></span>
                <img src={image} alt="" />
              </div>
              :
              <div></div>
            }
            <div className="mb-3 pt-0 flex items-center">
              <label htmlFor="img"><FaImage /></label>
              <input 
                className='none invisible'
                type="file" 
                id="img" 
                name="img" 
                onChange={e => uploadImage(e)}
              />
            </div>
            <div className="flex justify-between items-center">
              <button
                className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase 
                text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none 
                mr-1 mb-1 ease-linear transition-all duration-150"
                type="submit"
              >
                Post
              </button>
              <span className="text-gray-500">{counter}</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PostPrompt;
