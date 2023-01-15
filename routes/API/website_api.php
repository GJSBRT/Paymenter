<?php

use App\Http\Controllers\API\Website\ProductController;
use App\Http\Controllers\API\Website\ThemeController;
use Illuminate\Support\Facades\Route;

// Products
Route::group(['prefix' => 'v1/products'], function () {
    Route::get('/', [ProductController::class, 'getProducts'])->name('api.website.v1.products.getProducts');
});

// Theme
Route::group(['prefix' => 'v1/theme'], function () {
    Route::get('/logo', [ThemeController::class, 'getLogo'])->name('api.website.v1.theme.getLogo');
});