import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { BsArrowRight } from 'react-icons/bs';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const BannerEdit = () => {

    const {user} = useContext(AuthContext)

    const navigate = useNavigate()


    const { register, handleSubmit } = useForm();

    const imgBBkEY = process.env.REACT_APP_Imgbb_key;


    
    const imgEditHandle = data =>{
        const img = data?.photo[0];
        const formData = new FormData();
        formData.append("image", img);
    
        const url = `https://api.imgbb.com/1/upload?&key=${imgBBkEY}`;
        fetch(url, {
          method: "POST",
          body: formData,
        })
          .then((res) => res.json())
          .then((imgData) => {
            console.log(imgData);

            const bannerImg ={
                editorName: user?.displayName,
                editorEmail: user?.email,
                image: imgData?.data?.url,
            }


            if(imgData.success){
                fetch('', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                      },
                      body: JSON.stringify(bannerImg),
                })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    toast.success("Successfully added your blog");
                    navigate("/");
                });
              
            
            }

          })
    }





    const handleTextEditor = e => {
      e.preventDefault();

      const title = e.target.title.value;
      const description = e.target.description.value;


      console.log(title, description);

      const editTitle = {
        editorName: user?.displayName,
        editorEmail: user?.email,
        title,
        description,
      }


      fetch('', {
        method: 'POST',
        headers: { 'Content-Type': 'application'},
        body: JSON.stringify(editTitle)
      })
      .then(res => res.json())
      .then(result => {
        console.log(result);
      })




    }




    return (
        <div>

             <div className="m-10">
             <form onSubmit={handleSubmit(imgEditHandle)} className="card  border border-blue-200 dark:border-0 p-4 lg:p-10 bg-blue-100">
             <div className="w-full lg:w-6/12 px-4">
              
                    <div className="w-full">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Edit Banner Image
                      </label>
                      <input
                        {...register("photo")}
                        type="file"
                        required
                        className="block w-full"
                      />
                    </div>
                  </div>

                  <div className=" mt-5">
                  <button
                    type="submit"
                    className="group relative inline-flex items-center overflow-hidden rounded bg-blue-600 px-16 ml-4 py-4 text-white focus:outline-none focus:ring active:bg-blue-500"
                  >
                    <span className="absolute right-0  translate-x-full transition-transform group-hover:-translate-x-4">
                      <BsArrowRight className="text-2xl font-bold" />
                    </span>

                    <span className="text-md font-bold transition-all group-hover:mr-4">
                      Publish
                    </span>
                  </button>
                </div>
             </form>
             </div>




          <div className="m-10">
          <form onSubmit={handleTextEditor} className="card  w-96 border border-blue-200 dark:border-0 p-4 lg:p-10 bg-blue-100">
            <h3>Edit Banner Text</h3>
            <div className="my-2">
              <label className="flex justify-start mb-3 dark:text-black">Title</label>
              <input
                className="block border dark:text-black border-gray-300 w-full h-10 px-5 py-3 rounded-md outline-none"
                required
                placeholder='Edit Title'
                type="text"
                name="title"
              />
            </div>

            <div className="my-2">
              <label className="flex justify-start mb-3 dark:text-black">Description</label>
              <textarea
                required
                className="block dark:text-black cursor-pointer border border-gray-300 w-full p-5 rounded-md"
                name="description"
                cols="30"
                rows="3"
              ></textarea>
            </div>
            <div className=" mt-5">
                  <button
                    type="submit"
                    className="group relative inline-flex items-center overflow-hidden rounded bg-blue-600 px-16 ml-4 py-4 text-white focus:outline-none focus:ring active:bg-blue-500"
                  >
                    <span className="absolute right-0  translate-x-full transition-transform group-hover:-translate-x-4">
                      <BsArrowRight className="text-2xl font-bold" />
                    </span>

                    <span className="text-md font-bold transition-all group-hover:mr-4">
                      Publish
                    </span>
                  </button>
                </div>
          </form>
          </div>

        </div>
    );
};

export default BannerEdit;