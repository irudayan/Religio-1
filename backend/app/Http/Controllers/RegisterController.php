<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
Use Auth;



class RegisterController extends Controller
{
    Private $status = 200;
       
    public function Register(Request $req)
    {
       
             $user = new User;
             $user->userName=$req->input('userName');
             $user->email=$req->input('email');
             $user->password=Hash::make($req->input('password'));
             $user->confirmPassword=Hash::make($req->input('confirmPassword'));
             $user->save();
       }  
               
          

    public function Login(Request $req)
    {
       $user = User::where('email',$req->email)->first();

       if(!$user || !Hash::check($req->password,$user->password))
       {
            return["loginVal"=>"error"];
       }else{
            return ["loginVal"=>"true"]; 
       }

       return $user; 
    }

}  

