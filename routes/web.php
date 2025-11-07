<?php

use Illuminate\Support\Facades\Route;

// catch-all route for vue router
Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');
