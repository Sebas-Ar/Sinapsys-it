<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendMail;

class MessagesController extends Controller
{
    public function store(Request $request){

        Mail::to('servicliente@sinapsys-it.com')->send(new SendMail($request->only('nombre', 'email', 'pais', 'celular', 'mensaje')));

        return response($request);
    }
}
