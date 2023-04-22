<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\Website\AnnouncementController;
use App\Http\Controllers\API\Website\CategoryController;
use App\Http\Controllers\API\Website\ProductController;

// Products
Route::group(['prefix' => 'v1/products'], function () {
    Route::get('/', [ProductController::class, 'getProducts'])->name('api.website.v1.products.getProducts');
});

// Categories
Route::group(['prefix' => 'v1/categories'], function () {
    Route::get('/', [CategoryController::class, 'getCategories'])->name('api.website.v1.products.getCategories');
});

// Annoucements
Route::group(['prefix' => 'v1/announcements'], function () {
    Route::get('/', [AnnouncementController::class, 'getAnnouncements'])->name('api.website.v1.products.getAnnouncements');
});
