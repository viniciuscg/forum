import React, { useRef, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { IUser } from '../../../../Services/User/IUser';
import { UserServices } from '../../../../Services/User/userServices';

interface IProps {
  user: IUser
  onClose(): void
}

function EditProfile(props: IProps) {
  const [name, setName] = useState(props.user.name)
  const [imgBackground, setImgBackground] = useState("")
  const [bio, setBio] = useState(props.user.bio!)
  const [img, setImg] = useState(props.user.img)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const bgInputRef = useRef<HTMLInputElement>(null)

  const handleImgChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImg(URL.createObjectURL(event.target.files![0]))
  }

  const handleBgChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImgBackground(URL.createObjectURL(event.target.files![0]))
  }

  const handleIconClick = (inputRef: React.RefObject<HTMLInputElement>) => {
    if (inputRef.current) {
      inputRef.current.click()
    }
  }

  const convertBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)

      fileReader.onload = () => {
        resolve(fileReader.result)
      }

      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  
    const imgFile = fileInputRef.current?.files?.[0]
    const bgFile = bgInputRef.current?.files?.[0]
  
    const imgBase64 = await convertBase64(imgFile)
    const bgImgBase64 = await convertBase64(bgFile)

    await UserServices.update({
      backgroundImg: bgImgBase64 as string,
      bio,
      img: imgBase64 as string,
      name,
    })
  
    props.onClose()
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col p-10 gap-20">
      <div className="relative flex h-40 w-full object-cover bg-black">
        <img src={imgBackground} />
        <label>
          <img className="absolute gap-5 bottom-0 transform translate-y-1/2 right-40 h-24 w-24 rounded-full border-4 border-white" src={img}  />
          <input ref={fileInputRef} className="hidden" type="file" onChange={handleImgChange} />
          <h2 className="text-2xl absolute translate-y-11 right-40 bottom-0 font-bold" onClick={() => handleIconClick(fileInputRef)}><FaEdit/></h2>
        </label>
        <label className="absolute top-0 right-0">
          <input ref={bgInputRef} className="hidden" type="file" onChange={handleBgChange} />
          <h2 className="text-2xl font-bold" onClick={() => handleIconClick(bgInputRef)}><FaEdit/></h2>
        </label>
      </div>
      <div className="flex flex-col gap-8">
        <label className="flex flex-col gap-2">
          <span>Name:</span>
          <input 
            type="text" 
            placeholder={name} 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            className="px-3 py-3 placeholder-blueGray-300 bg-transparent  text-blueGray-600
            rounded text-sm shadow focus:outline-none focus:shadow-outline w-full 
            ease-linear transition-all duration-150"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span>Bio:</span>
          <textarea 
            value={bio} 
            placeholder={bio}
            onChange={(e) => setBio(e.target.value)} 
            className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-transparent rounded
            text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150" 
          />
        </label>
        <button 
          type="submit" 
          className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase 
          text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none 
          mr-1 mb-1 ease-linear transition-all duration-150"
        >
          Salvar
        </button>
      </div>
    </form>
  )
}

export default EditProfile
