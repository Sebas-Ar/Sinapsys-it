<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Offers extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'experiencia', 'cargo', 'descripcion',
    ];

}
