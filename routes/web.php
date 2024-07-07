<?php

use App\Http\Controllers\MailController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TwoFactorController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::resource('verify', TwoFactorController::class);

Route::get('/dashboard', [ProductController::class, 'index'])->middleware(['auth', 'verified', 'two_factor'])->name('dashboard');
Route::get('/products/create', [ProductController::class, 'create'])->middleware(['auth', 'verified', 'two_factor'])->name('products.create');
Route::post('/products/store', [ProductController::class, 'store'])->middleware(['auth', 'verified', 'two_factor'])->name('products.store');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
