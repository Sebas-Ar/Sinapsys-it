<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Facades\JWTFactory;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Tymon\JWTAuth\PayLoadFactory;
use Tymon\JWTAuth\JWTManager as JWT;

use Illuminate\Support\Facades\Mail;
use App\Mail\MessagePassword;

class UserController extends Controller {

    public function register(Request $request){

        $validator = Validator::make($request->json()->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJson(),400);
        }

        $user = User::create([
            'name' => $request->json()->get('name'),
            'pais' => $request->json()->get('pais'),
            'celular' => $request->json()->get('celular'),
            'email' => $request->json()->get('email'),
            'password' => Hash::make($request->json()->get('password')),
        ]);

        $token = JWTAuth::fromUser($user);

        Mail::to($request->email)->send(new MessagePassword($request->password));

        return response()->json(compact('user','token'),201);
    }

    public function login(Request $request){

        $credentials = $request->json()->all();

        try {
            if(! $token = JWTAuth::attempt($credentials)){
                return response()->json(['error' => 'invalid_credentials'], 400);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }
        return response()->json(compact('token'));
    }

    public function getAuthenticatedUser(Request $request){

        $user = User::where('email',$request->email)->get();

        return response()->json(compact('user'));

    }
}