<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'no_resi',
        'product_name',
        'user_id',
        'selling_price',
        'description',
        'product_condition',
        'product_size',
        'status',
        'expiry_date'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public static function generateNoResi()
    {
        $latestProduct = self::latest('id')->first();
        if (!$latestProduct) {
            // Jika tidak ada produk, mulai dengan nomor resi pertama
            return 'RESI-000001';
        }

        $latestNoResi = $latestProduct->no_resi;
        $number = intval(substr($latestNoResi, 5)) + 1;
        return 'RESI-' . str_pad($number, 6, '0', STR_PAD_LEFT);
    }
}
