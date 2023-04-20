 
import { useForm } from "react-hook-form";
import axios from "axios"; 
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import ApiUrl from "../Api/Api";
import { Link, useNavigate, useParams } from "react-router-dom";
 
 function ProvinceEdit() {

    const { register, handleSubmit, reset,  formState: { errors } } = useForm({ mode: 'onChange' }); 
  
    const navigate = useNavigate();
  
    const {id} = useParams();
    useEffect(() => {
      fetch(`${ApiUrl}/Religio/Provinceedit/${id}`).then((res) => {
          return res.json();
      }).then((resp) => {
        console.log(resp);
         reset(resp.data[0]);
      }).catch((err) => {
          console.log(err.message);
      })
    }, [])
    
    useEffect(() => {
      fetch(`${ApiUrl}/Religio/Province/Congregation`).then((res) => {
          return res.json();
      }).then((resp) => {
        Congregation(resp.data);
      }).catch((err) => {
          console.log(err.message);
      })
    }, [])
    const [ congre, Congregation ] = useState([]);



  function onSubmitCongregationform(data ,e){
    axios.put(`${ApiUrl}/Religio/Provinceupdate/${id}`,data)
    .then((Response)=>{
      if (Response.status === 200) {
        Swal.fire(
          'Province Updated Successfully..!',
          'Province updated ..',
          'success'
        );
        e.target.reset();
    navigate('/Religio/Province');
    }     
  }).catch((err)=>{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: err.message
    })
  })  
  
  }
      return (
 <div className="content-wrapper">
        <div className="page-header">
        <h3 className="page-title">
          <span className="page-title-icon bg-gradient-primary text-white me-2">
            <i className="mdi mdi-account-plus menu-icon" />
          </span> Province Update
        </h3>
        <nav aria-label="breadcrumb">
          <ul className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              <span />Overview <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle" />
            </li>
          </ul>
        </nav>
      </div>
        <div className="row"> 
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="row"><b className="card-description"> Province </b></div>
              <form className="form-sample" onSubmit={handleSubmit(onSubmitCongregationform)} > 
                <div className="row">
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Congregation</label>
                            <div className="col-sm-9">
                            <select className="form-control" name="Congregation"
                             {...register("Congregation", { required: true })}
                             aria-invalid={errors?.Congregation ? "true" : "false"}>
                            <option value="SelectCongregation">Select Congregation</option>
                            {         
                           congre && congre.map(item => (
                          <option value={item.CongregationName}>{item.CongregationName}</option>))
                             }
                              </select>
                              {errors?.Congregation?.type === 'required' && <div className='text-danger text_error'>Please Choose One Congregation</div>}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Province</label>
                            <div className="col-sm-9">
                            <input type="text" className="form-control" name="Province"
                            {...register("Province", { required: true, pattern: {value: /^[A-Za-z ]+$/, } })}
                            aria-invalid={errors?.Province ? "true" : "false"}  />
                            {errors?.Province?.type === 'required' && <div className='text-danger text_error'>Province Name is required</div>}
                            {errors?.Province?.type === "pattern" && <div className='text-danger text_error '>Province can contain only alphabets</div>}
                            </div>
                          </div>
                        </div>
                      </div>
                <div className="row"><b className="card-description"> Address </b></div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">Address 1</label>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" name="Address1"
                        {...register("Address1", { required: true, pattern: {value: /^[A-Za-z ]+$/, } })}
                        aria-invalid={errors?.Address1 ? "true" : "false"}  />
                        {errors?.Address1?.type === 'required' && <div className='text-danger text_error'>Address 1 is required</div>}
                        {errors?.Address1?.type === "pattern" && <div className='text-danger text_error '>Address 1 can contain only alphabets</div>}
                        </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">State</label>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" name="state"
                        {...register("state", { required: true, pattern: {value: /^[A-Za-z ]+$/, } })}
                        aria-invalid={errors?.state ? "true" : "false"}  />
                        {errors?.state?.type === 'required' && <div className='text-danger text_error'>State is required</div>}
                        {errors?.state?.type === "pattern" && <div className='text-danger text_error '>State can contain only alphabets</div>}
                       </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">Address 2</label>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" name="Address2"
                        {...register("Address2", { required: true, pattern: {value: /^[A-Za-z ]+$/, } })}
                        aria-invalid={errors?.Address2 ? "true" : "false"}  />
                        {errors?.Address2?.type === 'required' && <div className='text-danger text_error'>Address 2 is required</div>}
                        {errors?.Address2?.type === "pattern" && <div className='text-danger text_error '>Address 2 can contain only alphabets</div>}
                       </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">Postcode</label>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" name="Postcode"
                        {...register("Postcode", { required: true, pattern: {value: /^[0-9\b]+$/, } })}
                        aria-invalid={errors?.Postcode ? "true" : "false"}  />
                        {errors?.Postcode?.type === 'required' && <div className='text-danger text_error'>Postcode is required</div>}
                        {errors?.Postcode?.type === "pattern" && <div className='text-danger text_error '>Postcode can contain only Numbers</div>}
                     </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">City</label>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" name="City"
                        {...register("City", { required: true, pattern: {value: /^[A-Za-z ]+$/, } })}
                        aria-invalid={errors?.City ? "true" : "false"}  />
                        {errors?.City?.type === 'required' && <div className='text-danger text_error'>City is required</div>}
                        {errors?.City?.type === "pattern" && <div className='text-danger text_error '>City can contain only alphabets</div>}
                       </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">Country</label>
                      <div className="col-sm-9">
                        <select className="form-control" name="country"
                         {...register("country", { required: true })}
                         aria-invalid={errors?.country ? "true" : "false"}>
                          <option value="">Select Country</option>
                          <option value="India">India</option>
                          <option value="America">America</option>
                          <option value="Italy">Italy</option>
                          <option value="Russia">Russia</option>
                          <option value="Britain">Britain</option>
                        </select>
                        {errors?.country?.type === 'required' && <div className='text-danger text_error'>Please Choose One Country</div>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                <button class="btn btn-gradient-primary font-weight-bold " type="submit">Update</button>
                &nbsp; &nbsp; &nbsp; 
                <Link to="/Religio/Province" class="btn btn-gradient-primary font-weight-bold ">Cancel</Link>

                </div>  
              </form>
            </div>
          </div>
        </div>
        </div>
        </div>
      );
    }
    export default ProvinceEdit;
  