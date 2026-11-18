import { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import UseAnimations from 'react-useanimations';
import plusToX from 'react-useanimations/lib/plusToX';
import visibility from 'react-useanimations/lib/visibility';
import trash2 from 'react-useanimations/lib/trash2';
import edit3 from 'react-useanimations/lib/edit3';
import copy from 'react-useanimations/lib/copy';
import { ToastContainer, toast, Slide } from 'react-toastify';




const Manager = () => {
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const isFormCompleted = form.username === "" || form.password === "" || form.site === ""
    const [passwordArray, setPasswordArray] = useState([])
    let passwordRef = useRef()
    const showPassword = () => {
        if (passwordRef.current.type === "password") {
            passwordRef.current.type = "text"
        }
        else {
            passwordRef.current.type = "password"
        }
    }
    useEffect(() => {
        let passwords = localStorage.getItem("passwords")
        if (passwords) {
            setPasswordArray(JSON.parse(passwords));
        }
    }, [])
    const copyText = (text) => {
        toast.info('Copied to clipboard!');
        navigator.clipboard.writeText(text)
    }

    const savePassword = () => {
      if (form.site.length>3 && form.username.length>3 && form.site.length >3){
        if( form.site.includes("www.")){
          setPasswordArray([...passwordArray, {...form, id: uuidv4()}]);
          localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form, id: uuidv4()}]));
          setform({ site: "", username: "", password: "" });
          toast.success('Password Saved Successfully!');
        }
        else{
          toast.warn("Not a Valid Website url")
        }
      }
      else{
        toast.warn("Minimum length of Password, username, and website should be greater than 3",{
          theme:"dark"
        })
      }
    }
    const deletePassword = (id) => {
        setPasswordArray(passwordArray.filter(item=>item.id!=id))
        localStorage.setItem("passwords",JSON.stringify(passwordArray.filter(item=>item.id!=id)))
        toast.error('Password Deleted');
    }
    const editPassword = (id) => {
        let editElement = passwordArray.filter(item=>item.id==id)[0]
        setform({site:editElement.site,username:editElement.username,password:editElement.password})
        setPasswordArray(passwordArray.filter(item=>item.id!=id))
    }
    

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss={false}
                pauseOnHover={false}
                draggable={false}
                theme="light"
                transition={Slide}
            />
            <div className="absolute top-0 -z-10 h-full w-full bg-white"><div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#d1f9df] opacity-50 blur-[80px]"></div></div>
            <div className="md:mycontainer">
                <div className="logo text-4xl mb-5 p-1 text-center">
                    <span className="text-[#10B981] font-bold">&lt;</span>
                    <span className='text-black text-4xl font-mono font-bold'>Pass<span className='text-[#10B981]'>Op</span></span>
                    <span className="text-[#10B981] font-bold"> /&gt;</span>
                    <p className='text-emerald-700 text-xs'>Your Own Password Manager</p>
                </div>
                <div className="text-white flex flex-col gap-3 p-3">
                    <input value={form.site} onChange={(e) => {
                        setform({ ...form, site: e.target.value })
                    }} placeholder='Enter website URL (e.g. www.PassOp.com)' className='rounded-xl border border-green-500 w-full bg-white text-black px-3 py-1 outline-none' type="text" />
                    <div className="flex md:flex-row flex-col w-full gap-5">
                        <input value={form.username} onChange={(e) => {
                            setform({ ...form, username: e.target.value })
                        }} placeholder='Enter Username' className='rounded-2xl border border-green-500 w-full bg-white text-black px-3 py-1 outline-none' type="text" />
                        <div className="relative">
                            <input type='password' ref={passwordRef} value={form.password} onChange={(e) => {
                                setform({ ...form, password: e.target.value })
                            }} placeholder='Enter Password' className='rounded-2xl border border-green-500 w-full bg-white text-black px-3 py-1 outline-none' />
                            <span className='absolute right-1 text-[#099365] cursor-pointer text-xs top-2' onClick={showPassword}><UseAnimations animation={visibility} size={20} reverse={true} /></span>
                        </div>
                    </div>
                    {
                        isFormCompleted ? <button onClick={savePassword} disabled className='font-bold text-[#047857] bg-[#A7F3D0] gap-2 border border-[#6EE7B7] active:outline-[#A7F3D0] my-3 mx-auto w-fit rounded-full px-3 pr-5 py-2 cursor-pointer flex justify-center items-center text-lg'> <UseAnimations animation={plusToX} size={32} /> Save Password</button> : <button onClick={savePassword} className='font-bold text-white bg-[#10B981] gap-2 border border-green-600  hover:bg-emerald-600 active:outline-[#A7F3D0] my-3 mx-auto w-fit rounded-full px-3 pr-5 py-2 cursor-pointer flex justify-center items-center text-lg'> <UseAnimations animation={plusToX} size={32} /> Save Password</button>
                    }
                </div>
                <div className="passwords m-1">
  <h2 className="font-semibold text-xl md:text-2xl my-2">Your Passwords:</h2>

  {passwordArray.length === 0 && (
    <div className="text-sm text-gray-500">No passwords to show</div>
  )}

  {passwordArray.length != 0 && (
    <table className="table-fixed w-full rounded-md overflow-hidden mb-6">
      <thead className="bg-emerald-800 text-white">
        <tr className="text-xs sm:text-sm md:text-base">
          <th className="py-2 px-1 w-[28%]">WebSite</th>
          <th className="py-2 px-1 w-[24%]">Username</th>
          <th className="py-2 px-1 w-[24%]">Password</th>
          <th className="py-2 px-1 w-[24%]">Actions</th>
        </tr>
      </thead>

      <tbody className="bg-emerald-100">
        {passwordArray.map((item, idx) => {
          const td = "py-2 px-1 text-center align-middle text-xs sm:text-sm md:text-base";
          const inner = "flex justify-center items-center gap-0.5 min-w-0";

          return (
            <tr key={idx}>
              <td className={td}>
                <div className={inner}>
                  <a className="break-all" href={`https://${item.site}`} target="_blank" rel="noreferrer">
                    {item.site}
                  </a>
                  <div className="useanimationscopy shrink-0" onClick={() => copyText(item.site)}>
                    <UseAnimations animation={copy} size={20} className="cursor-pointer" />
                  </div>
                </div>
              </td>

              <td className={td}>
                <div className={inner}>
                  <span className="break-all">{item.username}</span>
                  <div className="useanimationscopy shrink-0" onClick={() => copyText(item.username)}>
                    <UseAnimations animation={copy} size={20} className="cursor-pointer" />
                  </div>
                </div>
              </td>

              <td className={td}>
                <div className={inner}>
                  <span className="break-all">{item.password}</span>
                  <div className="useanimationscopy shrink-0" onClick={() => copyText(item.password)}>
                    <UseAnimations animation={copy} size={20} className="cursor-pointer" />
                  </div>
                </div>
              </td>

              <td className={td}>
                <div className="flex justify-center items-center gap-1">
                  <span onClick={() => editPassword(item.id)} className="cursor-pointer text-emerald-800 shrink-0">
                    <UseAnimations animation={edit3} size={24} />
                  </span>
                  <span onClick={() => deletePassword(item.id)} className="cursor-pointer text-red-600 shrink-0">
                    <UseAnimations animation={trash2} size={24} />
                  </span>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  )}
</div>
            </div>
        </>
    )
}

export default Manager