<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();

        return Inertia::render('ProductDashboard', [
            'products' => $products
        ]);
    }

    public function create()
    {
        return Inertia::render('AddProduct');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProductRequest $request)
    {
        $data = $request->validated();
        $user = Auth::user();

        $product = Product::create([
            'product_name' => $data['product_name'],
            'selling_price' => $data['selling_price'],
            'description' => $data['description'],
            'product_condition' => $data['product_condition'],
            'product_size' => $data['product_size'],
            'user_id' => $user->id
        ]);

        return redirect(route('dashboard', [
            'product' => $product
        ]));
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
