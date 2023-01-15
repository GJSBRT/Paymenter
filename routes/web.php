<?php

use App\Classes\Routing;
use Illuminate\Support\Facades\Route;

if (!Routing::useLaravelRouting()) {
    Route::view('/{path?}', 'app')
    ->where('path', '^(?!(\/)?(api|static|images)).+');
}

Route::get('/', [App\Http\Controllers\BasisController::class, 'index'])->name('index');
Route::get('/home', [App\Http\Controllers\Clients\HomeController::class, 'index'])->middleware(['auth'])->name('clients.home');
Route::get('/manifest.json', [App\Http\Controllers\BasisController::class, 'manifest'])->name('manifest');
Route::get('/profile', [App\Http\Controllers\Clients\HomeController::class, 'profile'])->name('clients.profile')->middleware(['auth', 'password.confirm']);
Route::post('/profile', [App\Http\Controllers\Clients\HomeController::class, 'update'])->name('clients.profile.update')->middleware(['auth', 'password.confirm']);
Route::get('/change-password', [App\Http\Controllers\Clients\HomeController::class, 'password'])->name('clients.password.change-password')->middleware(['auth']);
Route::get('/products', [App\Http\Controllers\BasisController::class, 'products'])->name('products');

Route::group(['prefix' => 'checkout'], function () {
    Route::get('/', [App\Http\Controllers\CheckoutController::class, 'index'])->name('checkout.index');
    Route::get('/config/{id}', [App\Http\Controllers\CheckoutController::class, 'config'])->name('checkout.config');
    Route::post('/config/{id}', [App\Http\Controllers\CheckoutController::class, 'configPost'])->name('checkout.config.post');
    Route::post('/', [App\Http\Controllers\CheckoutController::class, 'pay'])->name('checkout.pay')->middleware('auth');
    Route::post('/{id}', [App\Http\Controllers\CheckoutController::class, 'remove'])->name('checkout.remove');
    Route::post('/{id}/update', [App\Http\Controllers\CheckoutController::class, 'update'])->name('checkout.update');
    Route::get('/add', [App\Http\Controllers\CheckoutController::class, 'add'])->name('checkout.add');
    Route::get('/success', [App\Http\Controllers\CheckoutController::class, 'success'])->name('checkout.success');
    Route::get('/cancel', [App\Http\Controllers\CheckoutController::class, 'cancel'])->name('checkout.cancel');
});

Route::group(['prefix' => 'tickets', 'middleware' => 'auth'], function () {
    Route::get('/', [App\Http\Controllers\Clients\TicketsController::class, 'index'])->name('clients.tickets.index');
    Route::get('/create', [App\Http\Controllers\Clients\TicketsController::class, 'create'])->name('clients.tickets.create');
    Route::post('/store', [App\Http\Controllers\Clients\TicketsController::class, 'store'])->name('clients.tickets.store');
    Route::get('/{id}', [App\Http\Controllers\Clients\TicketsController::class, 'show'])->name('clients.tickets.show');
    Route::post('{id}/reply', [App\Http\Controllers\Clients\TicketsController::class, 'reply'])->name('clients.tickets.reply');
    Route::post('{id}/close', [App\Http\Controllers\Clients\TicketsController::class, 'close'])->name('clients.tickets.close');
});

Route::group(['prefix' => 'invoices', 'middleware' => 'auth'], function () {
    Route::get('/', [App\Http\Controllers\Clients\InvoiceController::class, 'index'])->name('clients.invoice.index');
    Route::get('/{id}', [App\Http\Controllers\Clients\InvoiceController::class, 'show'])->name('clients.invoice.show');
    Route::post('/{id}/pay', [App\Http\Controllers\Clients\InvoiceController::class, 'pay'])->name('clients.invoice.pay');
    Route::get('/{id}/download', [App\Http\Controllers\Clients\InvoiceController::class, 'download'])->name('clients.invoice.download');
});

Route::group(['prefix' => 'client/products', 'middleware' => 'auth'], function () {
    Route::get('/', [App\Http\Controllers\Clients\ProductsController::class, 'index'])->name('clients.active-products.index');
    Route::get('/{product}', [App\Http\Controllers\Clients\ProductsController::class, 'index'])->name('clients.active-products.show');
});

require __DIR__ . '/auth.php';
require __DIR__ . '/admin.php';
require __DIR__ . '/extensions.php';
