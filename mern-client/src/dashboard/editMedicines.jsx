import { useLoaderData, useNavigate } from "react-router-dom"
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from 'sweetalert2'
import { useForm } from "react-hook-form";
import { GiMedicines } from "react-icons/gi";

const EditMedicines = () => {
  const item = useLoaderData();
  console.log(item);

  const {register, handleSubmit, setValue , reset} = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  // img hosting key
  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  // console.log(image_hosting_key);
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

  const onSubmit = async (data) => {
    // console.log(data); 
    if (data.imageUrl) {
      const formData = new FormData();
    formData.append("image", data.imageUrl);
      try {
        const hostingImg = await axiosPublic.post(image_hosting_api, formData, {
          headers: {
            "content-type": "multipart/form-data",
          },
        });
        // console.log(hostingImg);
        if(hostingImg.data.success) {
          const medicineItem = {
            medicineName: data.medicineName,
            medicinePricePKR: parseFloat(data.medicinePricePKR),
            ManufacturedBy: data.ManufacturedBy,
            category: data.category,
            DrugForm: data.DrugForm,
            PackSize: data.PackSize,
            medicineDescription: data.medicineDescription,
            imageUrl: hostingImg.data.data.display_url
          }
          // console.log(medicineItem);
          try {
            const postMenuItem = await axiosSecure.patch(`/all-medicines/${item._id}`, medicineItem);
            // console.log(postMenuItem);
            if(postMenuItem) {
              reset()
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Medicine Updated Successfully!",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/admin/dashboard/manage');
            }
          } catch (error) {
            console.error("Error posting medicine item:", error);
            if (error.response) {
              console.log("Server responded with:", error.response.data);
            }
          }          
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    } else {
      console.error("No image selected for upload");
    }
  };

  return (
    <div className="w-full md:w-[970px] px-4 mx-auto">
    <h2 className="text-2xl font-bold my-4">
      Update this <span className="text-blue-700">Medicine</span>
    </h2>
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* 1st row  */}
          <div className="form-control w-full">
            <div className="flex items-center gap-4">
              <div className="form-control w-full max-w-xs">
              <label className="form-control w-full ">
              <label className="label">
                <span className="label-text">Medicine Name</span>
              </label>
                <input type="text"
                defaultValue={item.medicineName} 
                {...register("medicineName", { required: true })} 
                placeholder="Medicine Name" 
                className="input input-bordered w-full max-w-xs" />
            </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="form-control w-full ">
              <label className="label">
                <span className="label-text">Medicine Price</span>
              </label>
                <input type="text" 
                defaultValue={item.medicinePricePKR}
                {...register("medicinePricePKR", { required: true })} 
                placeholder="Medicine Price" 
                className="input input-bordered w-full max-w-xs" />
            </label>  
            </div>
            </div>
          </div>
          {/* 2nd row */}
          <div className="flex items-center gap-4">
            <div className="form-control w-full max-w-xs">
              <label className="form-control w-full ">
              <label className="label">
                <span className="label-text">Manufactured By</span>
              </label>
                <input type="text" 
                defaultValue={item.ManufacturedBy}
                {...register("ManufacturedBy", { required: true })} 
                placeholder="Manufactured By" 
                className="input input-bordered w-full max-w-xs" />
            </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select 
              defaultValue={item.category}
              {...register("category", { required: true })} 
              className="select select-bordered">
              <option disabled >Select a category</option>
                <option>Antibiotics</option>
                <option>Pain Killars</option>
                <option>Antiseptics</option>
                <option>Antiparasitics</option>
                <option>Cough and Cold</option>
                <option>Hormones (e.g., Insulin)</option>
                <option>Respiratory</option>
                <option>Thyroid</option>
                <option>Bone Health</option>
                <option>Antihistamines (Allergy)</option>
                <option>Pain Relieve</option>
                <option> treat skin </option>
                <option>Vitamins and Supplements</option>
                <option>Drops</option>
                <option>Nutritional supplements</option>
                <option>multivitamin</option>
                <option>Sleep Aids</option>
                <option>Joint and Muscle Health</option>
              </select>
              
            </div>
          </div>
          {/* 3rd row  */}
          <div className="flex items-center gap-4">
            <div className="form-control w-full max-w-xs">
              <label className="form-control w-full ">
              <label className="label">
                <span className="label-text">Drug Form</span>
              </label>
                <input 
                type="text" 
                defaultValue={item.DrugForm}
                {...register("DrugForm", { required: true })} 
                placeholder="Drug Form" 
                className="input input-bordered w-full max-w-xs" />
            </label>  
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="form-control w-full ">
              <label className="label">
                <span className="label-text">Pack Size</span>
              </label>
                <input type="text" 
                defaultValue={item.PackSize}
                {...register("PackSize", { required: true })} 
                placeholder="Pack Size" 
                className="input input-bordered w-full max-w-xs" />
            </label>  
            </div>
          </div>
          {/* 4th row */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Medicine Description</span>
            </label>
            <textarea className="textarea textarea-bordered h-24" 
            defaultValue={item.medicineDescription}
            {...register("medicineDescription", { required: true })}  placeholder="Medicine Description"></textarea>
          </div>
          <div className="form-control w-full my-6">
          <input
            type="file"
            onChange={(e) => {
              const file = e.target.files[0];
              setValue("imageUrl", file);
            }}
            className="file-input w-full max-w-xs"
          />
          </div>
          <button className="btn bg-blue-700 text-white px-6 m-5">
            Update Medicine 
            <GiMedicines size={24}/>
          </button>
        </form>
    </div>

    </div>
  )
}

export default EditMedicines