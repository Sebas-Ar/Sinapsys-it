<?php

namespace App\Http\Controllers;

use App\Offers;
use Illuminate\Http\Request;

class OffersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $offers = Offers::all();
        return response()->json($offers);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {   
        $newOffer = Offers::create([
            'experiencia' => $request->json()->get('experiencia'),
            'cargo' => $request->json()->get('cargo'),
            'descripcion' => $request->json()->get('descripcion')
        ]);

        return response()->json(compact('newOffer'),201);
    }

    /**
     * 
     * Remove the specified resourse from storage.
     * 
     * @param \App\Offers $offers
     * @return \Illuminate\Http\Response
     */

    public function destroy($id)
    {
        $offer = Offers::find($id)->delete();

        return response('eliminado');
    }

}
