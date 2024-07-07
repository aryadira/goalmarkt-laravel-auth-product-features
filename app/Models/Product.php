<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_name',
        'selling_price',
        'description',
        'product_condition',
        'product_size',
        'status',
        'expiry_date'
    ];
}
